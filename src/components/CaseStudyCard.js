export default function CaseStudyCard({ project }) {
  // render all the project info into a card layout a la Tailwind style
  return (
    // card itself
    <div className="flex">
      {/* image */}
      <div className="w-1/3">
        <img src="#" alt="Sample alt text for case study image" />
      </div>
      {/* text */}
      <div className="w-2/3">
        <h3>{project.title}</h3>
        <p>{project.group}</p>
        <p>{project.description}</p>
        <p>{project.tools}</p>
        <p>{project.section}</p>
      </div>
    </div>
  );
}
