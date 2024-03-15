import { getProfiles } from "@/sanity/sanity-utils";
import HeroSvg from "./components/hero";
import Experience from "./components/experience";

export default async function Home() {
  const profiles = await getProfiles();
  
  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        { profiles &&  profiles.map((profile) => (
            <div key={profile._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {profile.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {profile.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(profile.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300">
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Experience />
    </main>
  );











    // <div>
    //   <h1 className="text-5xl font-bold"> 
    //     Software {" "}
    //     <span className="bg-gradient-to-r from-blue-500 via-blue-800 to-purple-700 bg-clip-text text-transparent">
    //     developer
    //     </span>
    //   </h1>
      
    //   <p className="mt-3 text-x1 text-gray-600">
    //     Welcome everyone! Checkout my projects!
    //   </p>
    //   <HeroSvg />
    //   <h2 className="mt-24 font-bold text-gray-700 text-3x1">My Projects</h2>
    //   <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {projects.map((project) => (
    //       <Link 
    //         href={`/projects/${project.slug}`} 
    //         key={project._id} 
    //         className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-150 flex flex-col items-center justify-center text-center"
    //       >
    //         {project.image && (
    //           <Image  
    //             src={project.image} 
    //             alt={project.name} 
    //             width={250} 
    //             height={100}
    //             className="align-center object-cover rounded-lg border border-gray-500 mb-4"
    //           />
    //         )}

    //         <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
    //           {project.name}
    //         </div>
    //       </Link>
    //     ))}
    //     </div>
    // </div>
};
