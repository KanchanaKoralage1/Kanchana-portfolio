import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaLocationArrow,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaFilePdf,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-15">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-40 right-80 h-[60vh] w-[40vw]" fill="cyan" />
      </div>

      <div className="h-screen w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Enhanced radial gradient with better fade effect */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            words="Hi My name is Kanchana Koralage"
          />

          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Final-year IT undergraduate at{" "}
            <span className="text-blue-400 font-semibold">SLIIT</span> with
            hands-on experience in{" "}
            <span className="text-cyan-400 font-semibold">React</span>,{" "}
            <span className="text-purple-400 font-semibold">React Native</span>,
            and <span className="text-blue-400 font-semibold">Spring Boot</span>
            . Completed multiple solo projects and online certifications.
            Passionate about{" "}
            <span className="text-purple-400 font-semibold">
              Full-Stack development
            </span>
            , self-learning, and building scalable applications. Actively
            seeking an{" "}
            <span className="text-cyan-400 font-semibold">internship</span> to
            gain real-world industry experience and contribute to a dynamic
            software development team.
          </p>

          <a
            href="#projects"
            className="mb-12 transform hover:scale-105 transition-transform duration-300"
          >
            <MagicButton
              title="Explore My Projects"
              icon={<FaLocationArrow className="text-white" />}
              position="right"
              otherClasses="text-lg px-8 py-4"
            />
          </a>

          <div className="flex flex-col items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Ready to collaborate? Reach out through any platform
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="mailto:itsmekanchanakoralage@gmail.com"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <MagicButton
                  title="Email"
                  icon={<FaEnvelope />}
                  position="left"
                  otherClasses="text-sm md:text-base px-4 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30"
                />
              </a>

              <a
                href="tel:070-4975336"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <MagicButton
                  title="My Resume"
                  icon={<FaFilePdf/>}
                  position="left"
                  otherClasses="text-sm md:text-base px-4 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30"
                />
              </a>

              <a
                href="https://linkedin.com/in/kanchana-koralage"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <MagicButton
                  title="LinkedIn"
                  icon={<FaLinkedin />}
                  position="left"
                  otherClasses="text-sm md:text-base px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30"
                />
              </a>

              <a
                href="https://github.com/Kanchana-Koralage"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all duration-300"
              >
                <MagicButton
                  title="GitHub"
                  icon={<FaGithub />}
                  position="left"
                  otherClasses="text-sm md:text-base px-4 py-3 bg-gradient-to-r from-gray-500/20 to-gray-600/20 hover:from-gray-500/30 hover:to-gray-600/30"
                />
              </a>
            </div>

            <div className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 font-mono bg-black/5 dark:bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <p>itsmekanchanakoralage@gmail.com | 070-4975336</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
