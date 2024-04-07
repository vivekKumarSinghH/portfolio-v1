"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import PortfolioData from "../../public/portfolio.json";
export function Hero() {
  const handleClick = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.txt";
    link.click();
  };

  const greetings = [
    "Heello",
    "नममस्ते",
    "こんんにちは",
    "안녕녕하세요",
    "Прривет",
  ];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [typedGreeting, setTypedGreeting] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const greeting = greetings[currentGreetingIndex];
    let index = 0;

    setTypedGreeting(greeting.charAt(0));

    const typingInterval = setInterval(() => {
      if (index === greeting.length - 1) {
        clearInterval(typingInterval);
      } else {
        setTypedGreeting((prevTyped) => prevTyped + greeting.charAt(index + 1));
        index++;
      }
    }, 250);

    return () => clearInterval(typingInterval);
  }, [currentGreetingIndex]);

  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-2 max-w-7xl mx-auto relative z-10 w-full pt-10 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {typedGreeting} <br /> I am {PortfolioData?.user?.name}
        </h1>
        <p className="mt-2 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Software Engineer from India, with 2 years of experience in a SaaS
          startup, specializing in web development, and SaaS applications.
          <br />
          Proficient in React.js and other JavaScript frameworks, with a track
          record of leveraging these technologies to build scalable and
          efficient solutions.
        </p>

        <div className="flex justify-center mt-4">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <a href={PortfolioData?.user?.resume} target="_blank">
                <span>See Resume</span>
              </a>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
