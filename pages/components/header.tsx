import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {MdDarkMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md";
import { Logo } from "./logo";

import { useTheme } from "next-themes";

export interface IHeaderProps {}

const navLinks = [
  {
    href: "/movies",
    label: "Home",
  },
  {
    href: "/now_playing",
    label: "now playing",
  },
  {
    href: "/top-rated",
    label: "top rated",
  },
  {
    href: "/upcoming",
    label: "upcoming",
  },
];

export function Header(props: IHeaderProps) {
  const [active, setActive] = useState<string>("Home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
const {theme, setTheme} = useTheme()
  return (
    <div
      className='sticky relative drop-shadow-[0.5_35px_35px_ #0e111d)] top-0 nav-bar flex justify-between items-center w-full h-[5.2rem]  lg:px-12 px-8 py-5 border-t-8'
      style={{ background: "linear-gradient(200deg, #090c15,  #0e111d)" }}
    >
      <div className='logo'>
        <Link href='/movies'>
        <div className="logo absolute top-0 left-0  md:p-7 pt-4 px-1 sm:px-2">
        <Logo />
    </div>
        </Link>
      </div>

      <div
        className={`links flex justify-between items-center lg:flex-[.4]  ${
          isMobile ? "flex-col" : "flex-row"
        }`}
      >

        <ul
          className={
            isMobile
              ? "nav-links-mobile justify-center items-center leading-10 text-center"
              : "flex flex-1  justify-between items-center all-links"
          }
          style={{ fontFamily: "Fira Code monospace" }}
        >
          {navLinks.map((link, index) => (
            <>
              <button
                key={index}
                className='relative'
                onClick={() => setActive(link.label)}
              >
                <li>
                  <Link href={link.href}>
                    <span
                      className={`text-[#eaeef2] text-[15px] uppercase font-medium cursor-pointer px-4 py-2   hover:text-[#b6e3ff]  ${
                        active === link.label
                          ? " bg-[#00800090] rounded-md hover:text-[#eaeef2]"
                          : ""
                      } `}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              </button>
            </>
          ))}
        </ul>
        <div className="flex justify-center items-center">
        <div>
        <button
        className="mr-2 ml-1"
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        >
        {theme === "light" ? <div className="text-white bg-black p-2 rounded-md"><MdDarkMode/></div> : <div className="bg-black p-2 rounded-md"><MdOutlineLightMode/></div>}
        </button>
      </div>
      <button
          className='mobile-nav'
          onClick={() => setIsMobile(!isMobile)}
          style={{ color: "#eaeef2" }}
        >
          {isMobile ? <ImCross /> : <FaBars />}
        </button>
        </div>


      </div>
    </div>
  );
}

// #b6e3ff