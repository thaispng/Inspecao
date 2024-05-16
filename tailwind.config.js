/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/home/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",


  ],
  theme: {
    extend: {
      colors: {
        laranja:{
          'laranja-primary': '#FF7A00',
          'laranja-secondary': '#FFA500',
        },
        basic:{
          'transparente': 'transparent',
          'branco': '#FFFFFF',
          'preto': '#000000',
          'cinza-claro': '#F5F5F5',
          'cinza-medio': '#E0E0E0',
          'vermelho': '#BF2D2D',
        },
        alert:{
          'vermelho': '#BF2D2D',
          'amarelo': '#FFD700',
          'verde': '#008000',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
