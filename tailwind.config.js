/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Match the fontFamily names from app.json
        roboto: ["Roboto"],
        display: ["Display"],
      },
      colors: {
        // Custom FlexForge teal color palette based on #258277
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#258277', // Your core teal color
          600: '#1e6b61',
          700: '#1a5650',
          800: '#164741',
          900: '#134e4a',
          950: '#0f3d39',
        },
        // Specific FlexForge app colors
        flexforge: {
          teal: '#258277',        // Your core color
          'teal-light': '#2dd4bf', // Lighter variant
          'teal-dark': '#1e6b61',  // Darker variant
          black: '#000000',        // Pure black
          white: '#ffffff',        // Pure white
        },
        // Simple color system - only what you need
        background: {
          primary: '#ffffff',      // White background
          secondary: '#000000',    // Black background  
          accent: '#258277',       // Teal accent
        },
        text: {
          primary: '#000000',      // Black text
          secondary: '#258277',    // Teal text
          light: '#ffffff',        // White text
        }
      },
    },
  },
  plugins: [],
}