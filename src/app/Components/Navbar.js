import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-lg">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/about" className="hover:text-gray-200">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </li>
        <li>
          <Link href="/api-call/1" className="hover:text-gray-200">API Call</Link>
        </li>
      </ul>
    </nav>
  );
}
