import Image from "next/image";
const partners = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div>
        <ol
          className="flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="text-sm">
            <a
              className="flex items-center text-gray-500 hover:text-blue-600"
              href="#"
            >
              Home
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li className="text-sm">
            <a
              className="flex items-center text-gray-500 hover:text-blue-600"
              href="#"
            >
              About
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
          <li className="text-sm">
            <a
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
              href="#"
            >
              Partners
            </a>
          </li>
        </ol>
      </div>

      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 py-10  lg:py-14 ">
        <h2 className="text-2xl uppercase font-black md:text-4xl md:leading-tight dark:text-white">
          Our Partners
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          SINAG Cagayan Valley aims to establish a Regional Startup Development
          platform to build and strengten the startup ecosystem in the region
          and to create a Regional Ecosystem Development Roadmap that will serve
          as guide in improving the startup ecosystem conditions in the region.
        </p>
      </div>

      <div>
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                {/* <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"> */}

                <Image
                  className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                  src="/Moa Signing.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Studio by Preline
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Produce professional, reliable streams easily leveraging
                  Preline's innovative broadcast studio
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                {/* <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="Image Description"> */}
                <Image
                  className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                  src="/Moa Signing.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  Onsite
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Optimize your in-person experience with best-in-className
                  capabilities like badge printing and lead retrieval
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                {/* <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"> */}
                <Image
                  className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                  src="/Moa Signing.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  The complete guide to OKRs
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  How to make objectives and key results work for your company
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          <a
            className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                {/* <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"> */}
                <Image
                  className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                  src="/Moa Signing.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                  People program models
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Six approaches to bringing your People strategy to life
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default partners;
