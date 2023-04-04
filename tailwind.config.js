module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          750: '#2A384B', 
        }
      },
      screens: {
        xs: "420px",
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      }
    },
  },
  plugins: [
    
  ],
}