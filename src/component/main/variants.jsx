import { FadeInSection } from "./provider/framerprovider";

export default function PanelShowcase() {
const imageModules = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp,gif}', {
  eager: true, // Load immediately
  import: 'default', // Get the actual path
});

const imagePaths = Object.values(imageModules);
let paneltype = [ "PVC", "WPC", "UPVC"];
let panels = [];

for (let i = 0; i < imagePaths.length; i++) {
  panels.push({ image: imagePaths[i], type: paneltype[i % paneltype.length] });
}


  return (
    <div id="collections"className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl text-gray-900 mb-4 font-bold">
            Premium<span className="text-primary"> Panels </span> Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space with our handcrafted wooden panels. Each
            variant brings unique character and timeless elegance to modern
            interiors.
          </p>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {panels.map((panelImage, index) => (
            <FadeInSection>
<div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className=" relative overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 z-10 bg-transparent opacity-0 group-hover:bg-black/80 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <h2 className="absolute text-4xl text-primary-foreground  max-w-3xl mx-auto bottom-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  {panelImage.type}
                </h2>
                </div>

                <div className="lg:opacity-0 absolute inset-0  bg-black/30 z-10"><h2 className="absolute text-4xl text-primary-foreground  max-w-3xl mx-auto bottom-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  {panelImage.type}
                </h2></div>
                
                <img
                  src={panelImage.image || "/placeholder.svg"}
                  alt={`Panel ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </FadeInSection>
            
          ))}
        </div>
        {/**and more */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto m-10">
          And more!
        </p>
      </div>
    </div>
  );
}
