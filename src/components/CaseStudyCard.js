import Image from "next/image";
import Link from "next/link";

export default function CaseStudyCard({ project }) {
  // render all the project info into a card layout a la Tailwind style
  return (
    // card itself
    <div className="flex bg-white mb-4 p-4 rounded-md shadow-md gap-2 md:gap-4">
      {/* image */}
      <div className="w-1/3">
        <Image
          src="https://kobexamoh.me/img/work/embedded-undergraduate-certificates-homepage-desktop.jpg"
          alt={project.altText}
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
      {/* text */}
      <div className="w-2/3 relative">
        <h3 className="font-bold text-2xl/6 md:leading-7 lg:leading-8">
          {project.title} [{project.year}]
        </h3>
        <p className="text-body leading-5 md:leading-6 mb-1">
          {project.description}
        </p>
        <div className="text-body">
          <p className="mb-1">Client: {project.group}</p>
          <p className="mb-1">Tools: {project.tools.join(", ")}</p>
          <p className="rounded-full text-status-text border border-status px-3 py-1 inline absolute bottom-0 left-1 text-sm hover:bg-foreground hover:text-surface hover:font-semibold">Project status: {project.section}</p>
          <Link href={project.url} className="text-sm font-bold text-active absolute bottom-0 right-1 hover:underline">View live project</Link>
        </div>
      </div>
    </div>
  );
}
// TODO: maybe turn project.section into a pill style thing not a p tag.
// TODO: don't forget the link tag so clicking thru takes one to the individual case study itself (unless that's Phase 2...) (so remember to import Link before commiting)
// TODO: decide if pill colours should be same as page bg or not...