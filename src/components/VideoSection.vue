<script setup>
import vid from '../assets/vid.mp4'
</script>

<template>
  <section
    id="video-section"
    class="relative isolate overflow-hidden py-24 bg-ink-900"
  >
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900 via-ink-800 to-ink-900"
    />
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-display text-4xl sm:text-5xl font-bold">
          Hear it <span class="text-amber-glow">first</span>.
        </h2>
        <p class="mt-4 text-base text-ink-100/80">
          Watch a quick tour of the workshop, then listen to the same guitar
          played unplugged — and through our signature pickup.
        </p>
      </div>

      <div
        class="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-ink-50/10
          bg-black shadow-soft"
      >
        <video
          id="video"
          :src="vid"
          controls
          playsinline
          preload="metadata"
          class="aspect-video w-full"
        ></video>
      </div>
    </div>
  </section>
</template>
