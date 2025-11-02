# Troubleshooting GitHub Pages Deployment

## Check the Error Logs

1. Go to: https://github.com/laxpayne7/games-for-carissa/actions
2. Click on the failed workflow run
3. Click on the "build" job that failed
4. Look for the error message

Common issues and fixes:

### Issue 1: Node.js version mismatch
**Error:** "Node version X not found"
**Fix:** Update workflow to use Node.js 18 or 20

### Issue 2: Build script fails
**Error:** "npm run build failed"
**Fix:** Check if `package.json` has correct build script

### Issue 3: Path/base configuration
**Error:** "Cannot find module" or routing issues
**Fix:** Check `vite.config.ts` base path

### Issue 4: Missing dependencies
**Error:** "Cannot find module 'xxx'"
**Fix:** Ensure `package-lock.json` is committed

## Quick Checks

Let me verify our workflow file and config files are correct.
