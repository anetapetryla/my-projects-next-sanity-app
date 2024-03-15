import Image from "next/image";
import { getExperience } from "@/sanity/sanity-utils";

export default async function Job() {
    const experiences = await getExperience();

    return (
      <section className="mt-32">
        <div className="mb-16">
          <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
        </div>
        <div className="flex flex-col gap-y-12">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">
              <a
                href={experience.url}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative">
                { experience.logo && <Image
                  src={experience.logo}
                  className="object-cover"
                  alt={`${experience.name} logo`}
                  fill />
                }
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{experience.name}</h3>
                <p>{experience.jobTitle}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {experience.startDate.toString()} - {experience.endDate ? experience.endDate.toString() : 'Present'}
                </small>
                <p className="text-base text-zinc-400 my-4">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }