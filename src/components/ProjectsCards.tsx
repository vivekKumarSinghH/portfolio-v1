"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import PortfolioData from "../../public/portfolio.json";

export function ProjectsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={PortfolioData?.projects} />
      <TextGenerateEffect words={PortfolioData?.user?.opensource_motto} />

      <div className="mt-2 h-[20rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <a
            href={PortfolioData?.user?.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PortfolioData?.user?.github.replace(/^https?:\/\//, "")}
          </a>
        </p>
        <p className="text-sm text-center text-neutral-500 relative z-20 t-10">
          Give it a ⭐, if you like it :)
        </p>
      </div>
    </div>
  );
}
