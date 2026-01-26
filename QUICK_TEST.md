# Quick Backend Connection Test

## ✅ Step 1: Environment Variable Set

`.env.production` file create kar di hai with Vercel backend URL:
```
VITE_API_URL=https://needcosmetics-backend.vercel.app/api
```

## ✅ Step 2: Frontend Rebuild

```bash
cd needscosmetic-frontend
npm run build
```

Phir Hostinger par updated `dist` folder upload karein.

## ✅ Step 3: Quick Test (Browser Console)

Website open karein aur **F12** → **Console** mein yeh run karein:

```javascript
// Backend health check
fetch('https://needcosmetics-backend.vercel.app/api/health')
  .then(r => r.json())
  .then(d => console.log('✅ Backend Working:', d))
  .catch(e => console.error('❌ Error:', e));

// Products test
fetch('https://needcosmetics-backend.vercel.app/api/products')
  .then(r => r.json())
  .then(d => console.log('✅ Products:', d))
  .catch(e => console.error('❌ Error:', e));
```

## ✅ Step 4: Network Tab Check

1. **F12** → **Network** tab
2. Website use karein (products load karein)
3. Filter: `vercel` ya `api` type karein
4. Requests check karein:
   - ✅ **200** = Success
   - ❌ **404/500** = Error

## 🎯 Expected Results

Agar sab sahi hai:
- ✅ Products load ho jayenge
- ✅ Add to Cart kaam karega
- ✅ Network tab mein successful requests dikhenge
