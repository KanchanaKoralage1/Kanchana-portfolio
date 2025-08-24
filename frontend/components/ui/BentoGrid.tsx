"use client";

import { cn } from "@/lib/utils";
import { div, object } from "motion/react-client";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationDate from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  titleClassName,
  imgClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  titleClassName?: string;
  imgClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("itsmekanchanakoralage@gmail.com");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl  bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none mt-10",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(18,18,20,1) 0%, rgba(20,20,97,1) 35%, rgba(8,47,64,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title?.toString()}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={title?.toString()}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-80 flex flex-col px-5 p-5 lg:p-5"
          )}
        >
          <div className="font-sans text-xs font-extralight text-neutral-600 dark:text-neutral-300">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-neutral-600 dark:text-neutral-200">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute right-3 lg:right-2">
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["React.js", "Next.js", "React native", "Spring Boot"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["JavaScript", "TypeScript", "Java", "Python"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationDate,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Click here to copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>

        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
        </div>
      </div>
    </div>
  );
};
