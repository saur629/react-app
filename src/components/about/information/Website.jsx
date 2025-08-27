import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Website() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-red-900 text-white px-6 py-4 flex justify-between items-center shadow-lg"
    >
      {/* Logo with bounce */}
      <motion.h1
        whileHover={{ scale: 1.1, rotate: -2 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-2xl font-bold cursor-pointer"
      >
        MyWebsite
      </motion.h1>

      {/* Links */}
      <div className="space-x-6 flex">
        {[
          { to: "/", text: "Home" },
          { to: "/about", text: "About" },
          { to: "/contact", text: "Contact" },
          { to: "/limitedcounter", text: "LimitedCounter"},
        ].map((link, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.2, color: "#f87171" }} // Tailwind red-400
            whileTap={{ scale: 0.9 }}
          >
            <Link to={link.to} className="hover:text-red-400">
              {link.text}
            </Link>
          </motion.div>
        ))}

        {/* Login button with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #f87171" }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/login"
            className="bg-orange-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}