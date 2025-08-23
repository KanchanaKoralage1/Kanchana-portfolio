import { WobbleCard } from "./ui/WobbleCard"
import { skillsData } from "@/data"

const Skills = () => {
  return (
    <div className="py-20" id="skills">
      <div className="mb-18 mt-10 text-center">
        <h1 className="heading">
          Get to Know <span className="text-purple-500">Education & Skills</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full mt-10 px-4">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-[linear-gradient(90deg,_rgba(18,18,20,1)_0%,_rgba(20,20,97,1)_35%,_rgba(8,47,64,1)_100%)]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Education
            </h2>
            <div className="mt-6 text-left text-sm text-neutral-200 space-y-3 ">
              {skillsData.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold">{edu.school}</p>
                  <p>
                    {edu.degree} — {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[linear-gradient(90deg,_rgba(18,18,20,1)_0%,_rgba(20,20,97,1)_35%,_rgba(8,47,64,1)_100%)]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Soft Skills
          </h2>
          <ul className="mt-6 max-w-[26rem] text-left text-sm text-neutral-200 list-disc pl-5 space-y-1">
            {skillsData.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-[linear-gradient(90deg,_rgba(18,18,20,1)_0%,_rgba(20,20,97,1)_35%,_rgba(8,47,64,1)_100%)]">
          <div className="max-w-full">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Technical Skills
            </h2>
            <div className="mt-4 text-left text-sm text-neutral-200 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Programming Languages:</p>
                  <p className="text-xs">{skillsData.technical.programmingLanguages.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Frameworks & Libraries:</p>
                  <p className="text-xs">{skillsData.technical.frameworks.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Databases:</p>
                  <p className="text-xs">{skillsData.technical.databases.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Tools & Platforms:</p>
                  <p className="text-xs">{skillsData.technical.tools.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">IDE & Testing:</p>
                  <p className="text-xs">{skillsData.technical.ideTesting.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Concepts:</p>
                  <p className="text-xs">{skillsData.technical.concepts.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}

export default Skills
