// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Product Images Mapping
// Replace these placeholder URLs with your actual product images
// Store images in: images/products/[product-name].jpg
const productImages = {
    'Front Bumper': 'images/products/front-bumper.jpg',
    'Rear Bumper': 'images/products/rear-bumper.jpg',
    'Headlamp Assembly (LH/RH)': 'images/products/headlamp.jpg',
    'Tail Lamp Assembly (LH/RH)': 'images/products/tail-lamp.jpg',
    'Side Mirror / ORVM (LH/RH)': 'images/products/side-mirror.jpg',
    'Windshield / Front Glass': 'images/products/windshield.jpg',
    'Fender Panel': 'images/products/fender-panel.jpg',
    'Door Body Panel': 'images/products/door-panel.jpg',
    'Brake Pads (Front & Rear)': 'images/products/brake-pads.jpg',
    'Brake Discs (Front & Rear)': 'images/products/brake-discs.jpg',
    'Suspension Components (Shock Absorber / Link Rod)': 'images/products/suspension.jpg',
    'Wheel Bearing': 'images/products/wheel-bearing.jpg',
    'Electrical Sensors (ABS / Wheel Speed)': 'images/products/sensors.jpg',
    'Electrical Accessories (Switches / Connectors)': 'images/products/electrical-accessories.jpg'
};

// Fallback icons if images don't load
const productIcons = {
    'Front Bumper': '🚗',
    'Rear Bumper': '🚗',
    'Headlamp Assembly (LH/RH)': '💡',
    'Tail Lamp Assembly (LH/RH)': '🔆',
    'Side Mirror / ORVM (LH/RH)': '🪞',
    'Windshield / Front Glass': '🪟',
    'Fender Panel': '🔧',
    'Door Body Panel': '🚪',
    'Brake Pads (Front & Rear)': '🛑',
    'Brake Discs (Front & Rear)': '⭕',
    'Suspension Components (Shock Absorber / Link Rod)': '⚙️',
    'Wheel Bearing': '⚙️',
    'Electrical Sensors (ABS / Wheel Speed)': '📡',
    'Electrical Accessories (Switches / Connectors)': '🔌'
};

// Vehicle Models Data
const vehicleModels = {
    'byd-dolphin': {
        name: 'BYD Dolphin',
        displayName: 'BYD Dolphin'
    },
    'mg-zs-ev': {
        name: 'MG ZS EV',
        displayName: 'MG ZS EV'
    },
    'mg-comet-ev': {
        name: 'MG Comet EV',
        displayName: 'MG Comet EV'
    },
    'kaiyi-x3-pro': {
        name: 'Kaiyi X3 Pro EV',
        displayName: 'Kaiyi X3 Pro EV'
    }
};

// Product Categories
const productCategories = {
    'accident': {
        name: 'Accident & Body Parts',
        parts: [
            'Front Bumper',
            'Rear Bumper',
            'Headlamp Assembly (LH/RH)',
            'Tail Lamp Assembly (LH/RH)',
            'Side Mirror / ORVM (LH/RH)',
            'Windshield / Front Glass',
            'Fender Panel',
            'Door Body Panel'
        ]
    },
    'wear-tear': {
        name: 'Wear & Tear Parts',
        parts: [
            'Brake Pads (Front & Rear)',
            'Brake Discs (Front & Rear)',
            'Suspension Components (Shock Absorber / Link Rod)',
            'Wheel Bearing',
            'Electrical Sensors (ABS / Wheel Speed)',
            'Electrical Accessories (Switches / Connectors)'
        ]
    }
};

// Generate all products
function generateProducts() {
    const products = [];
    let id = 1;

    Object.keys(vehicleModels).forEach(vehicleKey => {
        Object.keys(productCategories).forEach(categoryKey => {
                productCategories[categoryKey].parts.forEach(partName => {
                products.push({
                    id: id++,
                    name: partName,
                    vehicle: vehicleKey,
                    vehicleName: vehicleModels[vehicleKey].displayName,
                    category: categoryKey,
                    categoryName: productCategories[categoryKey].name,
                    image: productImages[partName] || '',
                    icon: productIcons[partName] || '🔧',
                    description: `Genuine ${partName} for ${vehicleModels[vehicleKey].displayName}. Premium quality OEM replacement part.`
                });
            });
        });
    });

    return products;
}

const allProducts = generateProducts();

// Current filters
let currentVehicle = 'all';
let currentCategory = 'all';

// Display Products
function displayProducts() {
    const productsContainer = document.getElementById('productsContainer');
    
    // Filter products
    let filteredProducts = allProducts;
    
    if (currentVehicle !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.vehicle === currentVehicle);
    }
    
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }

    // Group by vehicle model
    const groupedByVehicle = {};
    filteredProducts.forEach(product => {
        if (!groupedByVehicle[product.vehicle]) {
            groupedByVehicle[product.vehicle] = {
                name: product.vehicleName,
                categories: {}
            };
        }
        if (!groupedByVehicle[product.vehicle].categories[product.category]) {
            groupedByVehicle[product.vehicle].categories[product.category] = {
                name: product.categoryName,
                products: []
            };
        }
        groupedByVehicle[product.vehicle].categories[product.category].products.push(product);
    });

    // Generate HTML
    let html = '';
    
    if (Object.keys(groupedByVehicle).length === 0) {
        html = '<div class="no-products"><p>No products found matching your filters.</p></div>';
    } else {
        Object.keys(groupedByVehicle).forEach(vehicleKey => {
            const vehicle = groupedByVehicle[vehicleKey];
            html += `
                <div class="vehicle-section">
                    <h3 class="vehicle-title">${vehicle.name}</h3>
                    <div class="vehicle-products">
            `;
            
            Object.keys(vehicle.categories).forEach(categoryKey => {
                const category = vehicle.categories[categoryKey];
                html += `
                    <div class="category-section">
                        <h4 class="category-title">${category.name}</h4>
                        <div class="products-grid">
                `;
                
                category.products.forEach(product => {
                    const productNameEscaped = product.name.replace(/'/g, "\\'");
                    const vehicleNameEscaped = product.vehicleName.replace(/'/g, "\\'");
                    
                    const imageHtml = product.image 
                        ? `<img src="${product.image}" alt="${productNameEscaped}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <div class="product-icon" style="display:none;">${product.icon}</div>`
                        : `<div class="product-icon">${product.icon}</div>`;
                    
                    html += `
                        <div class="product-card" data-vehicle="${product.vehicle}" data-category="${product.category}">
                            <div class="product-image">
                                ${imageHtml}
                            </div>
                            <div class="product-info">
                                <div class="product-vehicle">${product.vehicleName}</div>
                                <h3 class="product-name">${product.name}</h3>
                                <p class="product-description">${product.description}</p>
                                <div class="product-footer">
                                    <button class="btn-product" onclick="handleProductClick('${productNameEscaped}', '${vehicleNameEscaped}')">Request Quote</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                html += `
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        });
    }

    productsContainer.innerHTML = html;
    
    // Re-observe for animations
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// Vehicle Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentVehicle = btn.getAttribute('data-vehicle') || 'all';
        displayProducts();
    });
});

// Category Filter
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category') || 'all';
        displayProducts();
    });
});

// Handle Product Click
function handleProductClick(productName, vehicleName) {
    alert(`Thank you for your interest in ${productName} for ${vehicleName}!\n\nPlease contact us for pricing and availability.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.value = 'product';
        }
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.value = `I'm interested in: ${productName} for ${vehicleName}`;
        }
    }
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        alert(`Thank you, ${formData.name}!\n\nWe have received your message and will get back to you soon at ${formData.email}.`);
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Observe service cards and feature items
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.service-card, .feature-item, .stat-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});
