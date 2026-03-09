# Security Guide - IMPORTANT

## ⚠️ NEVER COMMIT THESE FILES TO GITHUB:
- `.env`
- `.env.production`
- `db.js` (if it contains hardcoded credentials)
- Any file with passwords or API keys

## ✅ Already Protected:
Your `.gitignore` file now blocks:
- `.env`
- `.env.production`
- `db.js`

## Before Pushing to GitHub:

1. **Check what will be committed:**
```bash
git status
```

2. **If you see .env or db.js, DON'T PUSH!**

3. **Remove from git if already tracked:**
```bash
git rm --cached server/.env
git rm --cached db.js
git commit -m "Remove sensitive files"
```

## For Deployment:

**Add environment variables directly in hosting platform:**
- Render.com: Dashboard → Environment → Add Variable
- Vercel: Settings → Environment Variables
- Railway: Variables tab

**Never put credentials in code files!**

## MongoDB Security:

1. Go to MongoDB Atlas
2. Database Access → Edit User
3. Change password to a new secure one
4. Update only in:
   - Local `.env` file (not committed)
   - Hosting platform environment variables

## If Credentials Were Exposed:

1. **Immediately** change MongoDB password
2. Rotate JWT_SECRET
3. Update all API keys
4. Check GitHub for exposed secrets: Settings → Security → Secret scanning
