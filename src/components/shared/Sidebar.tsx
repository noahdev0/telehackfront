import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp, IoHome, IoPerson } from "react-icons/io5";

type Props = {
  links: Array<{
    linkClass: string;
    ListClass: string;
    title: string;
    url: string;
    Icon: any;
  }>;
};

const Sidebar = ({ links }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName =
    typeof window !== "undefined" ? window.location.pathname + "/" : "/";
  return (
    <div className="min-w-16 relative">
      <aside
        className={`w-64 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 ${
          isSidebarOpen ? "w-64" : " w-16 overflow-hidden"
        } transition-all trans fixed top-0 h-full z-50 `}
      >
        <div className="h-16 flex items-center justify-center border-b-2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <IoCloseSharp /> : <CiMenuBurger />}
            </button>{" "}
          </h2>
        </div>

        <ul>
          {links.map((link, index: any) => (
            <li key={index} className={link.ListClass}>
              <Link className={link.linkClass} href={pathName + link.url}>
                <link.Icon className="h-5 w-5 mx-1 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
