<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '../assets/logo.svg'

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const links = [
  { href: '#principal', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#video-section', label: 'Demo' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header
    id="header"
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'bg-ink-900/80 backdrop-blur-md shadow-soft'
        : 'bg-transparent'
    "
  >
    <nav
      id="nav-bar"
      class="container-page flex h-16 items-center justify-between"
    >
      <a href="#principal" class="flex items-center gap-3">
        <img
          id="header-img"
          :src="Logo"
          alt="Acoustic Guitars mark"
          class="h-10 w-10 rounded-full ring-2 ring-amber-glow/60"
        />
        <span class="font-display text-lg font-semibold tracking-wide">
          Treble &amp; Wood
        </span>
      </a>

      <button
        type="button"
        class="md:hidden rounded-md p-2 text-ink-50 hover:text-amber-glow"
        aria-label="Toggle navigation"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
      </button>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="l in links" :key="l.href">
          <a class="nav-link" :href="l.href">{{ l.label }}</a>
        </li>
        <li>
          <a class="btn-primary !py-2 !px-4" href="#contact">Get yours</a>
        </li>
      </ul>
    </nav>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="open"
        class="md:hidden absolute inset-x-0 top-16 mx-4 mt-2 flex flex-col gap-3 rounded-2xl
          border border-ink-50/10 bg-ink-900/95 p-6 shadow-soft backdrop-blur"
      >
        <li v-for="l in links" :key="l.href">
          <a class="nav-link block py-1" :href="l.href" @click="open = false">
            {{ l.label }}
          </a>
        </li>
        <li class="pt-2">
          <a class="btn-primary w-full" href="#contact" @click="open = false">
            Get yours
          </a>
        </li>
      </ul>
    </transition>
  </header>
</template>
