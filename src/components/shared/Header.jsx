"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navsData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blogs",
    path: "/blog",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Writify</h1>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex flex-1 justify-center items-center space-x-4">
          {navsData.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className={`text-xl text-slate-500 font-medium ${
                pathName === nav.path ? "!text-blue-500 !underline" : ""
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* User Profile or Login Link */}
        <div className="hidden sm:block">
          <Link
            href="/login"
            className="bg-blue-500 hover:brightness-110 duration-300 text-white px-3 py-2 rounded font-medium"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={handleToggle}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-800"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="flex flex-col space-y-2 mt-2">
          {navsData.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="block text-center border-b bg-gray-200 rounded px-4 py-2 text-xl text-slate-500 font-medium"
              onClick={closeMenu}
            >
              {nav.name}
            </Link>
          ))}
          <div className="flex justify-center items-center py-2">
            <span className="mt-2">
              <Link
                href="/login"
                className="bg-blue-500 hover:brightness-110 duration-300 text-white px-3 py-2 rounded font-medium block text-center"
                onClick={closeMenu}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
