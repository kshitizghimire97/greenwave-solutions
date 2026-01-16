# Product Images Setup Guide

## Image Directory Structure

To use real product images, create the following directory structure and add your product images:

```
app/
├── images/
│   └── products/
│       ├── front-bumper.jpg
│       ├── rear-bumper.jpg
│       ├── headlamp.jpg
│       ├── tail-lamp.jpg
│       ├── side-mirror.jpg
│       ├── windshield.jpg
│       ├── fender-panel.jpg
│       ├── door-panel.jpg
│       ├── brake-pads.jpg
│       ├── brake-discs.jpg
│       ├── suspension.jpg
│       ├── wheel-bearing.jpg
│       ├── sensors.jpg
│       └── electrical-accessories.jpg
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600 pixels (4:3 aspect ratio)
- **File Size**: Optimize images to be under 200KB for faster loading
- **Naming**: Use lowercase with hyphens (e.g., `front-bumper.jpg`)

## Image Mapping

The following products use these image files:

| Product Name | Image File |
|-------------|------------|
| Front Bumper | `front-bumper.jpg` |
| Rear Bumper | `rear-bumper.jpg` |
| Headlamp Assembly (LH/RH) | `headlamp.jpg` |
| Tail Lamp Assembly (LH/RH) | `tail-lamp.jpg` |
| Side Mirror / ORVM (LH/RH) | `side-mirror.jpg` |
| Windshield / Front Glass | `windshield.jpg` |
| Fender Panel | `fender-panel.jpg` |
| Door Body Panel | `door-panel.jpg` |
| Brake Pads (Front & Rear) | `brake-pads.jpg` |
| Brake Discs (Front & Rear) | `brake-discs.jpg` |
| Suspension Components | `suspension.jpg` |
| Wheel Bearing | `wheel-bearing.jpg` |
| Electrical Sensors | `sensors.jpg` |
| Electrical Accessories | `electrical-accessories.jpg` |

## Fallback Behavior

If an image file is missing or fails to load, the website will automatically display an emoji icon as a fallback. This ensures the website always looks good even if some images are missing.

## Adding Images

1. Create the `images/products/` directory in your project root
2. Add your product images with the exact filenames listed above
3. The website will automatically use these images when available

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Consider using WebP format for better compression
- Ensure images are well-lit and show the product clearly
- Use consistent backgrounds or white backgrounds for professional look
