# Greenwave Solutions Pvt. Ltd. - Company Website (Vue 3)

A modern, professional, and fully responsive website for **Greenwave Solutions Pvt. Ltd.**, showcasing electric vehicle parts sales and comprehensive engineering solutions. Built with **Vue 3** and **Vite** for optimal performance and developer experience.

![Website Preview](https://img.shields.io/badge/Status-Live-success)
![Vue.js](https://img.shields.io/badge/Vue.js-3.4.21-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Customization](#-customization)
- [Technologies Used](#-technologies-used)
- [Browser Support](#-browser-support)
- [Contact Information](#-contact-information)
- [License](#-license)

## ✨ Features

### Core Features
- **🎨 Modern Design**: Beautiful gradient hero section with smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔍 Product Catalog**: Interactive filtering system by vehicle model and category
- **🚗 Vehicle Models**: Support for BYD Dolphin, MG ZS EV, MG Comet EV, and Kaiyi X3 Pro EV
- **📦 Product Categories**: Organized into Accident & Body Parts and Wear & Tear Parts
- **🖼️ Product Images**: Support for real product images with emoji fallbacks
- **📧 Contact Form**: Functional inquiry form with validation
- **🔗 Clickable Links**: Direct email and phone call functionality
- **🎯 Smooth Navigation**: Smooth scrolling with mobile-friendly hamburger menu
- **⚡ Vue 3 Composition API**: Modern reactive state management
- **🚀 Vite Build Tool**: Fast development and optimized production builds

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Company overview with key statistics
3. **Products Section**: Filterable catalog with vehicle and category filters
4. **Services Section**: Engineering solutions showcase
5. **Why Choose Us**: Key features and benefits
6. **Contact Section**: Contact information with interactive form
7. **Footer**: Additional links and company information

## 📁 Project Structure

```
app/
├── public/
│   └── logo.jpeg              # Company logo
├── src/
│   ├── components/            # Vue components
│   │   ├── Header.vue         # Navigation header
│   │   ├── Hero.vue           # Hero section
│   │   ├── About.vue          # About section
│   │   ├── Products.vue       # Products catalog
│   │   ├── Services.vue      # Services section
│   │   ├── WhyChooseUs.vue    # Features section
│   │   ├── Contact.vue        # Contact form
│   │   └── Footer.vue          # Footer
│   ├── data/
│   │   └── products.js        # Product data and utilities
│   ├── App.vue                # Main app component
│   ├── main.js                # Application entry point
│   └── styles.css             # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── .gitignore                 # Git ignore file
└── README.md                  # This file
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **pnpm** (recommended) or npm/yarn
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code recommended)

### Verify Installation

```bash
# Check Node.js version
node --version

# Check pnpm version (install if needed)
pnpm --version
```

### Install pnpm (if not installed)

**Using npm:**
```bash
npm install -g pnpm
```

**Using PowerShell (Windows):**
```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

**Or use the provided setup script:**
```powershell
.\install.ps1
```

## 🚀 Installation

### Step 1: Clone or Download

If using Git:
```bash
git clone <repository-url>
cd app
```

Or simply download and extract the project files to your desired directory.

### Step 2: Install Dependencies

Navigate to the project directory and install dependencies:

```bash
# Using pnpm (recommended - faster and more efficient)
pnpm install

# Alternative: Using npm
npm install

# Alternative: Using yarn
yarn install
```

**Quick Setup (Windows PowerShell):**
```powershell
# Run the automated setup script
.\install.ps1
```

This will install:
- Vue 3.4.21
- Vite 5.1.6
- @vitejs/plugin-vue 5.0.4

### Step 3: Verify Installation

Check that all files are in place:

```bash
# Windows PowerShell
dir src\components

# Linux/Mac
ls -la src/components
```

You should see all Vue component files.

## 💻 Development

### Start Development Server

Run the development server with hot module replacement:

```bash
# Using pnpm (recommended)
pnpm dev

# Alternative: Using npm
npm run dev

# Alternative: Using yarn
yarn dev
```

The development server will start at `http://localhost:8000` and automatically open in your browser.

### Development Features

- **Hot Module Replacement (HMR)**: Changes reflect instantly without page reload
- **Fast Refresh**: Component state is preserved during updates
- **Source Maps**: Easy debugging with original source code
- **Auto-reload**: Browser automatically refreshes on file changes

### Development Commands

```bash
# Start dev server (using pnpm)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

**Note:** All commands work with `npm` or `yarn` as well, but `pnpm` is recommended for better performance.

## 🏗️ Building for Production

### Build the Project

Create an optimized production build:

```bash
# Using pnpm (recommended)
pnpm build

# Alternative: Using npm
npm run build

# Alternative: Using yarn
yarn build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
# Using pnpm (recommended)
pnpm preview

# Alternative: Using npm
npm run preview

# Alternative: Using yarn
yarn preview
```

### Deploy

The `dist/` folder contains all static files ready for deployment. You can deploy to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository or deploy the `dist` folder
- **GitHub Pages**: Push the `dist` folder contents to `gh-pages` branch
- **Any Static Hosting**: Upload the `dist` folder contents

## 🎨 Customization

### Update Company Information

#### Contact Details (`src/components/Contact.vue`)

Edit the contact section:

```vue
<div class="contact-details">
  <h3>Director</h3>
  <p>Your Name</p>
</div>
```

#### Company Description (`src/components/About.vue`)

Edit the about section:

```vue
<p>Your company description here...</p>
```

### Update Products (`src/data/products.js`)

Products are automatically generated from vehicle models and categories. To modify:

1. **Add/Remove Vehicle Models**:
```javascript
export const vehicleModels = {
    'new-vehicle': {
        name: 'New Vehicle Model',
        displayName: 'New Vehicle Model'
    }
};
```

2. **Add/Remove Product Categories**:
```javascript
export const productCategories = {
    'new-category': {
        name: 'New Category Name',
        parts: ['Part 1', 'Part 2']
    }
};
```

3. **Update Product Images**:
```javascript
export const productImages = {
    'Part Name': 'images/products/part-image.jpg'
};
```

### Update Styling (`src/styles.css`)

#### Change Color Scheme:

```css
:root {
    --primary-color: #00a86b;      /* Main brand color */
    --primary-dark: #008a57;      /* Darker shade */
    --primary-light: #00c97a;     /* Lighter shade */
    --secondary-color: #1a1a2e;   /* Secondary color */
}
```

### Add Product Images

1. Create the directory structure:
```bash
# Windows PowerShell
mkdir public\images\products

# Linux/Mac
mkdir -p public/images/products
```

2. Add your product images with the exact filenames listed in `IMAGES_README.md`

3. Images will automatically load. If missing, emoji icons will display as fallback.

## 🛠️ Technologies Used

- **Vue 3.4.21**: Progressive JavaScript framework with Composition API
- **Vite 5.1.6**: Next-generation frontend build tool
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript features
- **Google Fonts**: Inter font family

### Key Vue 3 Features Used

- **Composition API**: Reactive state management with `ref` and `computed`
- **Single File Components**: `.vue` files with template, script, and style
- **Reactive System**: Automatic UI updates on data changes
- **Component Composition**: Modular, reusable components

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Mobile Safari | iOS 12+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |

## 📞 Contact Information

**Greenwave Solutions Pvt. Ltd.**

- **Director**: Kshitiz Ghimire
- **Address**: Lalitpur-11, Nepal
- **Email**: [greenwavesolutions25@gmail.com](mailto:greenwavesolutions25@gmail.com)
- **Phone**: [+977-9856056373](tel:+9779856056373)
- **Business Hours**: Monday - Friday: 9:00 AM - 6:00 PM | Saturday: 10:00 AM - 4:00 PM

## 📝 Development Commands Reference

### Quick Commands (using pnpm)

**Install Dependencies:**
```bash
pnpm install
```

**Start Development Server:**
```bash
pnpm dev
```

**Build for Production:**
```bash
pnpm build
```

**Preview Production Build:**
```bash
pnpm preview
```

**Note:** Replace `pnpm` with `npm` or `yarn` if you prefer those package managers.

**Create Images Directory:**
```bash
# Windows PowerShell
New-Item -ItemType Directory -Path "public\images\products"

# Windows CMD
mkdir public\images\products

# Linux/Mac
mkdir -p public/images/products
```

## 🔍 Troubleshooting

### Port Already in Use

If port 8000 is already in use, Vite will automatically try the next available port. You can also specify a different port:

```bash
npm run dev -- --port 3000
```

Or update `vite.config.js`:
```javascript
server: {
  port: 3000
}
```

### Module Not Found Errors

Clear node_modules and reinstall:

```bash
# Remove node_modules
rm -rf node_modules  # Linux/Mac
rmdir /s node_modules  # Windows

# Reinstall
npm install
```

### Images Not Displaying

1. Ensure images are in `public/images/products/` directory
2. Verify image filenames match exactly (case-sensitive)
3. Check browser console for 404 errors
4. Ensure images are in JPG, PNG, or WebP format

### Vue Component Errors

1. Check browser console for specific error messages
2. Verify all imports are correct
3. Ensure component names match file names
4. Check that all required props are passed

## 📄 License

This project is created for **Greenwave Solutions Pvt. Ltd.** All rights reserved.

## 🤝 Contributing

This is a proprietary project for Greenwave Solutions Pvt. Ltd. For modifications or updates, please contact the development team.

## 📚 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue 3 Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [IMAGES_README.md](IMAGES_README.md) - Product images setup guide

## 🎯 Quick Start Checklist

- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Website opens in browser at `http://localhost:8000`
- [ ] Logo displays correctly
- [ ] Contact information updated
- [ ] (Optional) Product images added to `public/images/products/`
- [ ] (Optional) Production build created (`npm run build`)

---

**Built with ❤️ using Vue 3 for Greenwave Solutions Pvt. Ltd.**

*Powering the Future of Electric Mobility*

---

**Last Updated**: 2024  
**Version**: 2.0.0 (Vue 3)  
**Framework**: Vue 3.4.21 + Vite 5.1.6
