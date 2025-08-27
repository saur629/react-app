import Card from "../Card";

export default function Contact() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=2')" }}
    >
        <Card content={
            <>
            <h2 className="text-4xl font-bold mb-6 text-red-400">Contact Us</h2>
        
        <p className="text-lg text-gray-200 mb-6">
          We'd love to hear from you!  
          Reach out to us using the details below.
        </p>

        <div className="space-y-4 text-gray-200">
          <p>
            📍 <span className="font-semibold">Address:</span>  
            123 Web Street, React City, India
          </p>
          <p>
            📧 <span className="font-semibold">Email:</span>  
            contact@mywebsite.com
          </p>
          <p>
            📞 <span className="font-semibold">Phone:</span>  
            +91 98765 43210
          </p>
        </div>

        <div className="mt-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
            </>
        }>
      {/* <div className="bg-black/70 p-10 rounded-2xl max-w-2xl w-full text-center shadow-lg"> */}
        
      {/* </div> */}
      </Card>
    </div>
  );
}