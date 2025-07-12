# VS Code Setup Guide for Nikhil's Portfolio

## Step 1: Install VS Code Extensions

Open VS Code and install these essential extensions:

### Required Extensions:
1. **ES7+ React/Redux/React-Native snippets** - `dsznajder.es7-react-js-snippets`
2. **Prettier - Code formatter** - `esbenp.prettier-vscode`
3. **TypeScript Importer** - `pmneo.tsimporter`
4. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
5. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`

### Recommended Extensions:
6. **Bracket Pair Colorizer** - `coenraads.bracket-pair-colorizer`
7. **GitLens** - `eamodio.gitlens`
8. **Thunder Client** - `rangav.vscode-thunder-client` (for testing APIs)
9. **Error Lens** - `usernamehw.errorlens`
10. **Material Icon Theme** - `pkief.material-icon-theme`

## Step 2: Configure VS Code Settings

Create a `.vscode/settings.json` file in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    "cn\\(([^)]*)\\)"
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## Step 3: Set Up Prettier Configuration

Create a `.prettierrc` file in your project root:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## Step 4: Quick Start Commands

### Open Project in VS Code:
1. Extract the zip file
2. Open VS Code
3. File → Open Folder → Select your project folder
4. Or use terminal: `code .` (if you have code command installed)

### Terminal Commands in VS Code:
- **Open Terminal**: `Ctrl+` (backtick)
- **Install dependencies**: `npm install`
- **Start development**: `npm run dev`
- **Build project**: `npm run build`

## Step 5: VS Code Shortcuts for Development

### Essential Shortcuts:
- **File Explorer**: `Ctrl+Shift+E`
- **Search**: `Ctrl+Shift+F`
- **Command Palette**: `Ctrl+Shift+P`
- **Quick Open**: `Ctrl+P`
- **Terminal**: `Ctrl+` (backtick)
- **Format Document**: `Shift+Alt+F`

### React Development:
- **Type `rfc`** → Creates React functional component
- **Type `useState`** → Auto-imports and creates useState hook
- **Type `useEffect`** → Auto-imports and creates useEffect hook
- **`Ctrl+Space`** → Trigger IntelliSense

## Step 6: Project Structure in VS Code

Your project will look like this in VS Code:

```
nikhil-portfolio-project/
├── 📁 client/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 sections/
│   │   │   │   ├── 📄 Hero.tsx
│   │   │   │   ├── 📄 About.tsx
│   │   │   │   ├── 📄 Skills.tsx
│   │   │   │   ├── 📄 Projects.tsx
│   │   │   │   ├── 📄 Experience.tsx
│   │   │   │   └── 📄 Contact.tsx
│   │   │   └── 📁 ui/ (shadcn components)
│   │   ├── 📁 hooks/
│   │   ├── 📁 lib/
│   │   └── 📁 pages/
│   └── 📄 index.html
├── 📁 server/
│   ├── 📄 index.ts
│   ├── 📄 routes.ts
│   └── 📄 storage.ts
├── 📁 shared/
│   └── 📄 schema.ts
├── 📄 package.json
├── 📄 .env.example
└── 📄 README.md
```

## Step 7: Development Workflow

### 1. Start Development Server:
```bash
npm run dev
```

### 2. Open Two Terminals:
- **Terminal 1**: Running `npm run dev`
- **Terminal 2**: For git commands and other tasks

### 3. Live Development:
- Edit files in `client/src/components/sections/` to customize content
- Changes auto-reload in browser
- TypeScript errors show in VS Code immediately

### 4. Testing Contact Form:
- Fill out the form on your local site
- Check terminal for contact submissions
- All data is logged to console

## Step 8: Customization Guide

### Update Your Information:
1. **Hero Section**: Edit `client/src/components/sections/Hero.tsx`
   - Change name, title, description
   - Update social media links
   - Replace profile image

2. **About Section**: Edit `client/src/components/sections/About.tsx`
   - Personal story and background
   - Professional journey

3. **Skills Section**: Edit `client/src/components/sections/Skills.tsx`
   - Add/remove technologies
   - Update skill categories

4. **Projects Section**: Edit `client/src/components/sections/Projects.tsx`
   - Add your projects
   - Update descriptions and links
   - Change project images

5. **Experience Section**: Edit `client/src/components/sections/Experience.tsx`
   - Add work experience
   - Update certifications

6. **Contact Section**: Edit `client/src/components/sections/Contact.tsx`
   - Update contact information
   - Modify form fields if needed

### Replace Assets:
1. Replace files in `attached_assets/` folder
2. Update import paths in components
3. Your resume PDF: Replace `NIKHIL KAUSHAL CV 20._1752347745525.pdf`

## Step 9: Git Integration

### Initialize Git:
```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

### Connect to GitHub:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Daily Workflow:
```bash
git add .
git commit -m "Update project description"
git push
```

## Step 10: Debugging Tips

### Common Issues:
1. **Port already in use**: Change port in `server/index.ts`
2. **Module not found**: Run `npm install`
3. **Build errors**: Check TypeScript errors in Problems panel

### VS Code Debugging:
- **Problems Panel**: `Ctrl+Shift+M`
- **Output Panel**: `Ctrl+Shift+U`
- **Terminal**: `Ctrl+` (backtick)

### React DevTools:
- Install React DevTools browser extension
- Inspect components and state

## Step 11: Deployment from VS Code

### Build and Test:
```bash
npm run build
npm run preview
```

### Deploy to Vercel:
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

## Quick Reference

### File Types:
- `.tsx` → React components with TypeScript
- `.ts` → TypeScript files
- `.css` → Styling (Tailwind CSS)
- `.json` → Configuration files

### Key Folders:
- `client/src/components/sections/` → Your portfolio content
- `server/` → Backend API
- `attached_assets/` → Images, resume, etc.

### Development URLs:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- API: `http://localhost:5000/api/`

---

**Pro Tip**: Keep the terminal open while developing to see real-time logs and any errors. The portfolio will hot-reload automatically when you save changes!