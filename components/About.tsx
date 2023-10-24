import Image from "next/image";
const About = () => {
  return (
    <div className=" bg-about-bg bg-auto bg-no-repeat bg-center grid content-center">
      <div className="relative overflow-hidden ">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-black uppercase text-white text-3xl md:text-3xl lg:text-4xl dark:text-gray-200">
                  Who we are
                </h1>
              </div>

              <div className="max-w-3xl mt-20 flex justify-center">
                <Image
                  src="/Sinag Logo White.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-white dark:text-gray-400">
                  Synergistic, Innovative and Agile Cagayan Valley is a
                  consortium established through the HEIRIT-ReSEED Program which
                  aims to strenghten the startup ecosystem in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
