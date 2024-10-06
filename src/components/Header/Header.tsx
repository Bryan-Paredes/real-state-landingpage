"use client";

import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState } from "react";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-9">
        <Link href="/">
          <h1 className="font-medium">PruebaRealState</h1>
        </Link>
        {!openMobileMenu ? (
          <CiMenuFries
            className="block text-2xl md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        ) : (
          <GrClose
            className="block text-2xl md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        )}
        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:+34665656565"
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephone />
            <span className="hidden md:block hover:text-secondary hover:border-b-[1px]">
              +34 665 656 565
            </span>
          </Link>
        </div>
        <Link
          href="/login"
          className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black transition-all 3s"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
