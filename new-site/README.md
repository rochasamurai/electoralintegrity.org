# ELIS SLR Agent - New Website (Preview)

## 📁 Deployment to Preview

This folder contains the new ELIS SLR Agent crowdfunding website for preview/testing.

### Step 1: Copy folder to repository

```powershell
cd C:\Users\carlo\electoralintegrity.org

# Copy the new-site folder from downloads
Copy-Item -Path "C:\path\to\downloads\new-site" -Destination ".\" -Recurse
```

### Step 2: Commit and push

```powershell
git add new-site/
git commit -m "Add new ELIS website for preview"
git push origin main
```

### Step 3: Preview the site

After 1-2 minutes, visit:
**https://electoralintegrity.org/new-site**

### Step 4: Once validated, move to production

If everything looks good, move files to root:

```powershell
# Backup current site (optional)
New-Item -ItemType Directory -Name "old-site" -Force
Move-Item index.html old-site/ -Force
Move-Item *.css old-site/ -Force
Move-Item *.js old-site/ -Force

# Move new site to root
Move-Item new-site/index.html .
Move-Item new-site/styles.css .
Move-Item new-site/script.js .

# Commit
git add .
git commit -m "Deploy new ELIS website to production"
git push origin main
```

## ✨ What's Included

- Professional crowdfunding design
- Midnight blue & gold colors from your logo
- Fully responsive
- Smooth animations
- SEO optimized
- No Instituto Voto Legal references

## 🎨 Design Features

- **Hero Section**: Clear value proposition with CTAs
- **About**: What is ELIS SLR Agent
- **Project**: Details, stats, and process
- **Impact**: Research benefits
- **Support**: Crowdfunding section
- **Footer**: Professional branding

## 📧 Contact

Email shown: contact@electoralintegrity.org
(Update in index.html if needed)
