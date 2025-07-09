# Full Stack Developer Portfolio

## Overview

This is a modern, full-stack developer portfolio application built with React, Express, and PostgreSQL. The portfolio showcases a professional developer's work, skills, and certifications through a visually appealing, responsive design with modern UI components and animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer for contact form functionality
- **Session Management**: Built-in memory storage for development
- **API Design**: RESTful endpoints with JSON responses

### UI/UX Design System
- **Theme**: Dark mode by default with light mode toggle
- **Design Language**: Modern glassmorphism effects with gradient backgrounds
- **Typography**: System fonts with custom CSS variables
- **Animations**: CSS animations for hero section and skill progress bars
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated background with typing effect and call-to-action buttons
2. **About Section**: Personal information with profile image placeholder and social links
3. **Skills Section**: Progress bars with intersection observer animations
4. **Certifications Section**: Card-based layout with dummy certifications
5. **Projects Section**: Featured projects with technology stack and links
6. **Contact Section**: Working contact form with email integration
7. **Footer**: Social links and copyright information

### UI Components
- **Navigation**: Sticky navigation with smooth scrolling and mobile menu
- **Theme Provider**: Dark/light mode toggle with localStorage persistence
- **Form Components**: Input, textarea, button, and form validation
- **Toast Notifications**: User feedback for form submissions
- **Particles Background**: Canvas-based animated particle system

### Database Schema
- **Contact Messages**: Stores form submissions with validation
- **Users**: Basic user table structure (future authentication)

## Data Flow

### Contact Form Flow
1. User fills out contact form with name, email, subject, and message
2. Form validation occurs on client-side using Zod schema
3. Valid data is sent to `/api/contact` endpoint
4. Server validates data and saves to database
5. Email notification is sent to portfolio owner
6. Auto-reply email is sent to form submitter
7. Success/error feedback is displayed to user

### Theme Management
1. Theme preference is stored in localStorage
2. CSS classes are toggled on document root
3. Theme context provides current state to all components

### Content Management
- Static content is defined in constants file
- Personal information, social links, and typing words are centralized
- Project data and certifications are hardcoded for demo purposes

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Accessible component primitives
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **class-variance-authority**: Type-safe CSS class variants
- **clsx**: Conditional CSS classes
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **lucide-react**: Icon library
- **react-icons**: Additional icon sets
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist routing library
- **zod**: Schema validation

### Backend Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM
- **drizzle-zod**: Zod integration for database schemas
- **express**: Web framework
- **nodemailer**: Email sending functionality
- **connect-pg-simple**: PostgreSQL session store

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Setup
- Uses Vite development server with hot module replacement
- Express server runs on development mode with middleware logging
- Database migrations are handled through Drizzle Kit
- Environment variables for database connection and email configuration

### Production Build
- Frontend builds to static files using Vite
- Backend bundles with esbuild for Node.js deployment
- Supports both development and production environments
- Database schema is pushed using `drizzle-kit push`

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Email service configuration through SMTP environment variables
- Replit-specific plugins for development environment
- TypeScript configuration supports both client and server code

### File Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database operations
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript definitions
│   └── schema.ts         # Database schemas and validation
└── migrations/           # Database migration files
```

This architecture provides a solid foundation for a professional developer portfolio with modern web technologies, responsive design, and full-stack functionality including contact form processing and email integration.