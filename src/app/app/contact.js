import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h1>
        <form className="bg-white p-6 rounded shadow-lg w-96">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
        </form>
      </div>
    </>
  );
}
