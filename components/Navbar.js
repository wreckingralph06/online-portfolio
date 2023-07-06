import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav
      className="navbar-section flex items-center justify-between py-14 px-32 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200"
    >
      <h1 className="text-4xl text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
        <Link href="/">Waldo Candaza</Link>
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
            <Menu.Items className="hamburger-menu-items absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <NavbarItem navbarItemName={"Home"} jumpTo={"#about-me"} />
              </Menu.Item>
              <Menu.Item>
                <NavbarItem navbarItemName={"Projects"} jumpTo={"#projects"} />
              </Menu.Item>
              <Menu.Item>
                <NavbarItem navbarItemName={"Skills"} jumpTo={"#skills"} />
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="#contactme"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 border-none rounded-md mx-1"
                >
                  <div className="text-2xl text-white">Contact Me </div>
                </Link>
                {/* <NavbarItem navbarItemName={"Contact Me"} jumpTo={"#contactme"} /> */}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        <ul className="hamburger-tabs flex items-center">
          <NavbarItem navbarItemName={"About Me"} jumpTo={"#about-me"} />
          <NavbarItem navbarItemName={"Projects"} jumpTo={"#projects"} />
          <NavbarItem navbarItemName={"Skills"} jumpTo={"#skills"} />
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 text-xl to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href={"#contactme"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
