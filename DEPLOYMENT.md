# Hostinger Deployment Guide

## Step 1: Build Production Version

Local machine par production build banayein:

```bash
cd needscosmetic-frontend
npm install
npm run build
```

Yeh `dist` folder create karega jo production-ready files hain.

## Step 2: Environment Variables Setup

Production ke liye API URL set karein. `.env.production` file banayein:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

Ya agar backend bhi Hostinger par hai, to:

```env
VITE_API_URL=https://api.yourdomain.com/api
```

**Important:** Build karne se pehle `.env.production` file set karein.

## Step 3: Hostinger cPanel mein Upload

### Option A: File Manager se Upload

1. **Hostinger cPanel** login karein
2. **File Manager** open karein
3. `public_html` folder mein jayein
4. Purane files delete karein (agar koi hain)
5. `dist` folder ki **sari files** upload karein:
   - `dist` folder ki **contents** (files aur folders) ko directly `public_html` mein upload karein
   - `dist` folder ko upload mat karein, sirf uski **andar ki files**

### Option B: FTP se Upload

1. **FileZilla** ya koi FTP client use karein
2. Hostinger FTP credentials se connect karein:
   - Host: `ftp.yourdomain.com` ya IP address
   - Username: cPanel username
   - Password: cPanel password
   - Port: 21
3. `public_html` folder mein jayein
4. `dist` folder ki sari files upload karein

## Step 4: File Structure

Upload ke baad `public_html` folder mein yeh structure hona chahiye:

```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── images/
│   └── ...
└── .htaccess
```

## Step 5: .htaccess File

`.htaccess` file already `public` folder mein hai. Build ke baad yeh automatically `dist` folder mein copy ho jayegi.

Agar nahi hai, to manually `public_html` mein `.htaccess` file upload karein (file already create ki gayi hai).

## Step 6: Verify

1. Browser mein apna domain open karein
2. Website load honi chahiye
3. React Router routes check karein (direct URL se page open karein)

## Important Notes

### Backend API Configuration

Agar backend bhi Hostinger par deploy karna hai:

1. Backend ko subdomain par deploy karein: `api.yourdomain.com`
2. Ya separate folder mein: `yourdomain.com/api`
3. Frontend `.env.production` mein correct API URL set karein

### SSL Certificate

Hostinger automatically SSL provide karta hai. Ensure karein ke:
- HTTPS enabled ho
- Mixed content errors na aayein

### Build Command

Har baar changes ke baad:

```bash
npm run build
```

Phir `dist` folder ki files ko Hostinger par upload karein.

## Troubleshooting

### 404 Error on Refresh

- `.htaccess` file check karein
- Apache `mod_rewrite` enabled hona chahiye (Hostinger mein by default enabled hota hai)

### API Calls Fail

- `.env.production` file check karein
- CORS settings backend mein check karein
- Browser console mein errors check karein

### Images Not Loading

- Image paths check karein
- `public` folder ki images `dist` mein copy honi chahiye
- Relative paths use karein (`/images/...`)

## Quick Deploy Script

Agar aapko baar baar deploy karna hai, to yeh script use kar sakte hain:

```bash
# Build
npm run build

# Then manually upload dist folder contents to Hostinger
```
