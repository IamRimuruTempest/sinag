import Image from "next/image";
const team = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
            Team
          </a>
        </li>
      </ol>

      <Image
        className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
        src="/Moa Signing.jpg"
        width={500}
        height={500}
        alt=""
      />
   

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our leadership
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                David Forren
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Founder / CEO
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Amil Evara
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Ebele Egbuna
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Maria Powers
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Director of sales
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Delia Pawelke
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Front-end Developer
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Tom Lowry
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                UI/UX Designer
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Louise Donadieu
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Support Consultant
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Jeff Fisher
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
              src="/Moa Signing.jpg"
              width={500}
              height={500}
              alt=""
            />{" "}
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                Sophia Harrington
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default team;
