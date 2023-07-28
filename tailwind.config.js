module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: 'rgb(172, 56, 27)',
        // Add other custom colors here if needed
      },
      screens: {
        // Your existing screen breakpoint configurations
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1500px',
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};
