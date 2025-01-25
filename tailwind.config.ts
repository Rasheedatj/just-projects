import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F8FF',
          100: '#D1E0FF',
          200: '#B2CCFF',
          300: '#84ADFF',
          400: '#528BFF',
          500: '#2970FF',
          600: '#155EEF',
          700: '#004EEB',
          800: '#0040C1',
          900: '#00359E',
        },
        neutral: {
          50: '#FCFCFD',
          100: '#F9FAFB',
          200: '#F2F4F7',
          300: '#EAECF0',
          400: '#D0D5DD',
          500: '#98A2B3',
          600: '#667085',
          700: '#475467',
          800: '#344054',
          900: '#1D2939',
        },
        accent: {
          100: '#EFF4FF',
        },
        black: {
          DEFAULT: '#000000',
        },
        white: {
          DEFAULT: '#FFFFFF',
          translucent: '#FFFFFF4D',
        },
      },
    },
  },
  plugins: [],
};
export default config;
