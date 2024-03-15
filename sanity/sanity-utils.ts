import { groq } from "next-sanity";
import { Project } from "./types/Project";
import { Page } from "./types/Page";
import { Profile } from "./types/Profile";
import client from "./config/client-config";
import { Experience } from "./types/Experience";

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
            _id, 
            name,
            "slug": slug.current,
            tagline,
            "logo": logo.asset->url,
          }`
    );
}

export async function getProject(slug: string): Promise<Project> {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            projectUrl,
            description
        }`,
        { slug }
    );
}

export async function getPages(): Promise<Page[]> {
    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    );
}

export async function getProfiles(): Promise<Profile[]> {
    return client.fetch(
        groq`*[_type == "profile"]{
            _id,
            fullName,
            headline,
            profileImage {alt, "image": asset->url},
            shortBio,
            location,
            fullBio,
            email,
            "resumeURL": resumeURL.asset->url,
            socialLinks,
            skills
        }`
    );
}

export async function getExperience(): Promise<Experience[]> {
    return client.fetch(
      groq`*[_type == "experience"]{
        _id,
        name,
        jobTitle,
        "logo": logo.asset->url,
        url,
        description,
        startDate,
        endDate,
      } | order(startDate desc)`
    );
  }