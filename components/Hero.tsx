import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen bg-hero-bg bg-center grid content-center">
      <div className="relative overflow-hidden ">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                SINAG 2023
              </p>

              <div className="mt-5 max-w-2xl">
                <h1 className="block font-black uppercase text-white text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Sinag Cagayan Valley Consortium
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-white dark:text-gray-400">
                  Synergistic, Innovative and Agile Cagayan Valley is a
                  consortium established through the HEIRIT-ReSEED Program which
                  aims to strenghten the startup ecosystem in the region.
                </p>
              </div>

              <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="javascript:;"
                >
                  Get started
                  <svg
                    className="w-3 h-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  <svg
                    className="w-4 h-4"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                      fill="#0ACF83"
                    ></path>
                    <path
                      d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                      fill="#A259FF"
                    ></path>
                    <path
                      d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                      fill="#F24E1E"
                    ></path>
                    <path
                      d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                      fill="#FF7262"
                    ></path>
                    <path
                      d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                      fill="#1ABCFE"
                    ></path>
                  </svg>
                  Preline Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
