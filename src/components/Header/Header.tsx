"use client";

import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="container mx-auto my-5">
      <div className=" flex items-center justify-between px-5 md:px-9 p-4 shadow-md">
        <Link href="/">
          <Image src="/logo.svg" alt="Real State" width={100} height={40} />
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

        <div className="hidden md:flex items-center justify-center gap-2 md:gap-5">
          <Link
            href="tel:+34665656565"
            className="flex items-center gap-2 cursor-pointer"
          >
            <BsTelephone />
            <span className="hidden lg:block hover:text-secondary hover:border-b-[1px]">
              +(502) 5555-5555
            </span>
          </Link>
          <Link
            href="/contacto"
            className="px-4 py-2 font-bold text-secondary border-2 border-secondary rounded-lg hover:text-white hover:bg-secondary transition-colors 3s"
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
