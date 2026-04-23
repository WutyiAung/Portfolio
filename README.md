# Wutyi Aung - Portfolio Website

A modern, production-level developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimal dark theme with gradient accents
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ✨ **Smooth Animations**: Framer Motion for engaging interactions
- 🎭 **Glassmorphism**: Modern UI with glass-like cards
- 🚀 **Performance**: Optimized with Vite and lazy loading
- 🛠️ **Production Ready**: Clean, modular code structure

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Badge.jsx
│   └── SectionHeader.jsx
├── sections/           # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/              # Static data
│   └── personalInfo.js
├── utils/             # Utility functions
├── App.jsx            # Main app component
└── index.css          # Global styles with Tailwind
```

## Setup Instructions

### Prerequisites

- Node.js 20.19+ or 22.12+ (required for Vite 8.x)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal story and key highlights
- **Skills**: Technical skills organized by category
- **Projects**: 4 real-world projects with detailed information
- **Experience**: Timeline of professional experience
- **Contact**: Contact form and information
- **Footer**: Social links and navigation

## Customization

### Personal Information

Edit `src/data/personalInfo.js` to update:
- Name and title
- Contact information
- Skills and projects
- Experience details

### Styling

The theme uses Tailwind CSS with custom color palette defined in `tailwind.config.js`. 
Custom component styles are in `src/index.css`.

### Animations

Framer Motion animations are configured in each component. 
Adjust timing, easing, and effects as needed.

## Deployment

The project is ready for deployment on any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Note

If you encounter Node.js version compatibility issues, ensure you're using Node.js 20.19+ or 22.12+ as required by the latest Vite version.
