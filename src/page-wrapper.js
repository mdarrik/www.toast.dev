import { h } from "preact";
import { Helmet } from "react-helmet";

export default (props) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <div class="relative bg-gray-50 overflow-hidden">
        <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div class="relative h-full max-w-screen-xl mx-auto">
            <svg
              class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div
          class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
          style={{
            backgroundImage:
              "linear-gradient(160deg, hsl(201.20000000000005, 100%, 60%) , transparent 100%), linear-gradient(87deg, hsl(120, 68.2%, 66.7%) 49%, transparent 90%)",
          }}
        >
          <Navigation />
          <MobileMenu />

          {props.children}
        </div>
      </div>
    </div>
  );
};

const Navigation = (props) => (
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#" aria-label="Home">
            <img
              class="h-8 w-auto sm:h-10"
              src="/toast-icon-300.png"
              alt="Logo"
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10">
        <a
          href="#"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Product
        </a>
        <a
          href="#"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Features
        </a>
        <a
          href="#"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Discord
        </a>
        <a
          href="#"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Company
        </a>
      </div>
      <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-gray-50 active:text-teal-700 transition duration-150 ease-in-out"
          >
            Log in
          </a>
        </span>
      </div>
    </nav>
  </div>
);

// Mobile menu, show/hide based on menu open state.
//
// Entering: "duration-150 ease-out"
//   From: "opacity-0 scale-95"
//   To: "opacity-100 scale-100"
// Leaving: "duration-100 ease-in"
//   From: "opacity-100 scale-100"
//   To: "opacity-0 scale-95"
const MobileMenu = () => (
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-md">
      <div
        class="rounded-lg bg-white shadow-xs overflow-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="main-menu"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt=""
            />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Close menu"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Product
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Features
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Discord
          </a>
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Company
          </a>
        </div>
        <div>
          <a
            href="#"
            class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:bg-gray-100 focus:text-teal-700 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
);
