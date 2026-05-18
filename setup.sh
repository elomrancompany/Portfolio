#!/bin/bash

# EL OMRAN Portfolio v2.0 - Quick Start Guide
# This script helps you build and test the upgraded portfolio

echo "╔════════════════════════════════════════════════════╗"
echo "║  EL OMRAN Portfolio v2.0 - Quick Start             ║"
echo "║  Production-Ready • Mobile-First • 3D Enhanced     ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Pre-Deployment Checklist${NC}"
echo ""

# Check Node.js version
echo -n "✓ Checking Node.js version... "
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}${NODE_VERSION}${NC}"
else
    echo -e "${RED}NOT INSTALLED${NC}"
    echo "  Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

# Check npm version
echo -n "✓ Checking npm version... "
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}${NPM_VERSION}${NC}"
else
    echo -e "${RED}NOT INSTALLED${NC}"
    exit 1
fi

# Check Git
echo -n "✓ Checking Git... "
if command -v git &> /dev/null; then
    echo -e "${GREEN}installed${NC}"
else
    echo -e "${RED}NOT INSTALLED${NC}"
    echo "  Please install Git from https://git-scm.com"
    exit 1
fi

echo ""
echo -e "${BLUE}📦 Installation${NC}"
echo ""

# Install dependencies
echo "→ Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ npm install failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dependencies installed${NC}"

echo ""
echo -e "${BLUE}🔨 Building for Production${NC}"
echo ""

# Build
echo "→ Building for production..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build successful${NC}"

echo ""
echo -e "${BLUE}🧪 Testing${NC}"
echo ""

# Show what to do next
echo -e "${YELLOW}Next steps:${NC}"
echo ""
echo "1. 🚀 Start development server:"
echo -e "   ${GREEN}npm run dev${NC}"
echo "   Then open http://localhost:3000"
echo ""
echo "2. 🧹 Check code quality:"
echo -e "   ${GREEN}npm run lint${NC}"
echo ""
echo "3. 🔒 Security audit:"
echo -e "   ${GREEN}npm audit${NC}"
echo ""
echo "4. 📦 Production test:"
echo -e "   ${GREEN}npm start${NC}"
echo ""
echo "5. 🌐 Deploy:"
echo -e "   ${GREEN}git push origin main${NC}"
echo "   (Auto-deploys on Vercel)"
echo ""
echo -e "${BLUE}📖 Documentation${NC}"
echo ""
echo "• README.md           - Overview & features"
echo "• DEPLOYMENT_GUIDE.md - Detailed deployment & maintenance"
echo "• 3D_COMPONENTS.md    - 3D customization"
echo "• UPGRADE_SUMMARY.md  - What changed in v2.0"
echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
