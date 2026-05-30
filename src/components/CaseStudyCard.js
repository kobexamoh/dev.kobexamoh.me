import Image from "next/image";
export default function CaseStudyCard({ project }) {
  // render all the project info into a card layout a la Tailwind style
  return (
    // card itself
    <div className="flex bg-surface mb-4 p-4 rounded-md shadow-md md:gap-4">
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
        <h3 className="font-bold text-2xl">
          {project.title} [{project.year}]
        </h3>
        <p className="text-body mb-2">
          {project.description}
        </p>
        <div className="text-sm">
          <p className="mb-2">Client: {project.group}</p>
          <p>Tools: {project.tools.join(", ")}</p>
          <p className="rounded-full text-status-text border border-status px-3 py-1 inline absolute bottom-0 right-1 text-sm hover:bg-foreground hover:text-surface hover:font-semibold">Project status: {project.section}</p>
        </div>
      </div>
    </div>
  );
}
// TODO: maybe turn project.section into a pill style thing not a p tag.
// TODO: don't forget the link tag so clicking thru takes one to the individual case study itself (unless that's Phase 2...) (so remember to import Link before commiting)
// TODO: decide if pill colours should be same as page bg or not...