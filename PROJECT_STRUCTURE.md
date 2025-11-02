# Project Structure

```
type-and-smile/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg                # App icon (SVG)
│   └── robots.txt                 # Robots.txt for web crawlers
├── src/
│   ├── components/
│   │   ├── BigKey.tsx             # Large bubble button for letter selection
│   │   ├── ConfettiStars.tsx      # Animated confetti stars on success
│   │   ├── ControlBar.tsx         # Difficulty, mute, repeat controls
│   │   ├── FindLetterGame.tsx     # Main "Find the Letter" game component
│   │   ├── FreeTypingMode.tsx     # Free typing creative mode
│   │   ├── LetterCard.tsx         # Large letter display card
│   │   └── ModeToggle.tsx          # Mode switcher (Find/Typing)
│   ├── styles/
│   │   └── index.css              # Global styles + Tailwind imports
│   ├── utils/
│   │   ├── audio.ts               # Speech synthesis & sound effects
│   │   ├── phonics.ts             # Phonics mappings A-Z and 0-9
│   │   └── storage.ts              # localStorage persistence utilities
│   ├── App.tsx                    # Main app component
│   └── main.tsx                   # React entry point
├── .eslintrc.cjs                  # ESLint configuration
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.node.json             # TypeScript config for Node tools
└── vite.config.ts                 # Vite + PWA configuration
```

## File Count Summary

- **React Components**: 7 components
- **Utilities**: 3 utility modules
- **Configuration**: 8 config files
- **Total Source Files**: 17 files

## Key Files to Note

### PWA Icons (Need to be Generated)
You'll need to create these icons and place them in `public/`:
- `pwa-192x192.png` (192x192 pixels)
- `pwa-512x512.png` (512x512 pixels)

Use an online tool like [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator) or create them manually with your app logo.
