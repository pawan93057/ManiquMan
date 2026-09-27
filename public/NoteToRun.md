# NoteToRun.md

# Manique Man --- Development & Deployment Notes

This file contains the steps to run, test, build, commit, and deploy the
React application.

------------------------------------------------------------------------

## 1. Start the React Application

Open the project folder in VS Code.

Install dependencies if required:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Then open the local URL shown by Vite, usually:

``` text
http://localhost:5173/
```

Use development mode while making changes.

------------------------------------------------------------------------

## 2. Make Your Changes

Edit the required files in VS Code.

After making changes:

``` bash
git status
```

This shows which files have been modified.

------------------------------------------------------------------------

## 3. Test the Production Build

Before pushing changes to GitHub, always test the production build.

### Build

``` bash
npm run build
```

A successful build should create/update:

``` text
dist/
```

### Preview the Production Build

``` bash
npm run preview
```

Open the preview URL shown in the terminal and test the website.

### Important

The development server (`npm run dev`) and production build can behave
differently.

So test:

``` text
npm run build
npm run preview
```

before deploying important changes.

------------------------------------------------------------------------

## 4. Check Git Status

After testing:

``` bash
git status
```

Review the list of changed/untracked files.

Make sure you are not accidentally committing files that should not be
tracked, such as:

``` text
node_modules/
.env
```

The `dist/` folder should also be handled according to the Netlify/Git
setup for this project.

------------------------------------------------------------------------

## 5. Add Changes to Git

Add all intended changes:

``` bash
git add .
```

Check again:

``` bash
git status
```

Make sure the files shown are the files you actually want to commit.

------------------------------------------------------------------------

## 6. Commit the Changes

Create a meaningful commit message.

Example:

``` bash
git commit -m "Fix React routing and Meta legal pages"
```

Other examples:

``` bash
git commit -m "Update homepage design"
```

``` bash
git commit -m "Add privacy policy and data deletion pages"
```

``` bash
git commit -m "Update header and footer navigation"
```

------------------------------------------------------------------------

## 7. Push Changes to GitHub

Push the commit:

``` bash
git push
```

If the branch is not configured for upstream tracking, Git may ask you
to use a command such as:

``` bash
git push -u origin main
```

Use the branch name that your repository actually uses.

------------------------------------------------------------------------

## 8. Netlify Automatic Deployment

The GitHub repository is connected to Netlify.

After:

``` bash
git push
```

Netlify should automatically detect the new commit and start a
deployment.

The normal flow is:

``` text
VS Code
   ↓
Edit files
   ↓
npm run build
   ↓
npm run preview
   ↓
git status
   ↓
git add .
   ↓
git status
   ↓
git commit -m "Describe your changes"
   ↓
git push
   ↓
GitHub
   ↓
Netlify automatically deploys
```

After Netlify finishes deploying, open the live website and test it.

------------------------------------------------------------------------

# 9. Quick Deployment Workflow

For normal changes, use this short workflow:

``` bash
npm run build
npm run preview
```

Test the website.

Then:

``` bash
git status
git add .
git status
git commit -m "Describe your changes"
git push
```

Wait for Netlify to finish the deployment.

Then test the live website.

------------------------------------------------------------------------

# 10. Recommended Full Workflow

Use this whenever you make a larger change:

### Step 1 --- Start development server

``` bash
npm run dev
```

### Step 2 --- Make changes

Edit the React files.

### Step 3 --- Test locally

Check the application in the browser.

### Step 4 --- Build production version

``` bash
npm run build
```

### Step 5 --- Preview production version

``` bash
npm run preview
```

### Step 6 --- Check Git

``` bash
git status
```

### Step 7 --- Stage changes

``` bash
git add .
```

### Step 8 --- Check staged changes

``` bash
git status
```

### Step 9 --- Commit

``` bash
git commit -m "Describe your changes"
```

### Step 10 --- Push

``` bash
git push
```

### Step 11 --- Wait for Netlify

Netlify automatically deploys the latest GitHub commit.

### Step 12 --- Test the live website

Open the Netlify website and verify the changes.

------------------------------------------------------------------------

# 11. If Netlify Does Not Deploy

Check these in order:

1.  Confirm that `git push` completed successfully.
2.  Open the GitHub repository and confirm the latest commit is there.
3.  Open Netlify and check the Deploys section.
4.  Check whether the deployment failed.
5.  Open the Netlify deploy log and check the error.
6.  Confirm the Netlify build command and publish directory match the
    project configuration.

For a typical Vite React project, the build command is commonly:

``` bash
npm run build
```

and the generated production folder is:

``` text
dist
```

------------------------------------------------------------------------

# 12. Important React Routing Note

If the website uses React Router and users can directly open URLs such
as:

``` text
/privacy-policy
/terms-of-service
/data-deletion
```

Netlify needs to serve the React application's entry point for those
routes.

This project contains:

``` text
public/_redirects
```

The `_redirects` file should contain:

``` text
/* /index.html 200
```

This helps prevent direct-route 404 errors on Netlify for a single-page
React application.

------------------------------------------------------------------------

# 13. Before Final Deployment Checklist

Check:

-   [ ] Website works with `npm run dev`
-   [ ] All required pages open
-   [ ] Header works on every page
-   [ ] Footer works on every page
-   [ ] Navigation links work
-   [ ] Invalid routes show the default/Not Found page
-   [ ] Privacy Policy page works
-   [ ] Terms of Service page works
-   [ ] Data Deletion page works
-   [ ] `npm run build` succeeds
-   [ ] `npm run preview` works
-   [ ] `git status` reviewed
-   [ ] Changes added with `git add .`
-   [ ] Correct commit message used
-   [ ] `git push` completed
-   [ ] GitHub contains the latest commit
-   [ ] Netlify deployment completed
-   [ ] Live website tested

------------------------------------------------------------------------

# 14. One-Line Reminder

When you forget the deployment process:

``` text
Edit → Build → Preview → git status → git add . → git status → git commit → git push → Netlify deploy → Test live website
```
