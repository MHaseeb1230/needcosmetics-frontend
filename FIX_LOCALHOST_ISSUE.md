# Localhost Issue Fix - Frontend Vercel Backend se Connect Nahi Ho Raha

## 🔍 Problem

Frontend se API calls `http://localhost:5000/api` par ja rahi hain instead of Vercel backend URL.

## ✅ Solution

### Step 1: Environment Files Check

Dono files create kar di hain:
- `.env` - Development ke liye (local testing)
- `.env.production` - Production build ke liye

### Step 2: Development Mode (npm run dev)

Agar aap `npm run dev` se run kar rahe hain:

1. **`.env` file** already create kar di hai with Vercel URL
2. **Server restart** karein:
   ```bash
   # Stop current server (Ctrl+C)
   # Phir restart:
   npm run dev
   ```

### Step 3: Production Build (Hostinger ke liye)

Agar Hostinger par deploy karna hai:

1. **Rebuild karein:**
   ```bash
   npm run build
   ```

2. **Verify karein** ke `.env.production` file mein correct URL hai:
   ```
   VITE_API_URL=https://needcosmetics-backend.vercel.app/api
   ```

3. **Dist folder** Hostinger par upload karein

### Step 4: Browser Console Check

Website open karein → **F12** → **Console**:

```javascript
// API URL check karein
console.log('API URL:', import.meta.env.VITE_API_URL);
```

Expected Output:
- Development: `https://needcosmetics-backend.vercel.app/api`
- Production: `https://needcosmetics-backend.vercel.app/api`

## 🐛 Agar Abhi Bhi Localhost Ja Raha Hai

### Option 1: Hardcode (Temporary Fix)

`src/config/api.js` mein temporarily hardcode karein:

```javascript
const API_BASE_URL = 'https://needcosmetics-backend.vercel.app/api';
```

**Note:** Yeh temporary fix hai. Proper solution environment variables use karna hai.

### Option 2: Clear Cache

1. Browser cache clear karein
2. Hard refresh: `Ctrl+Shift+R` (Windows) ya `Cmd+Shift+R` (Mac)
3. Development server restart karein

### Option 3: Check Build Output

Build ke baad `dist` folder mein check karein ke environment variable properly injected hui hai ya nahi:

```bash
# Build output check karein
npm run build
# dist/assets/index-*.js file mein search karein: "needcosmetics-backend"
```

## ✅ Quick Fix Commands

```bash
# 1. Stop current dev server
# Ctrl+C

# 2. Clear node_modules cache (optional)
rm -rf node_modules/.vite

# 3. Restart dev server
npm run dev

# Ya production build:
npm run build
```

## 🔍 Debugging

Browser Console mein yeh check karein:

```javascript
// Environment check
console.log('Mode:', import.meta.env.MODE);
console.log('Dev:', import.meta.env.DEV);
console.log('Prod:', import.meta.env.PROD);
console.log('API URL:', import.meta.env.VITE_API_URL);
```

Expected:
- `MODE`: "development" ya "production"
- `VITE_API_URL`: "https://needcosmetics-backend.vercel.app/api"

---

**Important:** Agar development mode mein ho, to `.env` file use hogi. Production build ke liye `.env.production` use hogi.
