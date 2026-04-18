// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-12 flex items-center justify-center animate-[fadeIn_1s_ease-in-out]">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-light tracking-[0.2em] uppercase mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-16 tracking-widest text-sm font-light uppercase">For print inquiries, assignments, or licensing.</p>

        <form className="space-y-12">
          <div className="relative group">
            <input 
              type="text" 
              id="name"
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs">
              Name
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              id="email"
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs">
              Email
            </label>
          </div>

          <div className="relative group">
            <textarea 
              id="message"
              rows="4"
              className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message" className="absolute left-0 top-3 text-gray-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs">
              Message
            </label>
          </div>

          <button 
            type="submit"
            className="w-full border border-white py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500 mt-8"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}