<script setup>
const github = 'https://github.com/trefu'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-ink-50/10 bg-ink-900 py-12">
    <div class="container-page grid grid-cols-1 gap-10 md:grid-cols-3">
      <div>
        <p class="font-display text-lg font-semibold">Treble &amp; Wood</p>
        <p class="mt-2 max-w-xs text-sm text-ink-100/60">
          Handcrafted acoustic guitars. Built to be played.
        </p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-widest text-ink-100/60">
          Explore
        </h4>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a class="nav-link" href="#principal">Home</a></li>
          <li><a class="nav-link" href="#products">Products</a></li>
          <li><a class="nav-link" href="#video-section">Demo</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-widest text-ink-100/60">
          Connect
        </h4>
        <a
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-flex items-center gap-2 rounded-full border border-ink-50/15
            px-4 py-2 text-sm transition hover:border-amber-glow hover:text-amber-glow"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.594 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
            />
          </svg>
          github.com/trefu
        </a>
      </div>
    </div>

    <div
      class="container-page mt-10 flex flex-col items-start justify-between gap-4
        border-t border-ink-50/10 pt-6 text-xs text-ink-100/50 sm:flex-row sm:items-center"
    >
      <p>© {{ year }} Treble &amp; Wood. All rights reserved.</p>
      <p>
        Vue 3 · Tailwind CSS · Refactor of a
        <span class="text-ink-100/70">freeCodeCamp</span> certification project
        by
        <a :href="github" class="text-amber-glow hover:underline" target="_blank" rel="noopener noreferrer">@trefu</a>.
      </p>
    </div>
  </footer>
</template>
