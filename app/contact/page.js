export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-6">
      <section className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-purple-700">Contact Us</h1>
        <p className="mt-4 text-gray-700">Get in touch with us!</p>

        <div className="mt-6 space-y-4 text-left">
          <p><strong>Name:</strong> Pratik</p>
          <p><strong>Address:</strong> 52a4 ,Thimmarayan Street NewPet,Krishnagiri</p>
          <p><strong>Email:</strong> <a href="mailto:pratik.k5828@gmail.com" className="text-purple-600 hover:underline">pratik.k5828@gmail.com</a></p>
        </div>

        <div className="mt-6">
          <a href="mailto:pratik.k5828@gmail.com" className="bg-purple-500 text-white px-4 py-2 rounded shadow-lg hover:bg-purple-600">
            Send a Message
          </a>
        </div>
      </section>
    </main>
  );
}
