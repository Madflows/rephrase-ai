import React from "react";
import Logo from "./Logo";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full flex items-center justify-between py-4 px-6 max-w-6xl  border-b mx-auto">
        <Link href={"/"} target={"_blank"} className="flex items-center gap-2">
          {/* <Logo width={"35"} height={"35"} />
          <h2 className="font-bold text-lg">
            Rephrase<span className="text-violet-600">AI</span>
          </h2> */}
          <img src="/logo.svg" alt="rephrase.ai" width={150} />
        </Link>

        <Link
          href="https://www.producthunt.com/posts/rephraseai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-rephraseai"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=378014&theme=dark"
            alt="RephraseAI - Rephrase&#0032;your&#0032;Twitter&#0032;bio&#0032;in&#0032;seconds | Product Hunt"
            style={{ width: "200px", height: "54px" }}
            width="200"
            height="54"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
