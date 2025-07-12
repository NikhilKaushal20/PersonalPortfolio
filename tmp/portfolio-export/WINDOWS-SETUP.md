# Windows Setup Guide - Fix for Environment Variables

## Issue: NODE_ENV Command Not Recognized

The error you're seeing is because Windows doesn't recognize the `NODE_ENV=development` syntax used in Unix/Linux systems.

## Solution 1: Install cross-env (Recommended)

### Step 1: Install cross-env
```bash
npm install --save-dev cross-env
```

### Step 2: Update package.json
The package.json will be automatically updated to use cross-env for Windows compatibility.

## Solution 2: Use PowerShell Commands

### Alternative Commands for Windows PowerShell:
```powershell
# Set environment variable and run
$env:NODE_ENV="development"; npm run dev:server

# Or run each part separately
$env:NODE_ENV="development"
npx tsx server/index.ts
```

## Solution 3: Use CMD Commands

### Alternative Commands for Windows CMD:
```cmd
# Set environment variable and run
set NODE_ENV=development && npx tsx server/index.ts
```

## Quick Fix: Updated Scripts

Your package.json now includes Windows-compatible scripts:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "cross-env NODE_ENV=development tsx server/index.ts",
    "dev:client": "vite",
    "dev:windows": "set NODE_ENV=development && tsx server/index.ts",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build",
    "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=dist/server/index.js --external:pg --external:@neondatabase/serverless",
    "start": "node dist/server/index.js",
    "db:push": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio"
  }
}
```

## Step-by-Step Windows Setup

### 1. Fix the Environment Variable Issue
```bash
npm install --save-dev cross-env concurrently
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. If that doesn't work, try:
```bash
npm run dev:windows
```

### 4. Open Another Terminal for the Frontend
```bash
npm run dev:client
```

## Alternative: Use Git Bash

If you have Git installed, you can use Git Bash which supports Unix commands:

1. **Open Git Bash** instead of PowerShell
2. **Navigate to your project**:
   ```bash
   cd /c/Users/nikka/OneDrive/Desktop/PersonalPortfolio-1
   ```
3. **Run the original command**:
   ```bash
   npm run dev
   ```

## VS Code Terminal Setup

### Change Default Terminal in VS Code:
1. **Open VS Code**
2. **Press** `Ctrl+Shift+P`
3. **Type**: "Terminal: Select Default Profile"
4. **Choose**: "Git Bash" or "Command Prompt"
5. **Open new terminal**: `Ctrl+` (backtick)

## Expected Output After Fix

When working correctly, you should see:
```
API key does not start with "SG.".
8:17:09 PM [express] serving on port 5000
```

Then your browser should open to `http://localhost:5173`

## Troubleshooting

### If you still get errors:

1. **Check Node.js version**:
   ```bash
   node --version
   ```
   Should be 18.x or higher

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   ```

3. **Delete node_modules and reinstall**:
   ```bash
   rmdir /s node_modules
   npm install
   ```

4. **Use specific Windows command**:
   ```cmd
   set NODE_ENV=development && npx tsx server/index.ts
   ```

## Next Steps After Fix

1. **Backend** will start on `http://localhost:5000`
2. **Frontend** will start on `http://localhost:5173`
3. **Open browser** to `http://localhost:5173`
4. **Test contact form** - submissions will show in terminal

## Security Warning Fix

The vulnerabilities shown are minor and don't affect functionality. To fix:
```bash
npm audit fix
```

This is normal for development dependencies and won't affect your portfolio.