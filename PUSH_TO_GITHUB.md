# Instructions to Push to GitHub

## Step 1: Install Git (if not already installed)
Download and install Git from: https://git-scm.com/download/win

## Step 2: Open Git Bash or PowerShell in your project folder
Navigate to: `C:\Users\SHREYA CHOPRA\Downloads\coco-and-coir-bloom-main\coco-and-coir-bloom-main`

## Step 3: Run these commands in order:

```bash
# Initialize git repository (if not already initialized)
git init

# Add the remote repository
git remote add origin https://github.com/shreyachopra1308/test2.git

# Add all files
git add .

# Commit your changes
git commit -m "Enhanced landing page and header with modern animations and effects"

# Push to GitHub (use main if master doesn't work)
git push -u origin main
```

## Alternative: If the repository already exists on GitHub
If you get an error that the remote already exists, use:
```bash
git remote set-url origin https://github.com/shreyachopra1308/test2.git
```

## If you need to force push (be careful with this):
```bash
git push -u origin main --force
```

## Note:
- If you're asked for credentials, use a Personal Access Token instead of your password
- You can create a token at: https://github.com/settings/tokens

