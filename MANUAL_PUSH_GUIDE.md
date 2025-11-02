# Manual Git Push Guide 📝

## Step-by-Step Instructions

### Step 1: Merge Remote Changes
The repository has some initial commits, so we need to merge them first.

**In WSL Terminal, run:**
```bash
cd /mnt/c/LAXPAYNE7/CODING/OTHERS
git pull origin main --allow-unrelated-histories --no-edit
```

This will merge the remote README with your local code.

### Step 2: Push Using Your Token

**Method A: Using Token in URL (One-time push)**
```bash
cd /mnt/c/LAXPAYNE7/CODING/OTHERS
git push https://YOUR_TOKEN@github.com/laxpayne7/games-for-carissa.git main
```

Replace `YOUR_TOKEN` with your actual GitHub Personal Access Token.

**Method B: Using Credential Helper (Saves for future)**
```bash
cd /mnt/c/LAXPAYNE7/CODING/OTHERS

# Set up credential storage
git config --global credential.helper store

# Push (you'll be prompted once)
git push -u origin main
```

When prompted:
- **Username:** `laxpayne7`
- **Password:** Paste your GitHub Personal Access Token (NOT your GitHub password!)

### Step 3: Verify Push

Check if it worked:
```bash
git log --oneline -5
git remote -v
```

You should see your commits in the log.

### Step 4: Enable GitHub Pages

1. Go to: https://github.com/laxpayne7/games-for-carissa/settings/pages
2. Under "Source", select **"GitHub Actions"**
3. Click **"Save"**
4. Your app will auto-deploy in 1-2 minutes! 🎉

---

## ⚠️ Important Security Note

**Never commit your token to git!** If you accidentally did, you need to:
1. Revoke the token at: https://github.com/settings/tokens
2. Generate a new one
3. Update your local git config

---

## Quick Reference Commands

**Check status:**
```bash
cd /mnt/c/LAXPAYNE7/CODING/OTHERS
git status
```

**Add changes:**
```bash
git add .
```

**Commit:**
```bash
git commit -m "Your change description"
```

**Push:**
```bash
git push
```

**See what's on GitHub:**
```bash
git fetch origin
git log origin/main
```
