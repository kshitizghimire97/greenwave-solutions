<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/logo.jpeg" alt="Greenwave Solutions Pvt. Ltd." class="footer-logo-img">
            <span class="logo-text">Greenwave Solutions Pvt. Ltd.</span>
          </div>
          <p>Leading importer of electric vehicle parts and provider of comprehensive engineering solutions.</p>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home" @click="scrollTo('home')">Home</a></li>
            <li><a href="#products" @click="scrollTo('products')">Products</a></li>
            <li><a href="#services" @click="scrollTo('services')">Services</a></li>
            <li><a href="#about" @click="scrollTo('about')">About Us</a></li>
            <li><a href="#contact" @click="scrollTo('contact')">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Products</h4>
          <ul class="footer-links">
            <li><a href="#products" @click="scrollTo('products')">Batteries</a></li>
            <li><a href="#products" @click="scrollTo('products')">Motors</a></li>
            <li><a href="#products" @click="scrollTo('products')">Chargers</a></li>
            <li><a href="#products" @click="scrollTo('products')">Controllers</a></li>
            <li><a href="#products" @click="scrollTo('products')">Accessories</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#services" @click="scrollTo('services')">Solar Installation</a></li>
            <li><a href="#services" @click="scrollTo('services')">Energy Audits</a></li>
            <li><a href="#services" @click="scrollTo('services')">Industrial Surveys</a></li>
            <li><a href="#services" @click="scrollTo('services')">EV Consulting</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Greenwave Solutions Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
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
