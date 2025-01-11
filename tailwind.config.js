/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:  {
        redhat: ["Red Hat Display"]
      }
    },
  },
  plugins: [],plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}

