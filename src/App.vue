<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Products />
    <Services />
    <WhyChooseUs />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Products from './components/Products.vue'
import Services from './components/Services.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
