<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">We're here to help with all your EV parts and engineering needs</p>
      </div>
      <div class="contact-wrapper">
        <div class="contact-info">
          <div class="contact-header">
            <h3 class="contact-title">Contact Information</h3>
            <p class="contact-intro">Get in touch with us for all your EV parts and engineering solutions needs.</p>
          </div>
          <div class="contact-item">
            <div class="contact-icon-wrapper">
              <div class="contact-icon">👤</div>
            </div>
            <div class="contact-details">
              <h3>Director</h3>
              <p>Kshitiz Ghimire</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon-wrapper">
              <div class="contact-icon">📍</div>
            </div>
            <div class="contact-details">
              <h3>Address</h3>
              <p>Lalitpur-11, Nepal</p>
              <a href="https://maps.google.com/?q=Lalitpur-11,Nepal" target="_blank" class="contact-link">View on Map →</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon-wrapper">
              <div class="contact-icon">📧</div>
            </div>
            <div class="contact-details">
              <h3>Email</h3>
              <a href="mailto:greenwavesolutions25@gmail.com" class="contact-link email-link">greenwavesolutions25@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon-wrapper">
              <div class="contact-icon">📞</div>
            </div>
            <div class="contact-details">
              <h3>Phone</h3>
              <a href="tel:+9779856056373" class="contact-link phone-link">+977-9856056373</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon-wrapper">
              <div class="contact-icon">🕒</div>
            </div>
            <div class="contact-details">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <input type="tel" id="phone" v-model="form.phone" placeholder="Your Phone">
          </div>
          <div class="form-group">
            <select id="subject" v-model="form.subject" required>
              <option value="">Select Subject</option>
              <option value="product">Product Inquiry</option>
              <option value="service">Service Inquiry</option>
              <option value="quote">Request Quote</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <textarea id="message" v-model="form.message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Thank you, ${form.value.name}!\n\nWe have received your message and will get back to you soon at ${form.value.email}.`)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  // In a real application, you would send this data to your backend:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(form.value)
  // })
  // .then(response => response.json())
  // .then(data => {
  //   alert('Message sent successfully!')
  //   form.value = { name: '', email: '', phone: '', subject: '', message: '' }
  // })
  // .catch(error => {
  //   alert('Error sending message. Please try again.')
  // })
}
</script>
