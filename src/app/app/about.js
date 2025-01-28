import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to our website! We specialize in building modern applications using cutting-edge technologies like Next.js.
        </p>
      </div>
    </>
  );
}
