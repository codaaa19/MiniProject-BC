import '../styles/globals.css';
import { ReactNode } from 'react';
import MyNavbar from '../component/nav';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <MyNavbar />
        <main className="container mx-auto mt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
