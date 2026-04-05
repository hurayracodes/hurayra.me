# Project Route & File Structure - HurayraCodes Portfolio

## Web App Description
This is a modern, animated **personal portfolio website** built with **Next.js 13+ App Router**, **React**, **Tailwind CSS**, and advanced UI animations using GSAP, Three.js, and Framer Motion. 

**Key Features:**
- Responsive design with smooth animations and interactive UI elements
- Portfolio sections: Hero, About, Skills, Work Experience, Projects, Clients, Knowledge, Contact
- Advanced components: Bento grids, glowing cards, rotating text, text roll navigation, expandable tabs, moving borders
- App Router structure with main App container
- Tech stack showcase: Next.js, React, TypeScript, Tailwind, GSAP, Three.js, etc.
- Professional layout with dark theme and particle effects

The app serves as Hurayra's developer portfolio, showcasing projects, skills, work experience, and client testimonials.

## Complete Folder Structure

```
d:/codePlayground/codes/Next js/hurayraCodes/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── route.md (this file)
├── lib/
│   └── utils.js
├── public/
│   ├── Abuhurara.pdf
│   ├── app.svg
│   ├── appName.svg
│   ├── b1.svg
│   ├── b4.svg
│   ├── b5.svg
│   ├── bg-bg.png
│   ├── bg.png
│   ├── bg.svg
│   ├── c.svg
│   ├── client1.png ... client6.png
│   ├── cloud.svg
│   ├── cloudName.svg
│   ├── confetti.gif
│   ├── dock.svg
│   ├── dockerName.svg
│   ├── exp1.png ... exp4.svg
│   ├── fm.svg
│   ├── footer-grid.svg
│   ├── git.svg
│   ├── grid.svg
│   ├── gsap.svg
│   ├── h.svg
│   ├── heapwarelogo.jpg
│   ├── hero-bg.svg
│   ├── hero.pdf
│   ├── host.svg
│   ├── hostName.svg
│   ├── hurayra.png
│   ├── hurayracodes.png
│   ├── insta.svg
│   ├── JS.svg
│   ├── jsm-logo.png
│   ├── link.svg
│   ├── next.svg
│   ├── p1.svg ... p4.svg
│   ├── popcorn.gif
│   ├── profile.svg
│   ├── project-img-1.png ... project-img-5.png
│   ├── re.svg
│   ├── s.svg
│   ├── stream.svg
│   ├── streamName.svg
│   ├── tail.svg
│   ├── three.svg
│   ├── ts.svg
│   ├── twit.svg
│   ├── wha.svg
│   └── icons/
│       ├── Express.svg
│       ├── git.svg
│       ├── github.svg
│       ├── JavaScript.svg
│       ├── logo.svg
│       ├── menu.svg
│       ├── mongodb.svg
│       ├── nextjs.svg
│       ├── nodejs.svg
│       ├── python.svg
│       ├── reactjs.svg
│       ├── tailwind.svg
│       ├── threejs.svg
│       ├── typescript.svg
│       ├── vercel.svg
│       └── vscode.svg
└── app/
    ├── favicon.ico
    ├── globals.css
    ├── layout.js (Root Layout)
    ├── page.jsx (Root Page - likely renders main App)
    ├── components/
    │   └── ui/ (empty or other UI components)
    └── main/ (Main Portfolio App)
        ├── App.jsx (Main portfolio container)
        ├── components/
        │   ├── Footer.jsx
        │   └── tex.md (markdown file)
        └── sections/ (Page Sections)
        │   ├── About.jsx
        │   ├── Clients.jsx
        │   ├── Contact.jsx
        │   ├── Hero.jsx
        │   ├── Knowledge.jsx
        │   ├── Navigation.jsx
        │   ├── Projects.jsx
        │   ├── SkillsSection.jsx
        │   └── WorkExperience.jsx
        └── ui/ (UI Components & Animations)
            ├── bento-grid.jsx
            ├── button.jsx
            ├── Data.jsx
            ├── DecryptedText.jsx
            ├── Dock.jsx
            ├── ExpandableTabs.jsx
            ├── GlowCard.jsx
            ├── MovingBorders.jsx
            ├── ProjectCard.jsx
            ├── RotatingText.jsx
            ├── Skillboxs.jsx
            ├── Testimonals.jsx
            ├── TextRollNavigation.jsx
            ├── TitleHeader.jsx
            └── utils.jsx

## Next.js App Router Structure
```
app/
├── layout.js (root layout)
├── page.jsx (/) - renders main/App.jsx
└── main/App.jsx (main portfolio app)
```

## Key File Groups by Purpose

### 🎨 **Core Layout & Styling**
- `app/layout.js` - Root layout
- `app/globals.css` - Global styles
- `app/page.jsx` - Root page

### 📁 **Main App Container**
- `app/main/App.jsx` - Portfolio main component

### 📋 **Content Sections**
```
app/main/sections/
├── Hero.jsx - Landing hero section
├── About.jsx - About me section
├── SkillsSection.jsx - Skills showcase
├── WorkExperience.jsx - Experience timeline
├── Projects.jsx - Projects showcase
├── Clients.jsx - Clients logos
├── Knowledge.jsx - Knowledge/tech stack
├── Navigation.jsx - Navigation component
└── Contact.jsx - Contact form
```

### ✨ **UI Components & Animations**
```
app/main/ui/
├── TextRollNavigation.jsx - Animated nav text
├── MovingBorders.jsx - Border animations
├── ProjectCard.jsx - Project cards
├── Skillboxs.jsx - Skills boxes
├── GlowCard.jsx - Glowing cards
├── Dock.jsx - MacOS-style dock
├── BentoGrid.jsx - Bento box layouts
├── RotatingText.jsx - Rotating text effects
├── ExpandableTabs.jsx - Tab components
└── ... (17+ animation components)
```

### 📦 **Assets**
- **public/** - Images, SVGs (projects, clients, icons, backgrounds)
- **lib/utils.js** - Utility functions

## Development Commands
```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run lint    # Run ESLint
```

This structure follows Next.js App Router best practices with clean separation of concerns: sections for content, ui/ for reusable components, and public/ for static assets.
