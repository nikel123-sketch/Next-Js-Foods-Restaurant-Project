"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { useState } from "react";
import InputSearch from "../InputSearch";
import CartItems from "@/app/foods/[id]/CartItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center  px-8 py-4 bg-gray-900 text-white">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/foodlogo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </Link>

      <InputSearch></InputSearch>
      <CartItems></CartItems>
      {/* Mobile Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open ? "✕" : "☰"}
      </button>

      {/* Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-4 absolute md:static  left-0 top-16 w-full md:w-auto p-4 md:p-0`}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink prefetch={false} href="/foods">
          Foods
        </NavLink>
        <NavLink href="/reviews">Reviews</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;