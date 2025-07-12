# Nikhil Kaushal Portfolio - Local Development Setup

## Overview
This is a modern full-stack portfolio application built for showcasing Nikhil Kaushal's professional experience in DevOps, AI, and Software Testing. The application features a responsive design with a React frontend and Express backend.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express.js + TypeScript + Drizzle ORM
- **Database**: PostgreSQL (or in-memory storage for development)
- **Build Tool**: Vite

## Local Development Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- PostgreSQL database (optional - defaults to in-memory storage)

### Installation Steps

1. **Extract and navigate to the project directory**
   ```bash
   cd nikhil-portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional)**
   Create a `.env` file in the root directory if you want to use PostgreSQL:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend on `http://localhost:5173`
   - Backend API on `http://localhost:5000`
   - The frontend will proxy API requests to the backend

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

### Deployment

This application can be deployed to platforms like:
- Vercel
- Netlify
- Railway
- Render
- Any VPS with Node.js support

Make sure to set the appropriate environment variables on your deployment platform.

### Contact

For questions or support, contact Nikhil Kaushal:
- Email: nikkaushal20@gmail.com
- Phone: +91 88947 25284
- LinkedIn: https://linkedin.com/in/nikhil-kaushal-77ab6a215

---

**Note**: This portfolio was built using modern web technologies and best practices. The code is well-structured, type-safe, and ready for production use.