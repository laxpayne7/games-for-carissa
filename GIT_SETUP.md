# Git & GitHub Setup Guide

## Step 1: Configure Git (if needed)

If you haven't configured git with your name and email, run these commands:

```bash
wsl bash -c "git config --global user.name 'Your Name'"
wsl bash -c "git config --global user.email 'your.email@example.com'"
```

## Step 2: Initialize Repository ✅

Already done! Git repository has been initialized.

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `type-and-smile` (or any name you prefer)
3. Description: "A delightful typing game for toddlers"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 4: Connect and Push

After creating the GitHub repo, you'll see instructions. We'll use these commands:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Type & Smile app"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/type-and-smile.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Select **"GitHub Actions"** (the workflow file is already set up!)
4. Save

The app will auto-deploy on every push to `main` branch!

## Future Updates

To commit and push changes:

```bash
# See what changed
git status

# Add specific files or all files
git add .
# OR
git add src/components/SomeComponent.tsx

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push
```
