# Hostinger par Deploy Karne ka Complete Guide

## 🚀 Quick Steps (Urdu/Hindi)

### Step 1: Production Build Banayein

```bash
cd needscosmetic-frontend
npm install
npm run build
```

Yeh command `dist` folder create karega jismein production-ready files hongi.

### Step 2: Environment Variables Setup

`.env.production` file banayein (`.env.production.example` ko copy karke):

```env
VITE_API_URL=https://your-backend-url.com/api
```

**Important:** Build karne se **pehle** `.env.production` file set karein.

### Step 3: Hostinger cPanel mein Files Upload

#### Method 1: File Manager se (Easiest)

1. **Hostinger cPanel** login karein
2. **File Manager** open karein
3. `public_html` folder mein jayein
4. Purane files delete karein (agar koi hain)
5. `dist` folder ki **sari files** select karein:
   - `dist` folder **open** karein
   - **Select All** (Ctrl+A)
   - **Upload** button click karein
   - Ya files ko **drag & drop** karein

**Important:** 
- `dist` folder ko upload mat karein
- `dist` folder ki **andar ki files** directly `public_html` mein upload karein

#### Method 2: FTP se (Faster for large files)

1. **FileZilla** ya koi FTP client install karein
2. Hostinger FTP credentials se connect karein:
   - **Host:** `ftp.yourdomain.com` ya IP address
   - **Username:** cPanel username
   - **Password:** cPanel password
   - **Port:** 21
3. Left side: Local `dist` folder
4. Right side: Remote `public_html` folder
5. `dist` folder ki sari files ko `public_html` mein drag karein

### Step 4: File Structure Check

Upload ke baad `public_html` folder mein yeh structure hona chahiye:

```
public_html/
├── index.html          ← Main HTML file
├── assets/             ← CSS, JS files
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── images/            ← Images folder
│   └── ...
└── .htaccess          ← Apache config (important!)
```

### Step 5: Verify

1. Browser mein apna domain open karein: `https://yourdomain.com`
2. Website load honi chahiye
3. React Router routes check karein (direct URL se page open karein)

## 📝 Important Files

### `.htaccess` File

Yeh file already `public` folder mein hai aur build ke baad automatically `dist` folder mein copy ho jayegi.

Agar website refresh karne par 404 error aaye, to `.htaccess` file check karein.

### Environment Variables

Production ke liye API URL set karein:

```env
# .env.production file
VITE_API_URL=https://api.yourdomain.com/api
```

Ya agar backend same domain par hai:

```env
VITE_API_URL=https://yourdomain.com/api
```

## 🔧 Troubleshooting

### Problem: 404 Error on Page Refresh

**Solution:**
- `.htaccess` file check karein
- File `public_html` folder mein honi chahiye
- Apache `mod_rewrite` enabled hona chahiye (Hostinger mein by default enabled hota hai)

### Problem: API Calls Fail

**Solution:**
- `.env.production` file check karein
- API URL correct hona chahiye
- CORS settings backend mein check karein
- Browser console mein errors check karein

### Problem: Images Not Loading

**Solution:**
- Image paths check karein
- `public/images` folder ki files `dist/images` mein copy honi chahiye
- Relative paths use karein: `/images/filename.jpg`

### Problem: CSS/JS Files Not Loading

**Solution:**
- `dist/assets` folder check karein
- Files properly upload hui hain ya nahi
- Browser console mein errors check karein

## 🔄 Updates Deploy Karne ke Liye

Har baar changes ke baad:

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload:**
   - `dist` folder ki files ko Hostinger `public_html` mein upload karein
   - Purane files ko replace karein

## 📦 Backend Deploy (Agar Backend bhi Hostinger par hai)

Agar backend bhi Hostinger par deploy karna hai:

1. **Subdomain banayein:** `api.yourdomain.com`
2. Backend files ko subdomain ke `public_html` mein upload karein
3. Frontend `.env.production` mein:
   ```env
   VITE_API_URL=https://api.yourdomain.com/api
   ```

## ✅ Checklist

Deploy karne se pehle:

- [ ] `.env.production` file create ki aur API URL set kiya
- [ ] `npm run build` successfully run hua
- [ ] `dist` folder mein files properly generate hui
- [ ] `.htaccess` file `dist` folder mein hai
- [ ] Hostinger `public_html` folder ready hai
- [ ] Files upload kar di hain
- [ ] Website load ho rahi hai
- [ ] API calls working hain
- [ ] Images load ho rahi hain

## 🆘 Help

Agar koi problem aaye:

1. Browser **Console** check karein (F12)
2. **Network** tab mein failed requests check karein
3. Hostinger **Error Logs** check karein (cPanel mein)
4. `.htaccess` file verify karein

---

**Note:** Pehli baar deploy karne ke baad website ko properly test karein. Har route check karein aur API calls verify karein.
