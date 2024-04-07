"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import portfolioData from "../../public/portfolio.json";
import Link from "next/link";

export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {portfolioData?.experiences.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit  py-2 mb-4">
              {item.badge}
            </h2>

            <Link
              href={item.website}
              target="_blank"
              className={twMerge("text-xl mb-1 px-6 font-bold")}
            >
              {item.title}
            </Link>
            <p className={twMerge("text-xs mb-1 px-6 ")}>{item.date}</p>
            <p className={twMerge("text-xs mb-4 px-6 ")}></p>
            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item?.description &&
                item?.description.map((des, index) => (
                  <ul className="list-disc ml-6 mt-1" key={index + "dd"}>
                    <li>{des}</li>
                  </ul>
                ))}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Software Engineer - CardByte.ai",
    description: [
      "Led the end-to-end development journey of a robust web application using React.js, Redux, and React Hook Form, guiding it from conceptualization to successful deployment.",
      "Collaborated closely with cross-functional product teams, adeptly gathering requirements and transforming them into intuitive and responsive UI components using HTML, CSS, and JavaScript.",
      "Engineered seamless state management solutions with Redux, ensuring efficient data flow and enhancing user interactions.",
      "Seamlessly integrated diverse third-party libraries and packages, including Calendar and Firebase, to enrich the application's functionalities.",
      "Spearheaded the development of a multitenant SaaS application using React Redux Toolkit, demonstrating adeptness in managing complex state and scalability challenges.",
      "Pioneered the establishment of automated unit and integration tests using Jest and React Testing Library, fortifying code reliability and fostering a culture of quality assurance.",
    ],
    website: "https://www.cardbyte.ai/enterprise",
    badge: "✦ Experience",
    image: "",
    date: "May 2022- Present",
  },
  {
    title: "Full Stack Web Development - Masai School",
    website: "https://www.masaischool.com/",

    description: [
      "Building robust and scalable applications using the MERN stack.",
      "Implementing modular and maintainable code structures for both frontend and backend.",
      "Utilizing advanced concepts in React.js, Redux, Express.js, and MongoDB to create dynamic and responsive user interfaces.",
      "Integrating authentication and authorization features for secure user interactions.",
      "Developing RESTful APIs and understanding the principles of CRUD operations.",
    ],
    badge: "✦ Education",
    image: "",
    date: "Aug 2021 - May 2022",
  },
  {
    website: "https://www.hansrajcollege.ac.in/",

    title: "BSc.(hons.) Electronics - Hansraj college,Delhi University",
    date: "July 2018 - May 2021",
  },
];
