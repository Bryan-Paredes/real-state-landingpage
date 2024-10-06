import { useEffect, useState } from "react";
import { dataHeader } from "../Header/Header.data";
import { NavbarProps } from "./Navbar.types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar(props: NavbarProps) {
  const { openMobileMenu } = props;

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 600) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolling ? (
        <motion.nav
          key={1}
          variants={animationNavbar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="ml-auto mr-auto md:fixed z-[9999] right-0 left-0 px-6 py-3 text-white bg-gray-400/40 top-10 rounded-3xl backdrop-blur w-fit"
        >
          <div className="items-center hidden gap-5 md:flex">
            {dataHeader.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className=" hover:text-black hover:border-b-[1px] hover:border-secondary"
              >
                {name}
              </Link>
            ))}
            <Link
              className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black transition-all 3s"
              href="/login"
            >
              Login
            </Link>
          </div>
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute z-[1] left-0 top-20 rounded-3xl r-0 w-full px-4 py-4 backdrop-blur-md transition-all duration-300 text-white font-semibold bg-gray-400/40"
              : "hidden"
          } gap-5 md:flex`}
        >
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="block hover:text-secondary hover:border-b-[1px] mt-2 transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

const animationNavbar = {
  initial: {
    y: -20,
    with: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: "spring",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};
