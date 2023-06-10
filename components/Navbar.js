import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  return (
    <div className="navbar-section py-2 px-10 dark:bg-gray-900 md:px-20 lg:px-40 z-40">
      <nav
        className="navbar relative flex items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 px-10 rounded-xl"
        data-te-navbar-ref
      >
        <h1 className="text-xl text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
          <Link href="/">Resume</Link>
        </h1>
        <div className="flex content-center">
          <Menu as="div" className="hamburger-only relative">
            <Menu.Button className="menu-button ">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="menu-items absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <Link
                    href="/projects"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Sample Projects
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <ul className="hamburger-tabs flex items-center">
            <li>
              <Link
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/projects"
              >
                Sample Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
