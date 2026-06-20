import Image from "next/image";
import Link from "next/link";

export default function CaseStudyCard({ project }) {
  // render all the project info into a card layout a la Tailwind style
  return (
    // card itself
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 bg-card-bg-light border border-gray-200 rounded-xl md:rounded-3xl p-2 md:p-4">
      <Image
        src={project.imgSrc}
        alt={project.altText}
        width={400}
        height={300}
        className="w-full md:w-1/4 rounded-md md:rounded-lg object-cover"
      />
      <div className="w-full md:w-3/4 pt-2">
        <h3 className="text-2xl font-bold">Title</h3>
        <p className="text-sm text-status-text">Description</p>
        <p>Project type</p>
        <p>Client</p>
        <p>Tools</p>
        <p>View project</p>
        <p>Status</p>
        <p>Year</p>
      </div>
    </div>
  );
}
// TODO: maybe turn project.section into a pill style thing not a p tag.
// TODO: don't forget the link tag so clicking thru takes one to the individual case study itself (unless that's Phase 2...) (so remember to import Link before commiting)
// TODO: decide if pill colours should be same as page bg or not...
