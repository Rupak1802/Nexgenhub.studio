# Deploying to Render

## Quick Deploy Steps

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add Render deployment config"
   git push origin main
   ```

2. **Go to Render Dashboard:**
   - Visit https://dashboard.render.com/
   - Sign in with your GitHub account

3. **Create New Static Site:**
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub repository: `https://github.com/Rupak1802/Nexgenhub.studio.git`

4. **Configure the deployment:**
   - **Name:** nexgenhub-studio (or your preferred name)
   - **Branch:** main
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - Click "Create Static Site"

5. **Wait for deployment:**
   - Render will automatically build and deploy your site
   - You'll get a URL like: `https://nexgenhub-studio.onrender.com`

## Alternative: Using render.yaml (Blueprint)

Since we've included a `render.yaml` file, you can also:

1. Go to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect the `render.yaml` and configure everything

## Environment Variables (if needed)

If you need to add environment variables (like API keys):
- Go to your site's dashboard on Render
- Navigate to "Environment" tab
- Add your variables with `VITE_` prefix (e.g., `VITE_API_KEY`)

## Custom Domain (Optional)

To add a custom domain:
1. Go to your site's "Settings" on Render
2. Scroll to "Custom Domain"
3. Add your domain and follow DNS configuration instructions

## Troubleshooting

- **Build fails:** Check the build logs in Render dashboard
- **404 on routes:** The `_redirects` file handles SPA routing
- **Images not loading:** Ensure all paths use `/` prefix (not `/public/`)
