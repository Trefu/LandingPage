<script setup>
import g1 from '../assets/guitar1.png'
import g2 from '../assets/guitar2.png'
import g3 from '../assets/guitar3.png'

const models = [
  {
    name: 'Aurora',
    tagline: 'Dreadnought · Sitka spruce',
    price: '$1,290',
    image: g1,
    bullets: ['Solid Sitka spruce top', 'Mahogany back & sides', 'Bone nut & saddle'],
  },
  {
    name: 'Tide',
    tagline: 'Concert · Cedar top',
    price: '$1,540',
    image: g2,
    bullets: ['Warm red cedar top', 'Short-scale neck', 'Built-in pickup'],
  },
  {
    name: 'Forge',
    tagline: 'Jumbo · Engelmann spruce',
    price: '$1,890',
    image: g3,
    bullets: ['Larger body, fuller low end', 'Hand-voiced bracing', 'Lifetime warranty'],
  },
]
</script>

<template>
  <section id="products" class="relative py-24">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(240,185,76,0.08),_transparent_60%)]"
    />
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-ink-50/15
            bg-ink-800/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-100/80"
        >
          The Collection
        </span>
        <h2 class="mt-4 font-display text-4xl sm:text-5xl font-bold">
          Three models,
          <span class="text-amber-glow">one obsession</span>.
        </h2>
        <p class="mt-4 text-base text-ink-100/70">
          Pick a shape that matches your sound. Every guitar ships
          setup-ready by our master luthier.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="m in models"
          :key="m.name"
          class="card group transition hover:-translate-y-1 hover:border-amber-glow/40"
        >
          <div
            class="relative aspect-square -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl
              bg-gradient-to-br from-ink-700/40 to-ink-900/40"
          >
            <img
              :src="m.image"
              :alt="m.name + ' acoustic guitar'"
              class="absolute inset-0 m-auto h-full w-auto p-6 drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]
                transition group-hover:scale-105"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <h3 class="font-display text-2xl font-bold">{{ m.name }}</h3>
            <span class="text-amber-glow font-semibold">{{ m.price }}</span>
          </div>
          <p class="mt-1 text-sm text-ink-100/60">{{ m.tagline }}</p>
          <ul class="mt-4 space-y-1.5 text-sm text-ink-100/80">
            <li v-for="b in m.bullets" :key="b" class="flex items-start gap-2">
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-glow"></span>
              {{ b }}
            </li>
          </ul>
          <a href="#contact" class="btn-ghost mt-6 w-full text-xs">Learn more</a>
        </article>
      </div>
    </div>
  </section>
</template>
