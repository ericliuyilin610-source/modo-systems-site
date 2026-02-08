import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.06), 0 1px 1px rgba(16,24,40,0.04)'
      },
      borderRadius: {
        card: '16px'
      }
    }
  },
  plugins: []
};

export default config;
