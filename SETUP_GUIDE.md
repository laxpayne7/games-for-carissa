# Setup Guide - Type & Smile

## Step 1: Install Node.js and npm

### For Windows:

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Click the **LTS (Long-Term Support)** version button (recommended)
   - Download the Windows Installer (.msi file)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - ✅ **Important:** Make sure "Add to PATH" is checked during installation
   - Accept default settings and click "Install"

3. **Restart Your Terminal/IDE:**
   - Close and reopen your terminal/PowerShell
   - Or restart Cursor/VS Code if you're using it

4. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like:
   ```
   v20.11.0
   10.2.4
   ```

---

## Step 2: Install Project Dependencies

Once Node.js is installed and verified, run:

```bash
npm install
```

This will:
- Read `package.json`
- Download all required packages (React, Vite, Tailwind, etc.)
- Install them in a `node_modules` folder
- Takes 2-5 minutes depending on your internet speed

**What you'll see:**
```
npm WARN deprecated ...
added 234 packages, and audited 235 packages in 45s
```

---

## Step 3: Start Development Server

After installation completes, run:

```bash
npm run dev
```

**What you'll see:**
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to: **http://localhost:5173/**

You should see the "Type & Smile" app running! 🎉

---

## Troubleshooting

### If `npm` command not found after installing Node.js:
1. Restart your terminal/IDE completely
2. Check if Node.js is in PATH:
   ```powershell
   $env:PATH
   ```
3. Manually add to PATH if needed:
   - Right-click "This PC" → Properties → Advanced System Settings
   - Environment Variables → System Variables → Path → Edit
   - Add: `C:\Program Files\nodejs\`

### If installation fails:
- Make sure you have internet connection
- Try running PowerShell as Administrator
- Clear npm cache: `npm cache clean --force`
- Try deleting `node_modules` and `package-lock.json` (if they exist) and run `npm install` again

---

## Next Steps

After the app is running:
- See README.md for build and deployment instructions
- Generate PWA icons (pwa-192x192.png and pwa-512x512.png) for full PWA support
