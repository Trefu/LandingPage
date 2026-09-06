<script setup>
import HeroBg from '../assets/background.jpg'
import Featured from '../assets/guitar1.png'

const features = [
  { k: 'Solid Tonewood', v: 'Spruce top' },
  { k: 'Handcrafted', v: 'Luthier built' },
  { k: 'Lifetime', v: 'Warranty' },
]
</script>

<template>
  <section
    id="principal"
    class="relative isolate overflow-hidden min-h-screen flex items-center"
  >
    <img
      :src="HeroBg"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-ink-900/95 via-ink-900/80 to-amber-deep/30"
    />
    <div
      class="absolute -top-32 -right-24 -z-10 h-[420px] w-[420px] rounded-full
        bg-amber-glow/20 blur-3xl"
    />

    <div class="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 py-28">
      <div class="lg:col-span-7">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-amber-glow/40
            bg-amber-glow/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-glow"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-amber-glow"></span>
          New season · 2026
        </span>
        <h1
          class="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          Acoustic guitars
          <span class="block text-amber-glow">built to be played.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base sm:text-lg text-ink-100/80">
          Hand-selected tonewoods, painstaking bracing, and a finish you can
          feel under your fingertips. From first chords to stadium stages —
          our luthiers shape every instrument by ear.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a href="#products" class="btn-primary">Explore models</a>
          <a href="#video-section" class="btn-ghost">Watch the story</a>
        </div>

        <dl class="mt-12 grid grid-cols-3 gap-6 max-w-lg">
          <div v-for="f in features" :key="f.k">
            <dt class="text-xs uppercase tracking-widest text-ink-100/60">
              {{ f.k }}
            </dt>
            <dd class="mt-1 font-display text-xl text-ink-50">{{ f.v }}</dd>
          </div>
        </dl>
      </div>

      <div class="lg:col-span-5 relative">
        <div
          class="relative mx-auto aspect-square max-w-md rounded-[2rem]
            border border-ink-50/10 bg-gradient-to-br from-ink-800/60 to-ink-900/60 p-6 shadow-soft"
        >
          <img
            :src="Featured"
            alt="Featured acoustic guitar"
            class="absolute inset-0 m-auto h-[88%] w-auto animate-floaty drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
          <div
            class="absolute bottom-4 left-4 right-4 flex items-center justify-between
              rounded-xl bg-ink-900/70 px-4 py-3 text-sm backdrop-blur"
          >
            <span class="text-ink-100/80">Signature · No. 01</span>
            <span class="text-amber-glow font-semibold">$1,290</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
