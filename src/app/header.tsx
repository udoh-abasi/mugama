"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { useMatchMedia } from "./utils/useMatchMedia";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const smallScreenNav = useMatchMedia("(max-width:800px)");

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
    }, 400);
  };

  const smallScreenNavVariant = {
    hidden: {
      height: "0",
    },

    visible: {
      height: "100%",
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.15)] px-4 z-10">
      {smallScreenNav ? (
        <ul>
          <div className="flex justify-between items-center min-h-[106px]">
            <li>
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="Mugama logo"
                  width={514}
                  height={232}
                  priority
                  className="w-[80px]"
                />
              </Link>
            </li>

            <li>
              {!menuOpen ? (
                <button
                  type="button"
                  className="cursor-pointer text-4xl"
                  onClick={openMenu}
                  aria-label="Open menu"
                >
                  <CgMenuRightAlt />
                </button>
              ) : (
                <button
                  type="button"
                  className="cursor-pointer text-4xl"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <RiCloseLargeLine />
                </button>
              )}
            </li>
          </div>

          <>
            <AnimatePresence initial={false}>
              {menuOpen ? (
                <motion.ul
                  className="flex flex-col items-center gap-4 text-lg fixed top-[86px] bg-white w-full left-0 mt-4 overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={smallScreenNavVariant}
                  transition={{ duration: 0.5 }}
                  key="menu"
                >
                  <li className="hover:text-[var(--primary-color)]">
                    <Link onClick={closeMenu} href="/">
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link onClick={closeMenu} href="/about">
                      About us
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link onClick={closeMenu} href="/products">
                      Product & Services
                    </Link>
                  </li>
                  <li className="hover:text-[var(--primary-color)]">
                    <Link onClick={closeMenu} href="/contact">
                      Contact us
                    </Link>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </AnimatePresence>
          </>
        </ul>
      ) : (
        <ul className="flex justify-between items-center min-h-[106px]">
          <li>
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Mugama logo"
                width={514}
                height={232}
                priority
                className="w-[80px]"
              />
            </Link>
          </li>

          <div className="flex justify-center items-center gap-16 font-semibold">
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/about">About us</Link>
            </li>
            <li className="hover:text-[var(--primary-color)]">
              <Link href="/products">Product & Services</Link>
            </li>
          </div>

          <li className="hover:text-[var(--primary-color)]">
            <Link
              href="/contact"
              className="bg-[#E4E4E4] w-[100px] h-[30px] rounded-sm flex justify-center items-center"
            >
              Contact us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
