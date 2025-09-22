import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

// Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // We'll use this as a CSS variable
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Include the weights we'll need
  display: 'swap',
  variable: '--font-merriweather', // CSS variable for headings
});

export const metadata = {
  title: 'Railton Foundation | Empowering Community in Swellendam',
  description: 'A non-profit supporting youth, education, and community welfare in Railton.',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Apply the font variables to the entire application */}
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}