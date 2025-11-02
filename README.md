# Type & Smile 🌟

A delightful, offline-friendly web app for toddlers (ages 2-4) to learn letters and numbers through interactive typing games.

## Features

- 🎮 **Two Game Modes**:
  - **Find the Letter**: Interactive game where toddlers find target letters among distractors
  - **Free Typing**: Creative mode with large, animated letters that appear as the child types

- 🔊 **Audio Feedback**: Phonics pronunciation using Web Speech API
- ✨ **Visual Delights**: Confetti animations, playful character animations, and warm color palette
- 📱 **PWA Support**: Works offline after first load, installable on mobile devices
- 🎚️ **Difficulty Levels**: Easy (A-Z uppercase), Medium (mixed case), Hard (includes 0-9)
- 💾 **Persistent Settings**: Mute, difficulty, and last mode saved with localStorage
- ♿ **Accessibility**: Keyboard navigable, respects reduced motion preferences

## Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS
- **Audio**: Web Speech API (speechSynthesis) + Web Audio API
- **PWA**: vite-plugin-pwa

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd type-and-smile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Step 1: Update Vite Config

The `vite.config.ts` already includes the `base: './'` configuration needed for GitHub Pages. If you're deploying to a custom subdomain path (e.g., `username.github.io/repo-name`), update the base:

```typescript
base: '/repo-name/' // Replace with your actual repo name
```

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy with GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Push the workflow file and the deployment will run automatically

### Alternative: Manual Deployment

1. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Select source branch: `gh-pages`
   - Select folder: `/ (root)`

## Project Structure

```
type-and-smile/
├── public/
│   ├── favicon.svg
│   └── (PWA icons - generate these)
├── src/
│   ├── components/
│   │   ├── BigKey.tsx
│   │   ├── ConfettiStars.tsx
│   │   ├── ControlBar.tsx
│   │   ├── FindLetterGame.tsx
│   │   ├── FreeTypingMode.tsx
│   │   ├── LetterCard.tsx
│   │   └── ModeToggle.tsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── audio.ts
│   │   ├── phonics.ts
│   │   └── storage.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Generating PWA Icons

You'll need to create PWA icons. Use an online tool like [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator) or create them manually:

- `pwa-192x192.png` (192x192 pixels)
- `pwa-512x512.png` (512x512 pixels)

Place these files in the `public/` directory.

## Features in Detail

### Find the Letter Mode

- Shows a large target letter card
- Displays 5-7 bubble buttons with randomized letters (always includes target)
- Supports both physical keyboard input and on-screen button taps
- On correct answer: success sound, phonics speech, confetti animation, auto-advance
- On wrong answer: gentle bounce animation with soft sound
- Tracks streak counter (⭐ count)
- "Repeat" button to re-speak the target letter

### Free Typing Mode

- Large canvas area for free typing
- Each character appears with playful animations (pop, wiggle, float)
- Random color palette cycling
- "Random Style" toggle to vary animations every 8-12 characters
- Clear and Undo buttons
- Real-time phonics feedback for each typed character

### Accessibility

- Minimum 56px tap targets for small fingers
- Keyboard navigable
- Respects `prefers-reduced-motion`
- Clear visual feedback
- Audio feedback with mute option

## Browser Support

- Modern browsers with ES2020 support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

### Code Style

- TypeScript strict mode enabled
- ESLint configured
- JSDoc comments for components
- Component-based architecture

### Adding New Features

1. Components are in `src/components/`
2. Utilities in `src/utils/`
3. Styles use Tailwind CSS (config in `tailwind.config.js`)
4. Add new phonics/letters in `src/utils/phonics.ts`

## License

MIT License - feel free to use and modify for your needs!

## Credits

Built with ❤️ for toddlers learning to type and smile!
