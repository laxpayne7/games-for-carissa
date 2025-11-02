#!/bin/bash
# Easy push script - reads token from .github_token file

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOKEN_FILE="$SCRIPT_DIR/.github_token"

# Check if token file exists
if [ ! -f "$TOKEN_FILE" ]; then
    echo "❌ Error: Token file not found!"
    echo "📝 Create a file named '.github_token' in the project root"
    echo "   Add your GitHub Personal Access Token to it (one line, no quotes)"
    echo ""
    echo "Example:"
    echo "  echo 'ghp_your_token_here' > .github_token"
    exit 1
fi

# Read token from file (strip whitespace)
TOKEN=$(cat "$TOKEN_FILE" | tr -d '[:space:]')

# Check if token is empty or placeholder
if [ -z "$TOKEN" ] || [[ "$TOKEN" == *"xxxxxxxx"* ]] || [[ "$TOKEN" == *"YOUR_TOKEN"* ]]; then
    echo "❌ Error: Token file is empty or contains placeholder!"
    echo "📝 Edit '.github_token' and add your actual GitHub token"
    exit 1
fi

# Check if we're in a git repo
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository!"
    exit 1
fi

# Get remote URL
REMOTE_URL=$(git remote get-url origin 2>/dev/null)

if [ -z "$REMOTE_URL" ]; then
    echo "❌ Error: No remote 'origin' found!"
    exit 1
fi

# Extract repo path from remote URL
if [[ "$REMOTE_URL" == *"github.com"* ]]; then
    # Convert SSH to HTTPS or extract from HTTPS
    if [[ "$REMOTE_URL" == git@* ]]; then
        REPO=$(echo "$REMOTE_URL" | sed 's/git@github.com://' | sed 's/\.git$//')
        PUSH_URL="https://${TOKEN}@github.com/${REPO}.git"
    else
        # Already HTTPS, inject token
        PUSH_URL=$(echo "$REMOTE_URL" | sed "s|https://|https://${TOKEN}@|")
    fi
else
    echo "❌ Error: Remote is not a GitHub repository"
    exit 1
fi

echo "🚀 Pushing to GitHub..."
echo "📍 Repository: $(echo $REMOTE_URL | sed 's|.*github.com/||' | sed 's|\.git$||')"
echo ""

# Push to main branch
git push "$PUSH_URL" main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push successful!"
else
    echo ""
    echo "❌ Push failed. Check the error above."
    exit 1
fi
