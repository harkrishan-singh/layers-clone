import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Button from "../components/Button";
import LogoImage from "../assets/images/logo.svg";

const menuList = [
  { label: "Home", link: "#home" },
  { label: "Features", link: "#features" },
  { label: "Integrations", link: "#integrations" },
  { label: "FAQs", link: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // For ensuring the menu doesn't stay open when switching from mobile to desktop view.
  useEffect(() => {
    // Function to update the isOpen state based on window width
    const setIsOpenState = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    setIsOpenState();

    // Updates the state if the window height chang
    window.addEventListener("resize", setIsOpenState);

    // Cleanup: remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", setIsOpenState);
    };
  }, []);

  return (
    <>
      <section className=" h-auto w-full px-8 lg:px-12 py-4 lg:py-6 text-white text-sm fixed top-0 z-50 ">
        <div
          className={` max-w-5xl mx-auto border border-white/15 ${
            isOpen === false ? " rounded-full " : " rounded-[27px] "
          } bg-neutral-950/70 backdrop-blur transition `}
        >
          <div className=" h-auto w-full max-w-5xl mx-auto px-4 md:px-2 py-2 flex items-center justify-between ">
            {/* Logo */}
            <a href="#home">
              <img
                src={LogoImage}
                alt="Layers Logo"
                className=" h-8 md:h-10 w-auto cursor-pointer "
              />
            </a>
            {/* Menu */}
            <div className=" hidden lg:flex items-center justify-center gap-6 lg:gap-8 text-white ">
              {menuList.map((value, key) => (
                <a
                  href={value.link}
                  key={key}
                  className=" hover:text-lime-400 hover:font-normal transition-all "
                >
                  {value.label}
                </a>
              ))}
            </div>
            {/* Buttons */}
            <div className=" hidden md:flex gap-3 ">
              <Button variant={"secondary"} onClick={() => {}}>
                Log In
              </Button>
              <Button variant={"primary"} onClick={() => {}}>
                Sign Up
              </Button>
            </div>
            {/* Hamburger Menu */}
            <div
              className=" md:hidden "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" feather feather-menu cursor-pointer "
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={` origin-left ${
                    isOpen === true ? " rotate-45 -translate-y-1 " : ""
                  } transition `}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={` ${isOpen === true ? "hidden" : ""} transition `}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={` origin-left ${
                    isOpen === true ? " -rotate-45 translate-y-1 " : ""
                  } transition `}
                ></line>
              </svg>
            </div>
          </div>
          {/* Mobile Menu  */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className=" overflow-hidden "
              >
                <div className=" py-6 flex  flex-col items-center justify-center gap-4 ">
                  {/* Menu List */}
                  <div className=" flex flex-col items-center justify-center gap-4 text-xl font-medium ">
                    {menuList.map((value, key) => (
                      <a key={key} href={value.link}>
                        {value.label}
                      </a>
                    ))}
                  </div>
                  {/* Menu Buttons */}
                  <div className=" flex flex-col gap-4 ">
                    <Button variant={"secondary"} onClick={() => {}}>
                      Log In
                    </Button>
                    <Button variant={"primary"} onClick={() => {}}>
                      Sign Up
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* Required Padding */}
      <div className=" p-10 md:p-12 lg:p-14 "></div>
    </>
  );
};

export default Navbar;
