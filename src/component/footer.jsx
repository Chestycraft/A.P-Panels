import { Phone, Mail, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactLinks = [
    {
      icon: <Phone size={18} />,
      href: "tel:09238578763",
      label: "Call Us",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:info@appanels.com",
      label: "Email",
    },
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com/appanels",
      label: "Facebook",
    },
    {
      icon: <MessageCircle size={18} />,
      href: "https://wa.me/09238578763",
      label: "WhatsApp",
    },
  ]

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="A.P Panels Logo" className="w-10 h-10" />
              <h3 className="text-xl font-bold text-gray-900">A.P PANELS</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium wall panels for modern interiors. Transform your space with our handcrafted panel collection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Collections
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Products
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact Us</h4>
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.label === "Facebook" ? "_blank" : "_self"}
                  rel={link.label === "Facebook" ? "noopener noreferrer" : ""}
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 text-sm transition-colors group"
                >
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">{link.icon}</div>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-8 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} A.P PANELS. This is a practice project for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
