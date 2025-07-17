# Deployment Guide

Your simplified portfolio is now ready for deployment! No database required.

## 🚀 Vercel Deployment

1. **Connect to Vercel:**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect the `vercel.json` configuration

2. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Environment Variables (Optional):**
   ```
   NODE_ENV=production
   ```

## 🌐 Netlify Deployment

1. **Connect to Netlify:**
   - Push your code to GitHub
   - Connect your GitHub repo to Netlify
   - Netlify will use the `netlify.toml` configuration

2. **Environment Variables:**
   ```
   NODE_ENV=production
   DATABASE_URL=your_postgresql_connection_string
   ```

3. **Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist/public`

## 🐙 GitHub Pages (Static Only)

For static deployment without backend functionality:

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/public` folder to GitHub Pages**

## 📊 Data Storage (Simplified)

### Local Development:
- Contact form submissions are saved to `contacts.json` file
- No database setup required
- Data persists between server restarts

### Production:
- Contact form submissions are logged to console
- For persistent storage, add your own database solution
- Current setup works for basic portfolio needs

## 🔧 Build Process

The project includes these build commands:
- `npm run dev` - Development server (Unix/Linux/Mac)
- `dev.bat` - Development server (Windows)
- `npm run build` - Production build
- `npm run start` - Production server (Unix/Linux/Mac)
- `start.bat` - Production server (Windows)
- `npm run db:push` - Update database schema

### Windows Users
If you're on Windows and getting "NODE_ENV is not recognized" error:

**Option 1 - Use the provided scripts:**
- Command Prompt: `.\dev.bat`
- PowerShell: `.\dev.ps1`

**Option 2 - Install cross-env globally:**
```bash
npm install -g cross-env
```

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── netlify/         # Netlify functions
├── attached_assets/ # Static assets (resume, images)
├── vercel.json      # Vercel configuration
├── netlify.toml     # Netlify configuration
└── package.json     # Dependencies and scripts
```

## 🔒 Security Notes

- Environment variables are properly configured for production
- Database connections use SSL in production
- CORS is configured for cross-origin requests
- Input validation using Zod schemas

Your portfolio is production-ready and secure for deployment!