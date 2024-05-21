
import {useState} from "react";

import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import hamburger from "../../assets/hamburger.svg"



const navbarLinks = [
    { route: "#", label: "Home" },
    { route: "#about", label: "About" },
    { route: "#experience", label: "Experience" },
    { route: "#portfolio", label: "Portfolio" },
    { route: "#contact", label: "Contact" },
  ];

const NavContent = () => {

  const [activeNav, setActiveNav] = useState("");
  return (
    <section className="flex flex-col gap-6 pt-16 lg:hidden">
      {navbarLinks.map((item) => {
            return (
          <SheetClose asChild key={item.route}>
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
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <img
          src={hamburger}
          width={36}
          height={36}
          alt="menu"
          className="lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="right" className="border-none bg-white">
        <a href="/" className="flex items-center gap-1">
          <p className="">
           Khomotso Tibane
          </p>
        </a>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
