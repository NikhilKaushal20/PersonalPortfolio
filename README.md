# 🚀 Nikhil Kaushal - Professional Portfolio

A modern, responsive portfolio website showcasing expertise in **DevOps**, **AI**, and **Software Testing**. Built with React, TypeScript, and Express.js, optimized for Windows 11 and VS Code development.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with dark/light theme
- **📱 Responsive**: Perfect on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development
- **📧 Contact Form**: Fully functional with console logging (no email dependencies)
- **🔧 Type-Safe**: Full TypeScript support for robust development
- **🎭 Animations**: Smooth transitions using Framer Motion
- **🌟 Professional**: Ready for job applications and client presentations

## 🎯 Quick Start (Works on Any Platform)

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Installation
1. Extract the project to your desired location
2. Open terminal in the project folder
3. Install dependencies:
   ```bash
   npm install
   ```

### Start Development
```bash
npm run dev
```

**Expected output:**
```
10:59:08 PM [express] serving on port 5000
VITE v5.4.19 ready in 1234 ms
➜ Local: http://localhost:5173/
```

Open your browser to `http://localhost:5173` to see your portfolio!

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (frontend + backend) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean build artifacts |

## 🏗️ Project Structure

```
📁 nikhil-portfolio/
├── 📁 client/                 # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 sections/   # Portfolio sections
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Skills.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── Experience.tsx
│   │   │   │   └── Contact.tsx
│   │   │   └── 📁 ui/         # Reusable components
│   │   ├── 📁 hooks/          # Custom React hooks
│   │   ├── 📁 lib/            # Utility functions
│   │   └── 📁 pages/          # Page components
│   └── index.html
├── 📁 server/                 # Express backend
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── emailService.ts       # Contact form logging
│   └── storage.ts            # Database operations
├── 📁 shared/                 # Shared types/schemas
├── 📁 attached_assets/        # Your portfolio assets
├── 📄 .env                   # Environment variables
├── 📄 package.json           # Dependencies
└── 📄 README.md              # This file
```

## 📧 Contact Form

The contact form is fully functional and logs all submissions to:
- **Console output** - Real-time logs in your terminal
- **JSON file** - Saved to `contacts.json` for persistence
- **In-memory storage** - Accessible via `/api/contacts` endpoint

### Test Contact Form
1. Start development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check terminal output for detailed logs
4. Check `contacts.json` file for saved submissions

## 🎯 Customization Guide

### Personal Information
Edit these files to update your portfolio content:

1. **Hero Section**: `client/src/components/sections/Hero.tsx`
   - Name, title, description
   - Social media links
   - Profile image

2. **About Section**: `client/src/components/sections/About.tsx`
   - Personal story
   - Professional background

3. **Skills Section**: `client/src/components/sections/Skills.tsx`
   - Technical skills
   - Skill categories

4. **Projects Section**: `client/src/components/sections/Projects.tsx`
   - Project descriptions
   - Technology stacks
   - Project links

5. **Experience Section**: `client/src/components/sections/Experience.tsx`
   - Work experience
   - Education
   - Certifications

### Replace Assets
1. **Profile Photo**: Replace `attached_assets/Screenshot 2025-06-15 160808_1752347471019.png`
2. **Resume PDF**: Replace `attached_assets/NIKHIL KAUSHAL CV 20._1752347745525.pdf`
3. **Project Screenshots**: Add your project images to `attached_assets/`

## 🚀 Deployment Options

### 1. Vercel (Recommended - Free)
```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git push origin main

# Deploy to Vercel
# 1. Go to vercel.com
# 2. Connect GitHub repository
# 3. Deploy!
```

### 2. Netlify (Free)
```bash
npm run build
# Upload 'dist' folder to netlify.com
```

### 3. Railway ($5/month)
```bash
# Connect GitHub repository
# Deploy automatically
```

## 💡 Development Tips

1. **Keep terminal open** while developing to see contact form logs
2. **Use VS Code** for optimal development experience
3. **Test contact form** to verify functionality
4. **Check browser console** for any JavaScript errors
5. **Use React DevTools** browser extension for debugging

## 🎖️ Features Showcase

- **Contact Form**: Fully functional with detailed logging
- **Resume Download**: Direct PDF download functionality
- **Social Media Links**: Direct links to GitHub, LinkedIn, Email
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes
- **Professional Typography**: Clean, readable fonts
- **Smooth Animations**: Engaging user experience
- **SEO Optimized**: Ready for search engines

## 🔗 Contact Information

- **Email**: nikkaushal20@gmail.com
- **Phone**: +91 88947 25284
- **LinkedIn**: [linkedin.com/in/nikhil-kaushal-77ab6a215](https://linkedin.com/in/nikhil-kaushal-77ab6a215)
- **GitHub**: [github.com/nikhilkaushal20](https://github.com/nikhilkaushal20)

## 🔧 Troubleshooting

### Common Issues

**Issue: Port already in use**
```bash
# Kill existing process
npx kill-port 5000
npm run dev
```

**Issue: Module not found**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build fails**
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

## 📝 License

This project is licensed under the MIT License.

---

**🎉 Your professional portfolio is ready to impress employers and clients!**

*Built with React, TypeScript, and Express.js*