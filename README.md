# Nikhil Kaushal - Portfolio Website

A modern, responsive portfolio website showcasing professional experience in DevOps, AI, and Software Testing.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Contact Form**: Functional contact form with backend integration
- **Resume Download**: Direct PDF download functionality
- **Smooth Animations**: Framer Motion powered scroll animations
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Express.js

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

#### Windows Users
If you get "NODE_ENV is not recognized" error:

**For Command Prompt:**
```cmd
.\dev.bat
```

**For PowerShell:**
```powershell
.\dev.ps1
```

### Production Build
```bash
npm run build
npm start
```

## 🛠 Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- React Hook Form with Zod validation
- React Query for state management

### Backend
- Express.js with TypeScript
- Drizzle ORM with PostgreSQL
- Zod validation schemas
- File serving for assets

### Deployment Ready
- ✅ Vercel configuration
- ✅ Netlify configuration
- ✅ GitHub Pages support
- ✅ Environment variables setup

## 📁 Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data storage
│   └── emailService.ts  # Contact form handling
├── shared/              # Shared types
├── attached_assets/     # Static files
└── netlify/            # Netlify functions
```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel
- Netlify
- GitHub Pages
- Other platforms

## 📧 Contact

Feel free to reach out through the contact form on the website or connect on LinkedIn!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!