export const Herosection = () => {
  return (
    //relative so that the bg image can be there and the text will still be able to use absolute and relate to its parent
    //full so that it stretches on the body's width
    <section id="hero"> 
       <div className="relative w-full">
      <img
        src="/APhero.jpg"
        className="
    w-full 
    h-[400px] 
    lg:h-[600px]
    object-cover 
    object-left 
    lg:object-[70%]
    md:h-[300px] 
    md:object-center
  "
        alt="background"
      />
      <div className="absolute inset-0  bg-black/50 z-10"></div>
      {/**div for overlay contents*/}
      <div className="absolute inset-0 p-4 z-20">

        <div className="relative w-full lg-ml-30 md:ml-20 ">
          <h1
            className="
              text-4xl
                            
                            md:text-4xl 
                            lg:text-5xl 
                            text-white 
                            text-left 
                            mt-25 
                            md-mt-15 
                            lg:mt-35
                            "
                            
          >
            Beauty Meets
            <br /> Strength in Every
            <br /><span className="text-primary">Panels</span>
          </h1>
          <div className="relative flex flex-row gap-[10px] mt-5">
<a href="#products" className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">Products</a>
<a href="https://wa.me/09238578763" className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
    </section>
   
  );    
};
