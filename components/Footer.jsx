import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t-slate-200 pt-12">
      <div className="max-w-6xl py-8 border-t-2 mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <p className="text-slate-800 font-normal">
          Powered by{" "}
          <Link
            href={"https://openai.com"}
            target="_blank"
            className="font-bold hover:underline"
          >
            OpenAI
          </Link>{" "}
          and{" "}
          <Link
            href={"https://vercel.com"}
            target="_blank"
            className="font-bold hover:underline"
          >
            Vercel
          </Link>
          .
        </p>

        <div className="flex items-center gap-4 text-slate-600">
          <Link
            className="hover:text-slate-900 transition-all duration-300 text-lg"
            href={"https://github.com/madflows/rephrase-ai"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            className="hover:text-slate-900 transition-all duration-300 text-lg"
            href={"https://twitter.com/madflows_"}
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
