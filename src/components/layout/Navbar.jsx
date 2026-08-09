import { motion } from "framer-motion";
import { slideDown } from "../../lib/animations";

function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-[#030007]/80 backdrop-blur-md border-b border-purple-900/20"
    >
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-purple-300"
        >
          Tiara
        </a>

        <div className="items-center hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition-colors duration-300 hover:text-purple-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
