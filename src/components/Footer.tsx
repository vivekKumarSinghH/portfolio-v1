"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode, SiMedium } from "react-icons/si";
import portfolioData from "../../public/portfolio.json";
export function Footer() {
  return (
    <div>
      <div className="h-[15rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Connect with me at
        </p>

        <div className="flex space-x-4 text-3xl relative z-20">
          <a href={`mailto:${portfolioData?.user?.email}`} target="_blank">
            <MdEmail className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href={portfolioData?.user?.linkedin} target="_blank">
            <FaLinkedin className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href={portfolioData?.user?.github} target="_blank">
            <FaGithub className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>

          <a href={portfolioData?.user?.x} target="_blank">
            <FaXTwitter className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>

          <a href={portfolioData?.user?.medium} target="_blank">
            <SiMedium className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
          <a href={portfolioData?.user?.leetcode} target="_blank">
            <SiLeetcode className="text-neutral-500 hover:text-white transition-colors duration-300" />
          </a>
        </div>

        <p className="text-sm text-center text-neutral-500 relative z-20 mt-5">
          Designed by {portfolioData?.user?.name}, all rights reserved!
        </p>
      </div>
    </div>
  );
}
