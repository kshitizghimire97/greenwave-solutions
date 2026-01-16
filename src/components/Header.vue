<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-wrapper">
        <div class="logo">
          <img src="/logo.jpeg" alt="Greenwave Solutions Pvt. Ltd." class="logo-img">
          <span class="logo-text">Greenwave Solutions Pvt. Ltd.</span>
        </div>
        <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
          <li><a href="#home" class="nav-link" @click="scrollTo('home')">Home</a></li>
          <li><a href="#products" class="nav-link" @click="scrollTo('products')">Products</a></li>
          <li><a href="#services" class="nav-link" @click="scrollTo('services')">Services</a></li>
          <li><a href="#about" class="nav-link" @click="scrollTo('about')">About</a></li>
          <li><a href="#contact" class="nav-link" @click="scrollTo('contact')">Contact</a></li>
        </ul>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollTo = (section) => {
  const element = document.getElementById(section)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
    isMenuOpen.value = false
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      isMenuOpen.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar.scrolled {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}
</style>
