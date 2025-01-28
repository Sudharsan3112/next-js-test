import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample app with About, Contact, and API Call pages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
