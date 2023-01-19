import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <section className="flex flex-col items-start md:items-center gap-8">
      <Link
        href="https://github.com/madflows/rephrase-ai"
        target="_blank"
        className="flex items-center gap-2 py-2 px-4 rounded-full border-2 border-[#D1D5DB] shadow-sm text-coolGray"
      >
        <BsGithub className="text-coolGray text-xl" />
        <p className="leading-none">Star on Github</p>
      </Link>
      <h3 className="text-[57px] font-cubano text-slate-800 max-w-[687px] text-left md:text-center leading-[60px]">
        Rephrase your Twitter bio in seconds
      </h3>
      <p className="text-coolGray text-lg">
        <span className="font-semibold">18,167</span> bios rephrased so far.
      </p>
    </section>
  );
};

export default Header;
