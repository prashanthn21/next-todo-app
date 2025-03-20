# Next.js Dark Mode App with Local Storage

## 🚀 Features
- Next.js App Router (Latest Version)
- Dark Mode Toggle using Context API
- Theme Persistence using Local Storage
- Framer Motion for Animations
- Tailwind CSS for Styling
- App Router Structure (with `layout.tsx`)

## 📂 Folder Structure
```
nextjs-dark-mode-app/
 ├── app/
 │    ├── components/
 │    │    ├── context/
 │    │    │    ├── ThemeContext.tsx  (Handles theme switching)
 │    │    ├── Navbar.tsx  (Includes theme toggle button)
 │    ├── styles/
 │    │    ├── globals.css (Tailwind global styles)
 │    ├── layout.tsx  (Root Layout with ThemeProvider)
 │    ├── page.tsx (Home Page)
 ├── tailwind.config.js (Tailwind Dark Mode Config)
 ├── .gitignore (Ignore unnecessary files)
 ├── package.json (Project Dependencies)
 ├── tsconfig.json (TypeScript Config)
```

## 📌 1. Installation
### Step 1: Clone the Repository
```sh
git clone https://github.com/yourusername/nextjs-dark-mode-app.git
cd nextjs-dark-mode-app
```

### Step 2: Install Dependencies
```sh
npm install
```

## 📌 2. Configure Tailwind CSS
Ensure your `tailwind.config.js` is properly set up:
```js
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

## 📌 3. Implementing Dark Mode with Context API
Create a **Theme Context** inside `components/context/ThemeContext.tsx`.

## 📌 4. Applying Global Styles
Edit **`styles/globals.css`** for Tailwind styles.

## 📌 5. Setting Up Layout (`layout.tsx`)
Wrap your app in `ThemeProvider`.

## 📌 6. Creating Navbar with Theme Toggle
Add **`components/Navbar.tsx`**.

## 📌 7. Home Page
Modify **`page.tsx`**.

## 📌 8. Running the Project
Run the development server:
```sh
npm run dev
```

## 📌 9. Pushing to GitHub
### Step 1: Initialize Git
```sh
git init
git add .
git commit -m "Initial commit - Next.js Dark Mode App"
```

### Step 2: Create a Repository on GitHub

### Step 3: Add Remote & Push Code
```sh
git remote add origin https://github.com/yourusername/nextjs-dark-mode-app.git
git branch -M main
git push -u origin main
```

## 📌 10. Deploying to Vercel
1. Install Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```
3. Follow the prompts to set up the deployment.

🎉 Now your Next.js Dark Mode App is live! 🚀

