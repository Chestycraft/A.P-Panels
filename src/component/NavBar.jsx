import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // check on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex justify-center items-center">
          <ul
            className={`flex flex-row font-medium mt-0 space-x-8 text-sm transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <li>
              <a href="#" className="hover:underline" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
