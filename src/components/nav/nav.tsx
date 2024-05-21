
import  { useState } from "react";
import MobileNavbar from "./mobilenav";

const navbarLinks = [
  { route: "#", label: "Home" },
  { route: "#about", label: "About" },
  { route: "#experience", label: "Experience" },
  { route: "#portfolio", label: "Portfolio" },
  { route: "#contact", label: "Contact" },
];


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav className="fixed z-50 flex h-10 w-full lg:p-6">
      <div className="mx-auto flex w-full justify-between px-2">
        {/* <h1 className="hidden items-center p-1 font-medium lg:flex">Khomotso Tibane</h1> */}
      </div>
      <div  className="hidden items-center gap-4 lg:flex">
        {navbarLinks.map((item) => {
          return (
            <a
              href={item.route}
              key={item.route}
              className="flex items-center gap-16 rounded-lg p-1"
              onClick={() => setActiveNav(item.route)}
            >
              <p
                className={` ${activeNav === item.route ? "text-[#ff5e69]" : ""} font-medium hover:scale-105`}
              >
                {item.label}
              </p>
            </a>
          );
        })}
      </div>

     
        <MobileNavbar />
  
    </nav>
  );
};

export default Navbar;
