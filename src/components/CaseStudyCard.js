import Image from "next/image";
import Link from "next/link";

export default function CaseStudyCard({ project }) {
  // render all the project info into a card layout a la Tailwind style
  return (
    // card itself
    <div className="flex flex-col md:flex-row  gap-2 md:gap-6">
      <div className="w-full md:w-1/4">
        <Image
          src={project.imgSrc}
          alt={project.altText}
          width={400}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3>Title</h3>
        <p>Project type</p>
        <p>Description</p>
        <p>Client</p>
        <p>Tools</p>
        <p>Project URL</p>
        <p>Status</p>
        <p>Year</p>
      </div>
    </div>
  );
}
// TODO: maybe turn project.section into a pill style thing not a p tag.
// TODO: don't forget the link tag so clicking thru takes one to the individual case study itself (unless that's Phase 2...) (so remember to import Link before commiting)
// TODO: decide if pill colours should be same as page bg or not...
// TODO: The padding and border radius of the inner div will determine the overall border radius of the card, as the inner div will contain both the image and text.