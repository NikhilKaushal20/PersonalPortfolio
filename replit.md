# Nikhil Kaushal Portfolio - Full-Stack Application

## Overview

This is a modern full-stack portfolio application built for showcasing Nikhil Kaushal's professional experience in DevOps, AI, and Software Testing. The application features a responsive design with a React frontend and Express backend, utilizing PostgreSQL for data storage and modern UI components.

## Recent Changes
- **Migration Completed (July 17, 2025)**: Successfully migrated from Replit Agent to Replit environment
- **Simplified Architecture**: Removed database dependency, uses file-based storage for contact forms
- **Deployment Ready**: Added Vercel, Netlify, and GitHub Pages deployment configurations
- **Cross-Platform Support**: Added Windows batch files and PowerShell scripts for local development
- **Documentation**: Created comprehensive deployment guide, README, and quick start guide
- **Streamlined Setup**: Eliminated complex dependencies, works on localhost without issues

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**July 17, 2025 - Migration to Replit Environment Complete**
- Successfully migrated from Replit Agent to standard Replit environment
- Fixed corrupted vite.config.ts configuration file
- Added deployment configurations for Vercel and Netlify
- Installed serverless deployment dependencies
- Created comprehensive deployment documentation
- Project is now ready for deployment on multiple platforms

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Currently using in-memory storage (MemStorage class)
- **API Design**: RESTful endpoints with proper error handling
- **File Serving**: Static file serving for assets and resume downloads

### Database Schema
The application uses Drizzle ORM with PostgreSQL, featuring:
- **Users table**: Basic user management (id, username, password)
- **Contacts table**: Contact form submissions (id, name, email, subject, message, created_at)
- **Schema validation**: Zod schemas for type-safe data validation

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with social links and call-to-action buttons
2. **About Section**: Personal story and professional background
3. **Skills Section**: Technical skills with progress indicators
4. **Projects Section**: Showcase of major projects with technology tags
5. **Experience Section**: Professional experience and certifications
6. **Contact Section**: Contact form with backend integration

### UI Features
- **Theme System**: Light/dark mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system for form submissions

### Technical Features
- **TypeScript**: Full type safety across frontend and backend
- **Path Aliases**: Organized imports with @ prefixes
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Asset Management**: Static asset serving with proper MIME types

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **API Layer**: Express routes handle business logic and data validation
3. **Database Layer**: Drizzle ORM manages database operations
4. **Response Flow**: JSON responses with proper error handling and logging

### Contact Form Flow
1. User fills out contact form → 2. Frontend validates with Zod → 3. POST to /api/contact → 4. Backend validates and stores → 5. Success/error response → 6. Toast notification

### Resume Download Flow
1. User clicks download button → 2. GET request to /api/resume/download → 3. Backend serves PDF file → 4. Browser handles download

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for variants
- **Form Handling**: React Hook Form, Hookform resolvers
- **Animation**: Framer Motion
- **Utilities**: clsx, date-fns

### Backend Dependencies
- **Core**: Express.js, TypeScript
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: connect-pg-simple (configured but not actively used)
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, esbuild for production builds
- **Database**: Drizzle Kit for migrations and schema management
- **Linting**: TypeScript compiler for type checking
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with hot reload
- **Backend**: tsx for TypeScript execution with file watching
- **Database**: Drizzle push for schema synchronization

### Production
- **Build Process**: Vite builds client-side assets, esbuild bundles server code
- **Static Assets**: Served from dist/public directory
- **Database**: Expects DATABASE_URL environment variable for PostgreSQL connection
- **Server**: Node.js execution of bundled server code

### Environment Configuration
- **Development**: NODE_ENV=development enables development features
- **Production**: NODE_ENV=production optimizes for performance
- **Database**: DATABASE_URL required for PostgreSQL connection
- **Assets**: Static file serving from attached_assets directory

The application is designed to be easily deployable on various platforms with minimal configuration, requiring only a PostgreSQL database and proper environment variables.