# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server

**All Platforms (Windows, Mac, Linux):**
```bash
npm run dev
```

Cross-platform compatibility achieved with cross-env!

### 3. Open Your Portfolio
Visit: `http://localhost:5000`

## ✨ Features Ready to Use

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Contact form (saves to `contacts.json`)
- ✅ Resume download functionality
- ✅ Smooth animations and transitions
- ✅ Professional portfolio sections

## 🚀 Deploy to the Web

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push to GitHub  
2. Connect to Netlify
3. Deploy with `npm run build`

### Option 3: GitHub Pages
1. Run `npm run build`
2. Deploy the `dist/public` folder

## 📝 Customize Your Portfolio

1. **Edit Content**: Update `client/src/components/Portfolio.tsx`
2. **Change Colors**: Modify `client/src/index.css`
3. **Add Resume**: Replace file in `attached_assets/`
4. **Update Contact Info**: Edit contact details in portfolio sections

## 🔧 Troubleshooting

**Problem**: "NODE_ENV is not recognized"  
**Solution**: Use `.\dev.ps1` (PowerShell) or `.\dev.bat` (Command Prompt)

**Problem**: Port 5000 already in use  
**Solution**: Change port in `server/index.ts` or stop other services

**Problem**: Contact form not working  
**Solution**: Check browser console and server logs for errors

## 📧 Contact Form

- Development: Saves to `contacts.json` file
- Production: Logs to console (add email service if needed)
- View submissions at: `http://localhost:5000/api/contacts`

Your portfolio is now ready to showcase your work! 🎉