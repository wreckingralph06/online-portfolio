import { useState, Fragment } from "react";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import ImageContainer from "../components/ImageContainer";
import hamburger_icon from "../public/svg-icons/hamburger-menu-svgrepo-com.svg";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar-section flex items-center justify-between py-8 px-32 backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200">
      <h1 className="text-4xl text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
        <Link href="/">Waldo Candaza</Link>
      </h1>
      <div className="rightSide flex content-center">
        <ul
          className={
            showLinks
              ? "hidden backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-200"
              : "navbar-tabs flex items-center"
          }
          // id={showLinks ? "hidden" : ""}
        >
          <NavbarItem
            navbarItemName={"About Me"}
            jumpTo={"#about-me"}
            showLinks={showLinks}
            setShowLinks={setShowLinks}
          />
          <NavbarItem
            navbarItemName={"Projects"}
            jumpTo={"#projects"}
            showLinks={showLinks}
            setShowLinks={setShowLinks}
          />
          <NavbarItem
            navbarItemName={"Skills"}
            jumpTo={"#skills"}
            showLinks={showLinks}
            setShowLinks={setShowLinks}
          />
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 text-xl to-teal-500 text-white px-4 py-2 border-none rounded-md"
              href={"#contactme"}
              onClick={() => setShowLinks(!showLinks)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)}>
          <ImageContainer
            imgClass={"hamburger-icon"}
            imageKey={hamburger_icon}
          />
        </button>
      </div>
    </nav>
  );
}
