# Windows 11 Complete Setup Guide - Nikhil's Portfolio

## 🚀 Quick Start (Windows 11 + VS Code)

### Prerequisites Check
1. **Windows 11** ✓ (You have this)
2. **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
3. **VS Code** - Download from [code.visualstudio.com](https://code.visualstudio.com/)
4. **Git** (Optional) - Download from [git-scm.com](https://git-scm.com/)

## 📦 Installation Steps

### Step 1: Extract Project
1. Extract `nikhil-portfolio-project.zip` to `C:\Projects\` or your preferred location
2. Open **PowerShell** as Administrator
3. Navigate to project: `cd C:\Projects\nikhil-portfolio-project`

### Step 2: Install Dependencies
```powershell
npm install
```

### Step 3: Set Up Environment Variables
1. Create `.env` file in root directory
2. Add your SendGrid API key:
```
SENDGRID_API_KEY=SG.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
NODE_ENV=development
```

### Step 4: Run Development Server
```powershell
npm run dev
```

**Expected Output:**
```
[1] 9:27:55 PM [express] serving on port 5000
[0] VITE v5.4.19 ready in 1234 ms
[0] ➜ Local: http://localhost:5173/
```

## 🎯 VS Code Configuration

### Essential Extensions (Auto-Install)
Open VS Code in project folder, it will prompt to install:
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Error Lens**

### VS Code Terminal Setup
1. Open VS Code: `Ctrl+Shift+P`
2. Type: "Terminal: Select Default Profile"
3. Select: "PowerShell" or "Command Prompt"
4. Open terminal: `Ctrl+`` (backtick)

## 🔧 Windows-Specific Scripts

The project includes Windows-compatible scripts:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "cross-env NODE_ENV=development tsx server/index.ts",
    "dev:client": "vite",
    "dev:windows": "set NODE_ENV=development && tsx server/index.ts"
  }
}
```

## 🐛 Troubleshooting Windows Issues

### Issue 1: 'NODE_ENV' is not recognized
**Solution:** Use Windows-specific command:
```powershell
npm run dev:windows
```

### Issue 2: Permission Denied
**Solution:** Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue 3: Port Already in Use
**Solution:** Kill process and restart:
```powershell
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
npm run dev
```

### Issue 4: ENOENT Error
**Solution:** Clear npm cache:
```powershell
npm cache clean --force
rmdir /s node_modules
npm install
```

## 📧 Email Configuration (SendGrid)

### Your API Key is Already Set
✅ **API Key:** `SG.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`

### Verify SendGrid Setup
1. Go to [SendGrid Dashboard](https://app.sendgrid.com/)
2. Navigate to **Settings** → **Sender Authentication**
3. Verify your email: `nikkaushal20@gmail.com`
4. **Important:** Email must be verified before notifications work

## 🌐 Testing Your Portfolio

### 1. Start Development Server
```powershell
npm run dev
```

### 2. Open Browser
Navigate to: `http://localhost:5173`

### 3. Test Contact Form
1. Fill out the contact form
2. Submit the form
3. Check PowerShell terminal for logs
4. Check your email (nikkaushal20@gmail.com) for notification

### 4. Expected Behavior
- Form submission shows success message
- Console logs display contact details
- Email notification sent to your Gmail

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push to GitHub:
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/nikhil-portfolio.git
git push -u origin main
```

2. Deploy to Vercel:
- Go to [vercel.com](https://vercel.com)
- Import GitHub repository
- Add environment variable: `SENDGRID_API_KEY`
- Deploy

### Option 2: Netlify
1. Build project: `npm run build`
2. Upload `dist` folder to [netlify.com](https://netlify.com)
3. Add environment variables

### Option 3: Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

## 📁 Project Structure

```
nikhil-portfolio-project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Portfolio sections
│   │   │   └── ui/         # UI components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities
│   │   └── pages/          # Page components
│   └── index.html
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── emailService.ts    # Email functionality
│   └── storage.ts         # Database layer
├── shared/                 # Shared schemas
├── attached_assets/        # Your assets
├── .env                   # Environment variables
├── package.json           # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Update Portfolio Content
1. **Personal Info**: Edit `client/src/components/sections/Hero.tsx`
2. **About Section**: Edit `client/src/components/sections/About.tsx`
3. **Skills**: Edit `client/src/components/sections/Skills.tsx`
4. **Projects**: Edit `client/src/components/sections/Projects.tsx`
5. **Experience**: Edit `client/src/components/sections/Experience.tsx`

### Replace Assets
1. Replace files in `attached_assets/` folder
2. Update import paths in components
3. Replace resume PDF with your latest version

## 📊 Development Workflow

### Daily Development
```powershell
# Start development
npm run dev

# Make changes to files
# Save files (auto-reload)

# Test contact form
# Check console logs

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git Workflow
```powershell
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 🔍 VS Code Tips

### Useful Shortcuts
- **File Explorer**: `Ctrl+Shift+E`
- **Terminal**: `Ctrl+`` (backtick)
- **Command Palette**: `Ctrl+Shift+P`
- **Quick Open**: `Ctrl+P`
- **Format Document**: `Shift+Alt+F`

### React Development
- Type `rfc` → Creates React functional component
- Type `useState` → Auto-imports React hook
- `Ctrl+Space` → Trigger IntelliSense

## 💡 Pro Tips

1. **Keep PowerShell open** while developing to see logs
2. **Use VS Code integrated terminal** for better workflow
3. **Test contact form regularly** to ensure email notifications work
4. **Check browser console** for any JavaScript errors
5. **Use dark theme** in VS Code for better development experience

## 🆘 Support

If you encounter issues:
1. Check this troubleshooting guide
2. Verify Node.js version: `node --version`
3. Clear npm cache: `npm cache clean --force`
4. Restart VS Code and PowerShell
5. Check Windows Defender/Firewall settings

## 📈 Next Steps

1. **Complete development** and test all features
2. **Deploy to Vercel** for live portfolio
3. **Set up custom domain** (optional)
4. **Add Google Analytics** (optional)
5. **Submit to job applications** 🎯

---

**Your portfolio is now ready for Windows 11 development! 🎉**