import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import { JSDOM } from 'jsdom'
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

const PASS = '\x1b[32m\xE2\x9C\x93\x1b[0m'
const FAIL = '\x1b[31m\xE2\x9C\x97\x1b[0m'
const BOLD = (s) => '\x1b[1m' + s + '\x1b[0m'

const tests = []
const test = (name, fn) => tests.push({ name, fn })
const assert = (cond, msg) => {
  if (!cond) throw new Error(msg)
}

let document
let window
let distDir = join(root, 'dist')

test('1. The #header element exists and is fixed/sticky at the top', () => {
  const el = document.querySelector('#header')
  assert(el, '#header is missing')
  const style = window.getComputedStyle(el)
  assert(
    style.position === 'fixed' || style.position === 'sticky',
    'expected #header to be fixed/sticky, got "' + style.position + '"',
  )
})

test('2. There is a #nav-bar with that id', () => {
  const el = document.querySelector('#nav-bar')
  assert(el, '#nav-bar is missing')
})

test('3. At least three .nav-link elements inside #nav-bar', () => {
  const links = document.querySelectorAll('#nav-bar a.nav-link')
  assert(
    links.length >= 3,
    'expected at least 3 .nav-link elements, found ' + links.length,
  )
})

test('4. Every .nav-link has an href attribute', () => {
  const links = document.querySelectorAll('#nav-bar a.nav-link')
  for (const link of links) {
    const href = link.getAttribute('href')
    assert(href && href.startsWith('#'), link.outerHTML + ' has no href')
  }
})

test('5. Every .nav-link target element exists in the document', () => {
  const links = document.querySelectorAll('#nav-bar a.nav-link')
  for (const link of links) {
    const href = link.getAttribute('href').slice(1)
    const target = document.getElementById(href)
    assert(target, 'linked element #' + href + ' does not exist')
  }
})

test('6. #header-img is an <img> with a src attribute', () => {
  const img = document.querySelector('#header-img')
  assert(img && img.tagName === 'IMG', '#header-img must be an <img>')
  assert(img.getAttribute('src'), '#header-img must have a src')
})

test('7. There is a <form> with id="form"', () => {
  const form = document.querySelector('#form')
  assert(form && form.tagName === 'FORM', '#form must be a <form> element')
})

test('8. Form action is https://www.freecodecamp.com/email-submit', () => {
  const form = document.querySelector('#form')
  const action = form.getAttribute('action')
  assert(
    action === 'https://www.freecodecamp.com/email-submit',
    'unexpected action: "' + action + '"',
  )
})

test('9. #email is an input with type="email"', () => {
  const input = document.querySelector('#email')
  assert(input && input.tagName === 'INPUT', '#email must be an <input>')
  assert(
    input.getAttribute('type') === 'email',
    '#email must have type="email"',
  )
})

test('10. #submit is an input with type="submit"', () => {
  const input = document.querySelector('#submit')
  assert(input && input.tagName === 'INPUT', '#submit must be an <input>')
  assert(
    input.getAttribute('type') === 'submit',
    '#submit must have type="submit"',
  )
})

test('11. #video is an HTML5 media element with controls', () => {
  const v = document.querySelector('#video')
  assert(v, '#video is missing')
  assert(
    ['VIDEO', 'IFRAME', 'EMBED'].includes(v.tagName),
    '#video must be a video/iframe/embed element, got ' + v.tagName,
  )
  assert(v.hasAttribute('controls'), '#video must have the controls attribute')
})

test('12. Built CSS contains a @media query (responsive design)', async () => {
  await ensureBuilt()
  const assetsDir = join(distDir, 'assets')
  const dirEntries = await readdir(assetsDir)
  const cssFiles = dirEntries.filter((f) => f.endsWith('.css'))
  let cssText = ''
  for (const f of cssFiles) {
    cssText += '\n' + (await readFile(join(assetsDir, f), 'utf8'))
  }
  assert(
    cssText.includes('@media'),
    'expected a @media rule in built CSS — Tailwind should generate one',
  )
})

test('13. Layout uses Flexbox or CSS Grid (Tailwind utilities)', async () => {
  await ensureBuilt()
  const assetsDir = join(distDir, 'assets')
  const dirEntries = await readdir(assetsDir)
  const cssFiles = dirEntries.filter((f) => f.endsWith('.css'))
  let cssText = ''
  for (const f of cssFiles) {
    cssText += '\n' + (await readFile(join(assetsDir, f), 'utf8'))
  }
  const hasFlex = /display\s*:\s*flex/.test(cssText)
  const hasGrid = /display\s*:\s*grid/.test(cssText)
  assert(
    hasFlex || hasGrid,
    'expected flex or grid layout utilities in built CSS',
  )
})

const findHamburgerButton = () => {
  const byAria = document.querySelector(
    '#nav-bar button[aria-label="Toggle navigation"]',
  )
  if (byAria) return byAria
  const byExpanded = document.querySelector(
    '#nav-bar button[aria-expanded]',
  )
  return byExpanded
}

test('14. Hamburger toggle button exists in the navbar', () => {
  const btn = findHamburgerButton()
  assert(btn, 'no hamburger button found inside #nav-bar')
  assert(
    btn.tagName === 'BUTTON',
    'hamburger element must be a <button>, got ' + btn.tagName,
  )
})

test('15. Hamburger starts closed (aria-expanded="false" on initial render)', () => {
  const btn = findHamburgerButton()
  assert(btn, 'no hamburger button found inside #nav-bar')
  const expanded = btn.getAttribute('aria-expanded')
  assert(
    expanded === 'false',
    'hamburger must start closed (aria-expanded="false"), got "' + expanded + '"',
  )
})

test('16. Mobile dropdown menu is not rendered while hamburger is closed', () => {
  const btn = findHamburgerButton()
  const expanded = btn && btn.getAttribute('aria-expanded')
  assert(
    expanded === 'false',
    'hamburger must start closed before checking mobile menu',
  )
  const lists = document.querySelectorAll('#nav-bar ul')
  assert(
    lists.length === 1,
    'expected exactly 1 <ul> in #nav-bar when hamburger is closed, found ' +
      lists.length,
  )
})

let built = false
const ensureBuilt = async () => {
  if (built) return
  await build({
    root,
    logLevel: 'error',
    configFile: join(root, 'vite.config.js'),
  })
  built = true
}

const readInlineCss = async () => {
  await ensureBuilt()
  const assetsDir = join(distDir, 'assets')
  const dirEntries = await readdir(assetsDir)
  const cssFiles = dirEntries.filter((f) => f.endsWith('.css'))
  let cssText = ''
  for (const f of cssFiles) {
    cssText += '\n' + (await readFile(join(assetsDir, f), 'utf8'))
  }
  return cssText
}

const buildSsr = async () => {
  console.log(BOLD('→ Building SSR bundle for the app...'))
  await build({
    root,
    logLevel: 'error',
    configFile: false,
    plugins: [vue()],
    build: {
      ssr: 'src/entry-server.js',
      outDir: 'dist-ssr',
      emptyOutDir: true,
      rollupOptions: {
        input: 'src/entry-server.js',
        output: { format: 'esm', entryFileNames: 'entry-server.mjs' },
      },
    },
  })
  console.log(BOLD('→ Building client bundle to inspect CSS...'))
  await build({
    root,
    logLevel: 'error',
    configFile: join(root, 'vite.config.js'),
  })
}

const runApp = async () => {
  const ssrPath = join(root, 'dist-ssr', 'entry-server.mjs')
  const mod = await import(pathToFileURL(ssrPath).href)
  return mod.render()
}

const run = async () => {
  let passed = 0
  let failed = 0
  for (const t of tests) {
    try {
      await t.fn()
      console.log('  ' + PASS + ' ' + t.name)
      passed++
    } catch (err) {
      console.log('  ' + FAIL + ' ' + t.name + '\n      ' + err.message)
      failed++
    }
  }

  console.log('')
  console.log(BOLD('Results: ' + passed + '/' + tests.length + ' passed'))
  if (failed > 0) {
    console.log(FAIL + ' ' + failed + ' test(s) failed.')
    process.exit(1)
  } else {
    console.log(PASS + ' All FCC Product Landing Page assertions still hold.')
  }
}

const main = async () => {
  await buildSsr()
  console.log(BOLD('→ Server-rendering the Vue app...'))
  const ssrHtml = await runApp()

  // Inline the built CSS so jsdom's getComputedStyle resolves media queries,
  // Tailwind utilities, and computed positions correctly.
  const css = await readInlineCss()
  const head = '<style>' + css + '</style>'

  const wrapped =
    '<!doctype html><html><head>' +
    head +
    '</head><body>' +
    ssrHtml +
    '</body></html>'
  console.log(BOLD('→ Loading SSR HTML into jsdom...'))
  const dom = new JSDOM(wrapped, {
    url: 'http://localhost/',
    pretendToBeVisual: true,
  })
  window = dom.window
  document = dom.window.document

  console.log(BOLD('→ Running freeCodeCamp Product Landing Page tests'))
  console.log('')
  await run()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
