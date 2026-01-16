# Quick Start Guide - pnpm

## 🚀 Fastest Way to Get Started

### Option 1: Automated Setup (Windows)

1. Open PowerShell in the project directory
2. Run:
   ```powershell
   .\install.ps1
   ```
3. The script will:
   - Check Node.js installation
   - Install pnpm if needed
   - Install all project dependencies
   - Provide next steps

### Option 2: Manual Setup

1. **Install Node.js** (if not installed)
   - Download from: https://nodejs.org/
   - Install the LTS version

2. **Install pnpm**
   ```bash
   npm install -g pnpm
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

5. **Open Browser**
   - Navigate to: http://localhost:8000

## ✅ Verification

After installation, verify everything works:

```bash
# Check versions
node --version    # Should show v16.0.0 or higher
pnpm --version    # Should show version number

# Check if dependencies are installed
ls node_modules   # Should show installed packages
```

## 🎯 Next Steps

1. ✅ Dependencies installed
2. ✅ Development server running (`pnpm dev`)
3. ✅ Website accessible at http://localhost:8000
4. 📝 Customize content in `src/components/`
5. 🖼️ Add product images to `public/images/products/`

## 🆘 Troubleshooting

### "pnpm: command not found"
- Restart your terminal after installing pnpm
- Or run: `npm install -g pnpm` again

### "Node.js not found"
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### Port 8000 already in use
- Vite will automatically use the next available port
- Check the terminal output for the actual port number

## 📚 More Information

- See [README.md](README.md) for full documentation
- See [setup-pnpm.md](setup-pnpm.md) for detailed pnpm setup guide
