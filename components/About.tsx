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
                <p className=" text-white dark:text-gray-400">
                  The Sysnergistic, Innovative and Agile Cagayan Valley (SINAG
                  Cagayan Valley) is a consortium established through the Higher
                  Education Institution Readiness for Innovation and
                  Technopreneurship - Regional Startup Enablers for Ecosystem
                  Development (HEIRIT-ReSEED) Program which aims to strengthen
                  the startup ecosystem in the regions by providing funding
                  support to PCIEERD-funded TBIs to lead in establishing and
                  formalizing a Regional Startup Ecosystem Consortium.
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
