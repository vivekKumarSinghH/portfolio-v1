import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    poster: string;
    github: string;
    video: string;
    techstack: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          // href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}>
            <CardTitle>{item.title}</CardTitle>
            <Image
              src={item?.poster}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
            <CardDescription item={item} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string;
  children: React.ReactNode;
  item: {
    title: string;
    description: string;
    link: string;
    poster: string;
    github: string;
    video: string;
    techstack: string;
  };
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 mb-12">
        <div className="flex flex-col gap-3">{children}</div>
      </div>
      <div className="w-full pr-4 flex justify-between absolute bottom-2">
        <CardButton link={item?.link}>DEMO</CardButton>
        {item?.video.length > 0 ? (
          <CardButton link={item?.video}>VIDEO</CardButton>
        ) : (
          <></>
        )}
        <CardButton link={item?.github}>CODE</CardButton>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardButton = ({
  className,
  children,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  link: string;
}) => {
  return (
    // <Link
    //   href={link}
    //   className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
    // >
    //   <div className=" z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    //     {children}
    //   </div>
    // </Link>
    <Link
      href={link}
      target="_blank"
      className="relative inline-flex h-6 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </Link>
  );
};
export const CardDescription = ({
  className,
  item,
}: {
  className?: string;
  item: {
    title: string;
    description: string;
    link: string;
    poster: string;
    github: string;
    video: string;
    techstack: string;
  };
}) => {
  return (
    <div>
      <p
        className={cn(
          "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {item?.description}
      </p>
      <p className={cn("text-white  text-sm", className)}>{item?.techstack}</p>
    </div>
  );
};
