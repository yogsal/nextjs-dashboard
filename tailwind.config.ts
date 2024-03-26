import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
  darkMode: 'class',
};

export default config;
