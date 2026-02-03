"use client";

import React from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Gamage Recruiters",
    period: "July 2025 – December 2025",
    description: [
      "Develop and maintain web and mobile applications using React Native, React.js, TypeScript, and JavaScript.",
      "Contribute to backend development with Node.js and Express.js.",
      "Participate in API testing and automation using Postman and Selenium.",
      "Collaborate with team members and track progress through Jira and Trello.",
      "Follow CI/CD best practices and version control using Git/GitHub.",
      "Assist in designing scalable and user-friendly interfaces for multiple applications.",
    ],
    tech: [
      "React Native",
      "React.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Postman",
      "Selenium",
      "GitHub",
      "Trello",
    ],
  },
];

const Experience = () => {
  return (
    <div className="space-y-10 py-20" id="experience">
      {/* 🔹 Section Title */}
      <h1 className="heading text-center">
        My Current{" "}
        <span className="text-purple-800">Work Experience</span>
      </h1>

      {/* 🔹 Single Centered Card */}
      <div className="flex justify-center">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl p-8 transition duration-300",
            "bg-white dark:bg-black hover:shadow-xl group",
            "max-w-3xl w-full"
          )}
          style={{
            background:
              "linear-gradient(90deg, rgba(18,18,20,1) 0%, rgba(20,20,97,1) 35%, rgba(8,47,64,1) 100%)",
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />

          <div className="relative z-10 space-y-4">
            <span className="text-xs text-neutral-400">
              {experiences[0].period}
            </span>

            <h3 className="text-2xl font-bold text-neutral-200">
              {experiences[0].role}
            </h3>

            <p className="text-sm text-neutral-400">
              {experiences[0].company}
            </p>

            {/* 🔹 Bullet Points */}
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300 leading-relaxed">
              {experiences[0].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* 🔹 Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4">
              {experiences[0].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-[#10132E] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
