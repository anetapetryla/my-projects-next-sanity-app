import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image';
import Link from "next/link";

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-6xl font-extrabold"> 
        Personal {" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        github
        </span>
      </h1>
      
      <p className="mt-3 text-x1 text-gray-600">
        Welcome everyone! Checkout my projects!
      </p>
      
      <h2 className="mt-24 font-bold text-gray-700 text-3x1">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project._id} 
            className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-150 flex flex-col items-center justify-center text-center"
          >
            {project.image && (
              <Image  
                src={project.image} 
                alt={project.name} 
                width={250} 
                height={100}
                className="align-center object-cover rounded-lg border border-gray-500 mb-4"
              />
            )}

            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {project.name}
            </div>
          </Link>
        ))}
        </div>
    </div>
  );
};
