<template>
  <section id="products" class="products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Electric Vehicle Parts</h2>
        <p class="section-subtitle">Genuine Parts for Leading EV Models - Premium Quality Guaranteed</p>
      </div>
      <div class="product-filters">
        <button 
          v-for="filter in vehicleFilters" 
          :key="filter.value"
          class="filter-btn" 
          :class="{ active: currentVehicle === filter.value }"
          @click="setVehicleFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
      <div class="category-tabs">
        <button 
          v-for="tab in categoryTabs" 
          :key="tab.value"
          class="category-tab" 
          :class="{ active: currentCategory === tab.value }"
          @click="setCategoryFilter(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="products-container">
        <div v-if="groupedProducts.length === 0" class="no-products">
          <p>No products found matching your filters.</p>
        </div>
        <div v-else v-for="vehicle in groupedProducts" :key="vehicle.key" class="vehicle-section">
          <h3 class="vehicle-title">{{ vehicle.name }}</h3>
          <div class="vehicle-products">
            <div v-for="category in vehicle.categories" :key="category.key" class="category-section">
              <h4 class="category-title">{{ category.name }}</h4>
              <div class="products-grid">
                <div 
                  v-for="product in category.products" 
                  :key="product.id" 
                  class="product-card"
                  :data-id="product.id"
                >
                  <div class="product-image">
                    <img 
                      v-if="product.image" 
                      :src="product.image" 
                      :alt="product.name" 
                      class="product-img"
                      @error="handleImageError($event)"
                    />
                    <div 
                      v-if="!product.image || imageErrors.has(product.id)"
                      class="product-icon"
                    >
                      {{ product.icon }}
                    </div>
                  </div>
                  <div class="product-info">
                    <div class="product-vehicle">{{ product.vehicleName }}</div>
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-description">{{ product.description }}</p>
                    <div class="product-footer">
                      <button class="btn-product" @click="handleProductClick(product)">
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { generateProducts, vehicleModels } from '../data/products'

const allProducts = generateProducts()
const currentVehicle = ref('all')
const currentCategory = ref('all')
const imageErrors = ref(new Set())

const vehicleFilters = [
  { label: 'All Products', value: 'all' },
  { label: 'BYD Dolphin', value: 'byd-dolphin' },
  { label: 'MG ZS EV', value: 'mg-zs-ev' },
  { label: 'MG Comet EV', value: 'mg-comet-ev' },
  { label: 'Kaiyi X3 Pro EV', value: 'kaiyi-x3-pro' }
]

const categoryTabs = [
  { label: 'All Categories', value: 'all' },
  { label: 'Accident & Body Parts', value: 'accident' },
  { label: 'Wear & Tear Parts', value: 'wear-tear' }
]

const setVehicleFilter = (vehicle) => {
  currentVehicle.value = vehicle
}

const setCategoryFilter = (category) => {
  currentCategory.value = category
}

const filteredProducts = computed(() => {
  let products = allProducts
  
  if (currentVehicle.value !== 'all') {
    products = products.filter(p => p.vehicle === currentVehicle.value)
  }
  
  if (currentCategory.value !== 'all') {
    products = products.filter(p => p.category === currentCategory.value)
  }
  
  return products
})

const groupedProducts = computed(() => {
  const grouped = {}
  
  filteredProducts.value.forEach(product => {
    if (!grouped[product.vehicle]) {
      grouped[product.vehicle] = {
        key: product.vehicle,
        name: product.vehicleName,
        categories: {}
      }
    }
    if (!grouped[product.vehicle].categories[product.category]) {
      grouped[product.vehicle].categories[product.category] = {
        key: product.category,
        name: product.categoryName,
        products: []
      }
    }
    grouped[product.vehicle].categories[product.category].products.push(product)
  })
  
  return Object.values(grouped)
})

const handleImageError = (event) => {
  const img = event.target
  const productCard = img.closest('.product-card')
  if (productCard) {
    const productId = parseInt(productCard.dataset.id || '0')
    imageErrors.value.add(productId)
    img.style.display = 'none'
    const icon = productCard.querySelector('.product-icon')
    if (icon) {
      icon.style.display = 'flex'
    }
  }
}

const handleProductClick = (product) => {
  alert(`Thank you for your interest in ${product.name} for ${product.vehicleName}!\n\nPlease contact us for pricing and availability.`)
  scrollToContact(product)
}

const scrollToContact = (product) => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    const offsetTop = contactSection.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
    // Emit event or use provide/inject to pre-fill form
    setTimeout(() => {
      const subjectSelect = document.getElementById('subject')
      const messageTextarea = document.getElementById('message')
      if (subjectSelect) subjectSelect.value = 'product'
      if (messageTextarea) {
        messageTextarea.value = `I'm interested in: ${product.name} for ${product.vehicleName}`
      }
    }, 500)
  }
}
</script>
