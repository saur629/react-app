// import { createContext } from "react";
//
import { createContext } from "react";
import Card from "../Card";
import { Name } from "./context"; // Ensure this is: export const Name = createContext();

const nameFirst = "tttt";

export default function Home() {
  return (
    <Name.Provider value={nameFirst}>
      <div className="bg-gray-900 text-white">
        {/* 1. Hero Section with Overlay and Explore Button */}
        <section
          className="h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://picsum.photos/1920/1080?random=2')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 leading-tight drop-shadow-lg">
              Build Bold. Launch Smart.
              <br /> Scale Without Limits.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Empowering developers and creators to bring their ideas to life
              with blazing fast UI, reusable architecture, and modern design
              principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#facts"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
              >
                Explore Features
              </a>
              <a
                href="/contact"
                className="border-2 border-yellow-500 text-yellow-400 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* 2. Informative Section (About, Features, etc.) */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-16 space-y-16">
          {/* About */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              About Us
            </h2>
            <p className="text-lg text-gray-300">
              Our platform is built for developers, creatives, and businesses
              who want a modern, responsive, and fast digital experience.
              Whether you're building a portfolio, launching a product, or
              managing a team — we're here to help you grow.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>🚀 Fast, mobile-friendly UI</li>
              <li>📊 Reusable components & form handling</li>
              <li>🔒 Secure and scalable codebase</li>
              <li>🧠 Clean, modular architecture using React</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              What People Say
            </h2>
            <div className="bg-black/60 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-300">
                "This website is incredibly smooth and intuitive. I loved how
                easy it was to use!"
              </p>
              <p className="mt-2 text-right font-semibold text-yellow-300">
                – A Happy User
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Ready to explore?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* 3. Card Section */}
        <section className="flex justify-center py-10">
          <Card content={"🔥 This is a reusable card component!"} />
        </section>

        {/* 4. Final Banner */}
        <section
          className="h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://picsum.photos/1920/1080?random=3')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

          {/* Blog Content */}
          <div className="relative z-10 px-6 max-w-6xl w-full text-white text-center">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-10">
              ✍️ Latest Insights & Tips
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Blog Card 1 */}
              <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  React Component Tricks
                </h3>
                <p className="text-gray-200 text-sm">
                  Learn how to build highly reusable and dynamic components for
                  faster development.
                </p>
              </div>

              {/* Blog Card 2 */}
              <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  Tailwind CSS Magic ✨
                </h3>
                <p className="text-gray-200 text-sm">
                  Discover the power of utility-first styling with Tailwind to
                  build elegant UIs faster.
                </p>
              </div>

              {/* Blog Card 3 */}
              <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  Best Practices for Scaling
                </h3>
                <p className="text-gray-200 text-sm">
                  Tips on how to structure your React project for team
                  collaboration and future growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Name.Provider>
  );
}
