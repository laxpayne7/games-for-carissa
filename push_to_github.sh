#!/bin/bash
# Script to push to GitHub
# Usage: Replace YOUR_USERNAME with your GitHub username before running

# Get repository name from user or use default
REPO_NAME=${1:-"type-and-smile"}
GITHUB_USER=${2:-"YOUR_USERNAME"}

echo "🚀 Setting up GitHub remote..."

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git
else
    echo "➕ Adding remote 'origin'..."
    git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git
fi

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code is now on GitHub!"
    echo "📍 View it at: https://github.com/${GITHUB_USER}/${REPO_NAME}"
    echo ""
    echo "🔧 Next steps:"
    echo "1. Go to: https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
    echo "2. Source: Select 'GitHub Actions'"
    echo "3. Save - your app will auto-deploy!"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   - Repository exists on GitHub"
    echo "   - You have access/permissions"
    echo "   - Check the error message above"
fi
