# 🚀 Nikhil Kaushal - Professional Portfolio

A modern, responsive portfolio website showcasing expertise in **DevOps**, **AI**, and **Software Testing**. Built with React, TypeScript, and Express.js, optimized for Windows 11 and VS Code development.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with dark/light theme
- **📱 Responsive**: Perfect on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development
- **📧 Contact Form**: Integrated with SendGrid for email notifications
- **🔧 Type-Safe**: Full TypeScript support for robust development
- **🎭 Animations**: Smooth transitions using Framer Motion
- **🌟 Professional**: Ready for job applications and client presentations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Beautiful, accessible components
- **Vite** - Fast development and building

### Backend
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server code
- **SendGrid** - Email delivery service
- **Drizzle ORM** - Type-safe database queries
- **Zod** - Schema validation

## 🎯 Quick Start (Windows 11)

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional) - [Download here](https://git-scm.com/)

### Installation
1. **Extract the project** to your desired location
2. **Open PowerShell** and navigate to the project folder
3. **Install dependencies**:
   ```powershell
   npm install
   ```

### Environment Setup
1. **Create `.env` file** in the project root:
   ```env
   SENDGRID_API_KEY=SG.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
   NODE_ENV=development
   ```

### Start Development
```powershell
npm run dev
```

**Expected output:**
```
[1] 9:27:55 PM [express] serving on port 5000
[0] VITE v5.4.19 ready in 1234 ms
[0] ➜ Local: http://localhost:5173/
```

Open your browser to `http://localhost:5173` to see your portfolio!

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (frontend + backend) |
| `npm run dev:server` | Start backend server only |
| `npm run dev:client` | Start frontend only |
| `npm run dev:windows` | Windows-specific development command |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Clean build artifacts |

## 🎨 VS Code Setup

The project includes VS Code configuration for optimal development experience:

### Auto-Install Extensions
When you open the project in VS Code, it will prompt to install:
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Error Lens**

### Development Tips
- **Create React Component**: Type `rfc` + Tab
- **Format Document**: `Shift+Alt+F`
- **Open Terminal**: `Ctrl+` (backtick)
- **Quick File Search**: `Ctrl+P`

## 📧 Email Configuration

### SendGrid Setup
Your SendGrid API key is already configured! To verify it's working:

1. **Verify your email** at [SendGrid Dashboard](https://app.sendgrid.com/)
2. **Go to Settings** → **Sender Authentication**
3. **Verify `nikkaushal20@gmail.com`** (required for email notifications)

### Test Contact Form
1. Start development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check PowerShell terminal for submission logs
4. Check your email for notification

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
│   ├── emailService.ts       # Email notifications
│   └── storage.ts            # Database operations
├── 📁 shared/                 # Shared types/schemas
├── 📁 attached_assets/        # Your portfolio assets
├── 📄 .env                   # Environment variables
├── 📄 package.json           # Dependencies
└── 📄 README.md              # This file
```

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
# 3. Add SENDGRID_API_KEY environment variable
# 4. Deploy!
```

### 2. Netlify (Free)
```bash
npm run build
# Upload 'dist' folder to netlify.com
```

### 3. Railway ($5/month)
```bash
# Connect GitHub repository
# Add environment variables
# Deploy automatically
```

## 🔧 Windows-Specific Troubleshooting

### Issue: 'NODE_ENV' is not recognized
```powershell
# Use Windows-specific command
npm run dev:windows
```

### Issue: Permission Denied
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue: Port Already in Use
```powershell
# Kill existing process
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
npm run dev
```

### Issue: Module Not Found
```powershell
# Clear and reinstall
npm cache clean --force
rmdir /s node_modules
npm install
```

## 📊 Development Workflow

### Daily Development
1. **Start development**: `npm run dev`
2. **Make changes** to portfolio sections
3. **Save files** (auto-reload in browser)
4. **Test contact form** regularly
5. **Check console** for any errors

### Git Workflow
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

### Build for Production
```bash
npm run build
npm run preview
```

## 💡 Pro Tips

1. **Keep terminal open** while developing to see real-time logs
2. **Use VS Code integrated terminal** for better workflow
3. **Test contact form** to ensure email notifications work
4. **Check browser console** for JavaScript errors
5. **Use React DevTools** browser extension for debugging

## 🎖️ Features Showcase

- **Contact Form**: Fully functional with email notifications
- **Resume Download**: Direct PDF download functionality
- **Social Media Links**: Direct links to GitHub, LinkedIn, Email
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes
- **Professional Typography**: Clean, readable fonts
- **Smooth Animations**: Engaging user experience
- **SEO Optimized**: Ready for search engines

## 🌐 Live Demo

After deployment, your portfolio will be available at:
- **Vercel**: `https://your-project-name.vercel.app`
- **Netlify**: `https://your-project-name.netlify.app`
- **Railway**: `https://your-project-name.railway.app`

## 🔗 Contact Information

- **Email**: nikkaushal20@gmail.com
- **Phone**: +91 88947 25284
- **LinkedIn**: [linkedin.com/in/nikhil-kaushal-77ab6a215](https://linkedin.com/in/nikhil-kaushal-77ab6a215)
- **GitHub**: [github.com/nikhilkaushal20](https://github.com/nikhilkaushal20)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**🎉 Your professional portfolio is ready to impress employers and clients!**

*Built with ❤️ for Windows 11 and VS Code development*