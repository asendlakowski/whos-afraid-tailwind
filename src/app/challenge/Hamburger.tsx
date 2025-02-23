import Link from "next/link";
import React, { useState } from "react";

const Hamburger = ({ currBackground }: { currBackground: string }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const choices = [
    { name: "Home", data: "-1" },
    { name: "Level 1", data: "0" },
    { name: "Level 2", data: "1" },
    { name: "Level 3", data: "2" },
    { name: "Level 4", data: "3" },
    { name: "Level 5", data: "4" },
  ];
  // console.log(currBackground);

  return (
    <div className="z-50">
      <button
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium focus:outline-none hover:text-opacity-75"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="white"
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
        <div
          className="absolute origin-top-right fixed mt-2 w-56 py-1 shadow-lg bg-white bg-opacity-75 z-[999]"
          style={{ backgroundColor: currBackground }}
        >
          <div className="w-full">
            {choices.map((ch) => {
              return (
                <div key={ch.data} style={{ backgroundColor: currBackground }}>
                  <Link
                    key={ch.data}
                    onClick={() => setMenuIsOpen(false)}
                    href={
                      ch.data === "-1"
                        ? { pathname: "/home" }
                        : {
                            pathname: "/challenge",
                            query: { level: ch.data },
                          }
                    }
                    className="block px-4 py-3 text-med font-blinker hover:font-bold bg-white bg-opacity-75"
                    style={{
                      color: currBackground,
                      marginBottom: 0,
                    }}
                  >
                    {ch.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
