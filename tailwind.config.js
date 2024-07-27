export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(to right, rgba(13, 33, 61, 0) 0%, rgba(13, 33, 61, 1) 15%, rgba(13, 33, 61 1) 85%, rgba(13, 33, 61, 0) 100%)',
      },
    },
  },
  plugins: [],
}