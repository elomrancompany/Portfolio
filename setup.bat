@echo off
REM EL OMRAN Portfolio v2.0 - Quick Start Guide (Windows)

echo.
echo ======================================================
echo   EL OMRAN Portfolio v2.0 - Quick Start
echo   Production-Ready - Mobile-First - 3D Enhanced
echo ======================================================
echo.

REM Check Node.js version
echo [*] Checking Node.js version...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Node.js is NOT installed
    echo     Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] %NODE_VERSION%

REM Check npm version
echo [*] Checking npm version...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] npm is NOT installed
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] %NPM_VERSION%

REM Check Git
echo [*] Checking Git...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Git is NOT installed
    echo     Please install Git from https://git-scm.com
    pause
    exit /b 1
)
echo [OK] Git installed

echo.
echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo [X] npm install failed
    pause
    exit /b 1
)
echo [OK] Dependencies installed

echo.
echo Building for production...
npm run build
if %errorlevel% neq 0 (
    echo [X] Build failed
    pause
    exit /b 1
)
echo [OK] Build successful

echo.
echo ======================================================
echo   Next Steps:
echo ======================================================
echo.
echo 1. Start development server:
echo    npm run dev
echo    Then open http://localhost:3000
echo.
echo 2. Check code quality:
echo    npm run lint
echo.
echo 3. Security audit:
echo    npm audit
echo.
echo 4. Production test:
echo    npm start
echo.
echo 5. Deploy to Vercel:
echo    git push origin main
echo.
echo ======================================================
echo   Documentation:
echo ======================================================
echo.
echo - README.md           (Overview)
echo - DEPLOYMENT_GUIDE.md (Deployment & Maintenance)
echo - 3D_COMPONENTS.md    (3D Customization)
echo - UPGRADE_SUMMARY.md  (What's New in v2.0)
echo.
echo ======================================================
echo   Setup complete!
echo ======================================================
echo.
pause
