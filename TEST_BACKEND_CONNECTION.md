# Frontend se Backend Connection Test Karne ka Guide

## ✅ Step 1: Frontend Environment Variable Update

Frontend `.env.production` file mein Vercel backend URL add karein:

```env
VITE_API_URL=https://your-backend-project.vercel.app/api
```

**Important:** 
- `/api` endpoint automatically add ho jayega
- Agar aapka Vercel URL `https://backend-xyz.vercel.app` hai, to:
  ```env
  VITE_API_URL=https://backend-xyz.vercel.app/api
  ```

## ✅ Step 2: Frontend Rebuild

Environment variable change ke baad frontend rebuild karein:

```bash
cd needscosmetic-frontend
npm run build
```

Phir Hostinger par updated files upload karein.

## ✅ Step 3: Browser mein Test Karein

### Method 1: Browser Console Check

1. **Website open karein** (Hostinger par deployed frontend)
2. **F12** press karein (Developer Tools)
3. **Console** tab open karein
4. **Network** tab open karein

### Method 2: Console mein Direct Test

Browser Console mein yeh commands run karein:

```javascript
// API Base URL check karein
console.log('API URL:', import.meta.env.VITE_API_URL);

// Direct API call test karein
fetch('https://your-backend.vercel.app/api/health')
  .then(res => res.json())
  .then(data => console.log('Backend Response:', data))
  .catch(err => console.error('Error:', err));
```

### Method 3: Network Tab Check

1. **Network** tab open karein
2. **Filter**: `api` ya `vercel` type karein
3. Website use karein (products load karein, cart add karein, etc.)
4. **Network requests** check karein:
   - ✅ **Green (200)**: Success
   - ❌ **Red (404/500)**: Error
   - ⏳ **Pending**: Connection issue

## ✅ Step 4: Specific Endpoints Test Karein

### Test 1: Health Check
Browser mein directly open karein:
```
https://your-backend.vercel.app/api/health
```

Expected Response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "...",
  "environment": "production"
}
```

### Test 2: Products API
```
https://your-backend.vercel.app/api/products
```

Expected Response:
```json
{
  "success": true,
  "data": {
    "products": [...],
    "total": 13
  }
}
```

### Test 3: Categories API
```
https://your-backend.vercel.app/api/products/categories
```

## ✅ Step 5: Frontend Features Test Karein

### Test Checklist:

- [ ] **Home Page**: Products load ho rahe hain?
- [ ] **Product Cards**: Images aur details show ho rahe hain?
- [ ] **Add to Cart**: Cart mein add ho raha hai?
- [ ] **Product Detail Page**: Product details load ho rahe hain?
- [ ] **Categories**: Categories show ho rahi hain?
- [ ] **Search**: Search functionality kaam kar rahi hai?

## 🐛 Common Issues aur Solutions

### Issue 1: CORS Error

**Error:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Solution:**
- Backend `server.js` mein `FRONTEND_URL` check karein
- Vercel Environment Variables mein `FRONTEND_URL` add karein:
  ```
  FRONTEND_URL=https://yourdomain.com
  ```
- Backend redeploy karein

### Issue 2: 404 Not Found

**Error:** `404 Not Found` ya `Cannot GET /api/products`

**Solution:**
- Vercel URL correct hai ya nahi check karein
- `/api` endpoint properly configured hai ya nahi
- `vercel.json` file check karein

### Issue 3: Network Error

**Error:** `Network Error` ya `Failed to fetch`

**Solution:**
- Backend Vercel par properly deployed hai ya nahi
- Backend URL accessible hai ya nahi (browser mein directly open karein)
- Environment variable correct hai ya nahi

### Issue 4: Products Load Nahi Ho Rahe

**Error:** Products show nahi ho rahe, loading stuck hai

**Solution:**
- Browser Console mein errors check karein
- Network tab mein failed requests check karein
- Backend database mein products imported hain ya nahi

## 🔍 Quick Debugging Steps

1. **Browser Console Check:**
   ```javascript
   // Console mein yeh check karein
   console.log('API Base URL:', import.meta.env.VITE_API_URL);
   ```

2. **Network Tab Check:**
   - Failed requests (red) check karein
   - Request URL verify karein
   - Response status check karein

3. **Backend Direct Test:**
   - Vercel URL directly browser mein open karein
   - Health check endpoint test karein

4. **Environment Variables:**
   - Frontend `.env.production` file check karein
   - Vercel Environment Variables check karein

## ✅ Success Indicators

Agar sab kuch sahi hai, to:

- ✅ Browser Console mein koi errors nahi honge
- ✅ Network tab mein API calls **200 (Success)** status dikhayenge
- ✅ Products frontend par load ho jayenge
- ✅ Add to Cart functionality kaam karegi
- ✅ Cart items properly save honge

## 📝 Testing Checklist

- [ ] Frontend `.env.production` mein Vercel backend URL add kiya
- [ ] Frontend rebuild kiya
- [ ] Browser Console mein koi errors nahi
- [ ] Network tab mein API calls successful (200)
- [ ] Products load ho rahe hain
- [ ] Add to Cart kaam kar raha hai
- [ ] Cart items properly save ho rahe hain

---

**Note:** Agar koi issue aaye, to browser Console aur Network tab mein errors check karein. Yeh sabse important debugging tools hain.
