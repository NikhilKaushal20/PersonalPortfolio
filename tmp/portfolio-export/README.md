# Nikhil Kaushal Portfolio - Local Development Setup

## Overview
This is a modern full-stack portfolio application built for showcasing Nikhil Kaushal's professional experience in DevOps, AI, and Software Testing. The application features a responsive design with a React frontend and Express backend.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + TypeScript + Drizzle ORM
- **Database**: PostgreSQL (or in-memory storage for development)
- **Build Tool**: Vite

## Complete Local Development Setup (From Scratch)

### Prerequisites Installation

#### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download the LTS version (recommended for most users)
3. Run the installer and follow the setup wizard
4. Verify installation by opening Command Prompt/Terminal and typing:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like `v18.17.0` and `8.19.0`

#### Step 2: Install a Code Editor (Recommended)
1. Download VS Code from https://code.visualstudio.com/
2. Install these helpful extensions:
   - "ES7+ React/Redux/React-Native snippets"
   - "Prettier - Code formatter"
   - "Auto Rename Tag"
   - "Bracket Pair Colorizer"

### Project Setup

#### Step 3: Extract and Setup Project
1. **Extract the zip file** to your desired location (e.g., `C:\Projects\` or `~/Projects/`)
2. **Open Command Prompt/Terminal** and navigate to the project:
   ```bash
   cd path/to/nikhil-portfolio-project
   ```
   Example: `cd C:\Projects\nikhil-portfolio-project`

3. **Install all dependencies** (this will take 2-3 minutes):
   ```bash
   npm install
   ```

#### Step 4: Environment Configuration
1. **Copy the environment template**:
   ```bash
   cp .env.example .env
   ```
   Or on Windows: `copy .env.example .env`

2. **Edit the .env file** (optional for basic functionality):
   - The project works without database setup (uses in-memory storage)
   - For email notifications, you'll need SendGrid API key later

#### Step 5: Start the Development Server
```bash
npm run dev
```

**What happens next:**
- Backend server starts on `http://localhost:5000`
- Frontend starts on `http://localhost:5173`
- Your browser should automatically open to the portfolio
- Both servers watch for file changes and restart automatically

### Verification Steps
1. Open `http://localhost:5173` in your browser
2. You should see the portfolio website
3. Test the contact form - it should work and save submissions
4. Check the terminal for contact form submissions (they'll be logged)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:push` - Push database schema (if using PostgreSQL)
- `npm run db:studio` - Open Drizzle Studio for database management

### Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database storage layer
│   └── emailService.ts    # Email notification service
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and validation
├── attached_assets/        # Static assets (resume, images)
└── package.json           # Project dependencies
```

### Key Features

1. **Responsive Portfolio Sections**
   - Hero section with professional photo
   - About section with personal story
   - Skills showcase with technology badges
   - Projects gallery with detailed descriptions
   - Experience timeline
   - Contact form with backend integration

2. **Modern UI/UX**
   - Dark/Light theme toggle
   - Smooth animations with Framer Motion
   - Mobile-responsive design
   - Professional typography and spacing

3. **Contact Form**
   - Form validation with Zod
   - Database storage of submissions
   - Email notifications (requires SendGrid setup)
   - Toast notifications for user feedback

4. **Professional Assets**
   - Downloadable resume PDF
   - Professional photography
   - Project screenshots and graphics

### Email Notifications Setup

To enable email notifications for contact form submissions:

1. Create a SendGrid account at https://sendgrid.com
2. Generate an API key with Mail Send permissions
3. Verify your sender email address
4. Add the API key to your `.env` file as `SENDGRID_API_KEY`

### Database Setup

The application works with in-memory storage by default. To use PostgreSQL:

1. Install PostgreSQL locally
2. Create a database called `portfolio_db`
3. Add the `DATABASE_URL` to your `.env` file
4. Run `npm run db:push` to create the tables

### Customization

To customize the portfolio content:

1. **Personal Information**: Update `client/src/components/sections/Hero.tsx`
2. **Skills**: Modify `client/src/components/sections/Skills.tsx`
3. **Projects**: Update `client/src/components/sections/Projects.tsx`
4. **Experience**: Edit `client/src/components/sections/Experience.tsx`
5. **Contact Info**: Update `client/src/components/sections/Contact.tsx`
6. **Assets**: Replace files in `attached_assets/` directory

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## Complete Deployment Guide

### Option 1: Deploy to Vercel (Recommended - Free & Easy)

#### Step 1: Prepare for Deployment
1. **Build the project locally** to ensure everything works:
   ```bash
   npm run build
   ```

2. **Create a GitHub repository** (if you haven't already):
   - Go to https://github.com and create a new repository
   - Initialize git in your project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/your-repo-name.git
     git push -u origin main
     ```

#### Step 2: Deploy to Vercel
1. **Sign up at Vercel**: Go to https://vercel.com and sign up with GitHub
2. **Import your project**: Click "New Project" and import from GitHub
3. **Configure build settings**:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add environment variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add `SENDGRID_API_KEY` if you want email notifications

5. **Deploy**: Click "Deploy" and wait 2-3 minutes

**Your portfolio will be live at**: `https://your-project-name.vercel.app`

### Option 2: Deploy to Netlify (Alternative Free Option)

#### Step 1: Build and Prepare
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create a `_redirects` file** in the `dist` folder:
   ```
   /api/* http://localhost:5000/api/:splat 200
   /* /index.html 200
   ```

#### Step 2: Deploy to Netlify
1. **Sign up at Netlify**: Go to https://netlify.com
2. **Drag and drop**: Simply drag your `dist` folder to Netlify's deployment area
3. **Or connect to GitHub**: Link your GitHub repository for automatic deployments

**Note**: Netlify is better for static sites. For full-stack features, use Vercel.

### Option 3: Deploy to Railway (For Full-Stack Apps)

#### Step 1: Prepare the Project
1. **Create a `Procfile`** in your project root:
   ```
   web: npm run start
   ```

2. **Update package.json** to include a start script:
   ```json
   {
     "scripts": {
       "start": "node dist/server/index.js",
       "build": "npm run build:client && npm run build:server",
       "build:client": "vite build",
       "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=dist/server/index.js --external:pg --external:@neondatabase/serverless"
     }
   }
   ```

#### Step 2: Deploy to Railway
1. **Sign up at Railway**: Go to https://railway.app
2. **Connect GitHub**: Link your GitHub repository
3. **Add environment variables**: Add `SENDGRID_API_KEY` if needed
4. **Deploy**: Railway will automatically build and deploy

### Option 4: Deploy to Render (Professional Option)

#### Step 1: Create Build Configuration
1. **Create a `render.yaml`** in your project root:
   ```yaml
   services:
     - type: web
       name: nikhil-portfolio
       env: node
       buildCommand: npm install && npm run build
       startCommand: npm start
       envVars:
         - key: NODE_ENV
           value: production
   ```

#### Step 2: Deploy to Render
1. **Sign up at Render**: Go to https://render.com
2. **Connect GitHub**: Link your repository
3. **Configure**: Follow the setup wizard
4. **Add environment variables**: Include `SENDGRID_API_KEY`

### Option 5: Deploy to Your Own VPS (Advanced)

#### Step 1: Server Setup
1. **Rent a VPS** (DigitalOcean, AWS, etc.)
2. **Install Node.js** on the server:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2** for process management:
   ```bash
   npm install -g pm2
   ```

#### Step 2: Deploy Your App
1. **Upload your project** to the server (via git or FTP)
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Start with PM2**:
   ```bash
   pm2 start dist/server/index.js --name portfolio
   pm2 startup
   pm2 save
   ```

5. **Setup Nginx** as reverse proxy (optional but recommended)

### Custom Domain Setup (Any Platform)

1. **Buy a domain** from GoDaddy, Namecheap, etc.
2. **Add custom domain** in your deployment platform settings
3. **Update DNS records** to point to your deployment platform
4. **SSL certificate** will be automatically provided

### Email Notifications Setup

To enable contact form email notifications on any platform:

1. **Create SendGrid account**: Sign up at https://sendgrid.com
2. **Generate API key**: Go to Settings → API Keys → Create API Key
3. **Verify sender email**: Go to Settings → Sender Authentication
4. **Add to environment variables**: Set `SENDGRID_API_KEY=SG.your-key-here`

### Database Setup for Production

For production use with PostgreSQL:

1. **Create database**: Use services like Neon, Supabase, or Railway
2. **Get connection string**: Copy the DATABASE_URL
3. **Add to environment variables**: Set `DATABASE_URL=postgresql://...`
4. **Run migrations**: Execute `npm run db:push` before deployment

### Monitoring and Maintenance

1. **Check deployment logs** regularly
2. **Monitor contact form submissions**
3. **Update dependencies** monthly with `npm update`
4. **Backup your database** if using PostgreSQL
5. **Monitor uptime** using services like UptimeRobot

### Cost Breakdown

- **Vercel**: Free tier (perfect for portfolio)
- **Netlify**: Free tier (static sites)
- **Railway**: $5/month (full-stack apps)
- **Render**: $7/month (professional features)
- **VPS**: $5-20/month (full control)
- **Domain**: $10-15/year
- **SendGrid**: Free tier (100 emails/day)

### Contact

For questions or support, contact Nikhil Kaushal:
- Email: nikkaushal20@gmail.com
- Phone: +91 88947 25284
- LinkedIn: https://linkedin.com/in/nikhil-kaushal-77ab6a215

---

**Note**: This portfolio was built using modern web technologies and best practices. The code is well-structured, type-safe, and ready for production use.