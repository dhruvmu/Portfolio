# VS Code Setup Guide for Portfolio

## 🎯 Quick Setup Steps

### 1. Download Project Files
1. Copy all the project files to your computer
2. Create a new folder called `portfolio-project`
3. Extract/paste all files into this folder

### 2. Open in VS Code
1. Open VS Code
2. File → Open Folder → Select your `portfolio-project` folder
3. VS Code will open the entire project

### 3. Install Required Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets** - For React components
- **Tailwind CSS IntelliSense** - For Tailwind autocomplete
- **TypeScript Hero** - For TypeScript support
- **Prettier** - For code formatting
- **Auto Rename Tag** - For HTML/JSX tags

### 4. Install Dependencies
1. Open VS Code terminal (View → Terminal or Ctrl+`)
2. Run: `npm install`
3. Wait for installation to complete

### 5. Start Development Server
1. In the terminal, run: `npm run dev`
2. Open browser to `http://localhost:5000`
3. Your portfolio should be running!

## 📁 Key Files to Customize

### Personal Information
📄 `client/src/lib/constants.ts`
```typescript
export const PERSONAL_INFO = {
  name: "Alex Johnson", // ← Change this to your name
  title: "Full Stack Developer", // ← Your job title
  email: "alex.johnson@email.com", // ← Your email
  phone: "+1 (555) 123-4567", // ← Your phone
  location: "San Francisco, CA", // ← Your location
};
```

### Skills Section
📄 `client/src/components/skills-section.tsx`
- Look for `skillCategories` array
- Update skill names and levels (0-100)
- Add/remove skills as needed

### Projects Section
📄 `client/src/components/projects-section.tsx`
- Find `projects` array
- Replace with your actual projects
- Update titles, descriptions, tech stack, and links

### About Section
📄 `client/src/components/about-section.tsx`
- Update the biography text
- Replace profile photo placeholder
- Update social media links

### Certifications
📄 `client/src/components/certifications-section.tsx`
- Update with your actual certifications
- Change titles, issuers, and dates

## 🎨 Visual Customization

### Colors
📄 `client/src/index.css`
```css
:root {
  --primary: hsl(207, 90%, 54%); /* Main blue color */
  --accent: hsl(193, 100%, 54%); /* Accent color */
  /* Change these values to your preferred colors */
}
```

### Profile Photo
1. Add your photo to `client/src/assets/` folder
2. Update `client/src/components/about-section.tsx`
3. Replace the user icon with your image

## 📧 Contact Form Setup

### For Email Functionality
1. Create `.env` file in root directory
2. Add your email settings:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@gmail.com
```

### Gmail Setup
1. Go to Google Account settings
2. Enable 2-factor authentication
3. Generate App Password
4. Use App Password in `.env` file

## 🚀 Going Live

### Option 1: Vercel (Free & Easy)
1. Push code to GitHub
2. Go to vercel.com
3. Connect GitHub and deploy

### Option 2: Netlify
1. Run `npm run build`
2. Upload `dist` folder to netlify.com

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder to your web host

## 🔧 Common Issues & Solutions

### Issue: `npm install` fails
**Solution**: 
- Make sure Node.js is installed
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Issue: Port already in use
**Solution**: 
- Close other applications using port 5000
- Or change port in `server/index.ts`

### Issue: Styling looks broken
**Solution**: 
- Make sure Tailwind CSS is properly installed
- Check `tailwind.config.ts` configuration

### Issue: Contact form not working
**Solution**: 
- Check `.env` file configuration
- Verify email credentials
- Check browser console for errors

## 📝 Development Workflow

1. **Make changes** to files in VS Code
2. **Save files** (Ctrl+S)
3. **Check browser** - changes update automatically
4. **Test contact form** before going live
5. **Build for production** when ready

## 🎯 Next Steps

1. ✅ Set up the project in VS Code
2. ✅ Customize personal information
3. ✅ Update projects and skills
4. ✅ Add your photo and content
5. ✅ Test contact form
6. ✅ Deploy to web

**You're ready to build your professional portfolio!**