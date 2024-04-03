import { Inter } from 'next/font/google';
import Navigation from './components/navigation';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: {
    template: `%s | Next Movies`,
    default: 'Next Movies',
  },
  description: 'about',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
