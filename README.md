# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Express.js, and featuring glassmorphism design with smooth animations.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop and mobile
- **Dark/Light Mode**: Toggle between themes
- **Animated Elements**: Typing animation, particle effects, smooth transitions
- **Contact Form**: Working backend with email integration
- **Professional Sections**: Hero, About, Skills, Certifications, Projects, Contact

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- Radix UI components (shadcn/ui)
- React Query for state management
- Wouter for routing

**Backend:**
- Node.js with Express
- TypeScript
- Nodemailer for email functionality
- In-memory storage for development

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── certifications-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── footer.tsx
│   │   │   └── particles-background.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   ├── index.css      # Global styles
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
│   └── schema.ts         # Database schemas
└── package.json          # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone/Download the project** to your VS Code workspace

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**: Navigate to `http://localhost:5000`

## 📝 Customization Guide

### 1. Personal Information

Edit `client/src/lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your Location",
  description: "Your description...",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
};
```

### 2. Skills Section

Update `client/src/components/skills-section.tsx`:

```typescript
const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      // Add your skills here
    ],
  },
  // Add more categories
];
```

### 3. Projects Section

Modify `client/src/components/projects-section.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/yourusername/project",
  },
  // Add more projects
];
```

### 4. Certifications

Update `client/src/components/certifications-section.tsx`:

```typescript
const certifications = [
  {
    title: "Your Certification",
    issuer: "Issuing Organization",
    date: "Month Year",
    credentialId: "CERT-ID-123",
  },
  // Add your certifications
];
```

## 📧 Email Configuration

To enable the contact form email functionality:

1. **Set up environment variables** (create `.env` file):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   NOTIFICATION_EMAIL=your-email@gmail.com
   ```

2. **For Gmail**: Generate an App Password in your Google Account settings

## 🎨 Design Customization

### Colors
Edit `client/src/index.css` to change the color scheme:

```css
:root {
  --primary: hsl(207, 90%, 54%);
  --accent: hsl(193, 100%, 54%);
  --primary-gradient: linear-gradient(135deg, hsl(234, 78%, 67%), hsl(274, 53%, 64%));
  /* Customize other colors */
}
```

### Fonts
Update `tailwind.config.ts` to change fonts:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and tested on:
- Desktop (1920x1080+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing the portfolio:
- Check the customization guide above
- Review the component files for examples
- Modify the constants file for quick changes

---

**Built with ❤️ for aspiring developers**