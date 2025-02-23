import Link from "next/link";
import React, { useState } from "react";

const Hamburger = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const choices = [
    { name: "Home", data: "-1" },
    { name: "Level 1", data: "0" },
    { name: "Level 2", data: "1" },
    { name: "Level 3", data: "2" },
    { name: "Level 4", data: "3" },
  ];

  return (
    <div>
      <button
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-secondary-blue text-sm font-medium text-[#D7E1E8] hover:bg-[#D7E1E8] hover:text-secondary-blue focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuIsOpen ? (
            // X icon when menu is open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when menu is closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {menuIsOpen && (
        <div className="origin-top-right absolute mt-2 w-56 py-1 rounded-md shadow-lg bg-[#D7E1E8] text-secondary-blue z-10">
          {choices.map((ch) => {
            return (
              <Link
                key={ch.data}
                href={
                  ch.data === "-1"
                    ? { pathname: "/home" }
                    : {
                        pathname: "/challenge",
                        query: { level: ch.data },
                      }
                }
                className="block px-4 py-3 text-med text-gray-700 hover:px-4 font-blinker hover:font-bold"
              >
                {ch.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
