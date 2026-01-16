// Product Images Mapping
export const productImages = {
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
export const productIcons = {
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
export const vehicleModels = {
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
export const productCategories = {
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
export function generateProducts() {
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
