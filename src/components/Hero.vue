<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Powering the Future of Electric Mobility</h1>
        <p class="hero-subtitle">Premium Electric Vehicle Parts & Comprehensive Engineering Solutions</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollTo('products')">Browse Products</button>
          <button class="btn btn-secondary" @click="scrollTo('contact')">Get Quote</button>
        </div>
      </div>
    </div>
    <div class="hero-scroll">
      <span>Scroll Down</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (section) => {
  const element = document.getElementById(section)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>
