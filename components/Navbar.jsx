import React from "react";
import Logo from "./Logo";
import { IoLogoGithub } from "react-icons/io5"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full flex items-baseline justify-between py-4 px-6 max-w-6xl  border-b mx-auto">
        <Link href={"/"} target={"_blank"} className="flex items-center gap-2">
          <Logo width={"35"} height={"35"} />
          <h2 className="font-bold text-lg">
            Rephrase<span className="text-violet-600">AI</span>
          </h2>
        </Link>

        <Link href="https://vercel.app" target={"_blank"}>
          <IoLogoGithub className="w-[25px] h-[25px]" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
