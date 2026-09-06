<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import VideoSection from './components/VideoSection.vue'
import EmailSignup from './components/EmailSignup.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <ProductShowcase />
    <VideoSection />
    <EmailSignup />
  </main>
  <SiteFooter />
</template>
