# PowerShell script to install pnpm and project dependencies

Write-Host "=== Greenwave Solutions - pnpm Setup ===" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "After installation, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check if npm is available
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not available!" -ForegroundColor Red
    exit 1
}

# Check if pnpm is already installed
Write-Host "Checking pnpm..." -ForegroundColor Yellow
try {
    $pnpmVersion = pnpm --version
    Write-Host "✓ pnpm already installed: $pnpmVersion" -ForegroundColor Green
} catch {
    Write-Host "pnpm not found. Installing pnpm..." -ForegroundColor Yellow
    try {
        npm install -g pnpm
        Write-Host "✓ pnpm installed successfully!" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to install pnpm!" -ForegroundColor Red
        Write-Host "Try running PowerShell as Administrator and run this script again." -ForegroundColor Yellow
        exit 1
    }
}

# Install project dependencies
Write-Host ""
Write-Host "Installing project dependencies..." -ForegroundColor Yellow
try {
    pnpm install
    Write-Host ""
    Write-Host "✓ Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "=== Setup Complete ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Run 'pnpm dev' to start the development server" -ForegroundColor White
    Write-Host "2. Open http://localhost:8000 in your browser" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "✗ Failed to install dependencies!" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
    exit 1
}
