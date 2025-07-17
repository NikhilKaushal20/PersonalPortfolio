# Deployment Guide

Your portfolio is now ready for deployment on multiple platforms! Here are the configurations provided:

## 🚀 Vercel Deployment

1. **Connect to Vercel:**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect the `vercel.json` configuration

2. **Environment Variables:**
   ```
   NODE_ENV=production
   DATABASE_URL=your_postgresql_connection_string
   ```

3. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

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

## 📊 Database Options

### Free Database Providers:
- **Neon.tech** (PostgreSQL) - 10GB free
- **Supabase** (PostgreSQL) - 500MB free
- **PlanetScale** (MySQL) - 5GB free
- **Railway** (PostgreSQL) - 5GB free

### Setup Steps:
1. Create a database on your chosen provider
2. Copy the connection string
3. Add it as `DATABASE_URL` environment variable
4. Run `npm run db:push` to create tables

## 🔧 Build Process

The project includes these build commands:
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Update database schema

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