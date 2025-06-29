import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = {
    phone: "09238578763",
    email: "bussinessdevconstruction@gmail.com",
    facebook: "https://www.facebook.com/share/19HuXCQCVR",
    whatsapp: "09238578763", // WhatsApp number without spaces/symbols
  };

  const keys = Object.values(contactInfo)

  const contactItems = [
    {
      icon: <Phone size={24} />,
      label: "Call Us",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-primary-foreground",
         bgColor: "bg-primary hover:bg-green-500 active:bg-green-500",
    },
    {
      icon: <Mail size={24} />,
      label: "Email Us",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
           color: "text-primary-foreground",
         bgColor: "bg-primary hover:bg-red-600 active:bg-red-600"
    },
    {
      icon: <Facebook size={24} />,
      label: "Follow Us",
      value: "Facebook Page",
      href: contactInfo.facebook,
           color: "text-primary-foreground",
         bgColor: "bg-primary hover:bg-blue-500 active:bg-blue-500"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${contactInfo.whatsapp}`,
           color: "text-primary-foreground",
         bgColor: "bg-primary hover:bg-green-500 active:bg-green-500"
    },
  ];

  function handlePopup() {}

  return (
    <section id="contact" className="bg-white py-16 px-4 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your space? Reach out to us today and let’s bring
            your vision to life.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="w-full flex flex-col justify-center lg:w-full max-w-full overflow-hidden">
          <div className="lg:mx-auto md:mx-auto w-full lg:w-auto flex flex-col justify-center group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-lg">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === "Follow Us" ? "_blank" : "_self"}
                rel={item.label === "Follow Us" ? "noopener noreferrer" : ""}
                
              >
                <div
                  className={`w-full lg:w-full p-2 lg:h-12 rounded-xl ${item.bgColor} flex  items-center mb-4 transition-colors duration-300 shadow-gray-400 shadow-lg`}
                >
                  <div
                    className={`${item.color} w-full lg:w-full lg:flex-row flex-row text-center flex gap-3 flex-wrap justify-center lg:justify-normal`}
                  > <span className="self-center mr-3">{item.icon}</span><p className="w-full lg:w-auto break-words whitespace-normal">{keys[index]}</p></div>
                </div>
              </a>
            ))}  
          </div>
       
        </div>
        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            We typically respond within 24 hours. Looking forward to hearing
            from you!
          </p>
        </div>
      </div>
    </section>
  );
};
/* <a
              key={index}
              href={item.href}
              target={item.label === "Follow Us" ? "_blank" : "_self"}
              rel={item.label === "Follow Us" ? "noopener noreferrer" : ""}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
            >
           
              <div
                className={`w-full h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 transition-colors duration-300`}
              >
                <div className={`${item.color} transition-colors duration-300`}>{item.icon}</div>
              </div>

       
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </a> */
