# pnpm Setup Guide

## Step 1: Install Node.js

If Node.js is not installed, download and install it from:
- **Official Website**: https://nodejs.org/
- **Recommended Version**: LTS (Long Term Support) version

After installation, restart your terminal/PowerShell.

## Step 2: Verify Node.js Installation

Open a new terminal/PowerShell and verify:

```bash
node --version
npm --version
```

## Step 3: Install pnpm

### Option 1: Using npm (Recommended)

```bash
npm install -g pnpm
```

### Option 2: Using PowerShell (Windows)

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### Option 3: Using standalone script

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## Step 4: Verify pnpm Installation

```bash
pnpm --version
```

## Step 5: Install Project Dependencies

Navigate to the project directory and run:

```bash
pnpm install
```

This will install:
- Vue 3.4.21
- Vite 5.1.6
- @vitejs/plugin-vue 5.0.4

## Step 6: Start Development Server

```bash
pnpm dev
```

## Common pnpm Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Add a new dependency
pnpm add <package-name>

# Add a dev dependency
pnpm add -D <package-name>

# Remove a dependency
pnpm remove <package-name>
```

## Troubleshooting

### pnpm command not found

1. **Restart your terminal** after installing pnpm
2. **Check PATH**: Ensure pnpm is in your system PATH
3. **Reinstall pnpm**: Try installing again using one of the methods above

### Permission errors on Windows

Run PowerShell as Administrator:
1. Right-click PowerShell
2. Select "Run as Administrator"
3. Run the installation command again

### Node.js not found

1. Install Node.js from https://nodejs.org/
2. Restart your terminal after installation
3. Verify with `node --version`

## Why pnpm?

- **Faster**: Up to 2x faster than npm
- **Disk Efficient**: Uses hard links to save disk space
- **Strict**: Better dependency resolution
- **Monorepo Support**: Excellent for monorepos
