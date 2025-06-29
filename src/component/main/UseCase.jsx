import {
  Armchair,
  BedDouble,
  LampDesk,
  Puzzle,
  LampCeiling,
  Sparkles,
} from "lucide-react";

function Usecasegrid({ icon, item}) {
  return (
    <li className="flex gap-2 shadow rounded-sm p-2">
      <span>{icon}</span>
      <span>{item}</span>
    </li>
  );
}

export const UseCase = () => {
  const iconsize = 24;
  const usecases = [
    {
      text: "Living rooms",
      icon: <Armchair size={iconsize} />,
    },
    {
      text: "Bedrooms",
      icon: <BedDouble size={iconsize} />,
    },
    {
      text: "Offices and workspaces",
      icon: <LampDesk size={iconsize} />,
    },
    {
      text: "Accent and feature walls",
      icon: <Puzzle size={iconsize} />,
    },
    {
      text: "Ceiling design enhancements",
      icon: <LampCeiling size={iconsize} />,
    },
    {
      text: "Stylish, low-maintenance renovations",
      icon: <Sparkles size={iconsize} />,
    },
  ];

  return (
    <section id="uses" className="bg-background px-4 py-12 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl  text-center mb-5 font-bold">Perfect For</h1>
        <p className="text-xl text-foreground  max-w-3xl mx-auto">
          Our WPC Fluted Wall <span className="text-primary"> Panels </span> are
          perfect for:
        </p>
         <ul className={`max-w-xl lg:mx-auto ml-5 md:ml-12 text-gray-900 grid lg:grid-cols-2 grid-cols-1 text-left gap-4 mt-10`}>
        {usecases.map((usecase, index) => (
            <Usecasegrid key={index} icon={usecase.icon} item={usecase.text} />
        ))}
        </ul>
      </div>
    </section>
  );
};

//<span className="text-primary"> Panels  </span>
