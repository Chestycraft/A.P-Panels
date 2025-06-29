import { Sparkles, Clock, Shield, Ruler, Palette, Heart } from "lucide-react"
import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";
import { FadeInSection } from "./provider/framerprovider";

function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`scroll-appear bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group ${className}`}
    >
      {/* Icon container */}
      <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-300">
        <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{icon}</div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 leading-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export const Features = () =>{

    const features = [
         {
    title: "Effortless Elegance",
    description: "Turns plain walls into stunning backdrops — no need for paint or plaster.",
    icon: <Sparkles size={24} />
  },
  {
    title: "Installs in Minutes",
    description: "Click-lock system ensures a smooth setup even without tools or a pro.",
       icon: <Clock size={24} />,
  },
  {
    title: "Zero-Stress Maintenance",
    description: "Wipe-clean surface resists dust, moisture, and warping — built for busy lives.",
       icon: <Shield size={24} />,
  },
  {
    title: "3-Meter Seamless Finish",
    description: "Say goodbye to breaks, gaps, or short panels — enjoy flawless flow.",
          icon: <Ruler size={24} />,
  },
  {
    title: "Versatile Design Match",
    description: "Blends effortlessly with modern, rustic, or minimalist interiors.",
          icon: <Palette size={24} />,
  },
  {
    title: "Rooms That *Feel* Better",
    description: "A warmer, richer atmosphere — without breaking the budget.",
          icon: <Heart size={24} />,
  },
    ]

    return (
        <section id="features" className="text-foreground bg-background py-20 ">
            <h1 className=" text-3xl font-bold">Why Choose Our Our<span className="text-primary"> Panels</span></h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5">      
          {features.map((feature, index) => (
            <FadeInSection>
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            </FadeInSection>
          ))}
        </div>
        </section>
    )
}

