// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-4 mt-10 mt-auto sticky bottom-0">
//       © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 via-orange-300 to-yellow-400 text-gray-900 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left text */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </p>
        
        {/* Center navigation links */}
        <nav className="flex space-x-6 text-sm md:text-base font-semibold">
          <a href="/" className="hover:text-gray-800 transition">Home</a>
          <a href="/about" className="hover:text-gray-800 transition">About</a>
          <a href="/contact" className="hover:text-gray-800 transition">Contact</a>
          <a href="/blog" className="hover:text-gray-800 transition">Blog</a>
        </nav>
        
        {/* Right social icons */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition" aria-label="Twitter">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.68 4.13A12.84 12.84 0 0 1 1.67 2.15 4.51 4.51 0 0 0 3 9.67a4.47 4.47 0 0 1-2.05-.57v.06a4.51 4.51 0 0 0 3.63 4.43 4.5 4.5 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.13A9.04 9.04 0 0 1 0 18.54 12.74 12.74 0 0 0 6.92 20c8.3 0 12.85-6.9 12.85-12.85 0-.2 0-.41-.01-.61A9.22 9.22 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition" aria-label="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35A1.324 1.324 0 0 0 0 1.325v21.351A1.324 1.324 0 0 0 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243h-1.922c-1.508 0-1.8.717-1.8 1.77v2.317h3.598l-.468 3.622h-3.13V24h6.128A1.324 1.324 0 0 0 24 22.676V1.325A1.324 1.324 0 0 0 22.675 0z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452H16.9v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.36V9h3.42v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.368 4.267 5.451v6.292zM5.337 7.433a1.985 1.985 0 1 1 .002-3.97 1.985 1.985 0 0 1-.002 3.97zm1.702 13.02H3.63V9h3.408v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.267V1.732C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
