import projects from "../content/projects.json";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Work() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <h1 className="text-6xl font-bold">work</h1>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <p className="text-3xl/10 font-medium mb-4">
            My work focuses on building clear, accessible web experiences that help organizations communicate complex
            information.
          </p>
          <section className="">
            <p className="mb-4">
              As a developer, my strengths include prototyping in the browser with semantic HTML, CSS, JavaScript,
              React, and Tailwind CSS.
            </p>
            <p className="mb-4">
              As a designer, when I&apos;m not creating layouts or prototypes in Figma, I&apos;m comfortable performing
              UX research and conducting user testing.
            </p>
            <p className="mb-4">
              For all things scrappy, I&apos;ve used tools like WordPress and Squarespace to help teams find creative
              solutions to their business needs, and I use data from Google Analytics and user testing to make digital
              strategy recommendations.
            </p>
          </section>
          <section className="">
            <h2 class="fs-2">
              <strong>selected work</strong>
            </h2>
            <div className="mb-4">
              {/* this is where JSX for work should be rendered... */}
              {projects.map((project) => (
                <CaseStudyCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          {/* for the time being I'll hide this div below. unsure if this page is for showing work history or current work... */}
          <div className="hidden">
            <section className="">
              <h2 class="fs-2">
                <strong>currently</strong>
              </h2>
              <p className="mb-4">
                Until recently, I was a Digital Content Coordinator with the University of Alberta&#39;s Digital +
                Creative Centre of Expertise team (under{" "}
                <a
                  class="stylized-link"
                  href="https://www.ualberta.ca/en/external-relations/index.html"
                  target="_blank">
                  External Relations
                </a>
                ). As of April 2026, I&apos;m...still with Digital + Creative (but now as a junior web developer.)
                <br />
                <br />
                Cheeky. I know.
              </p>
              <p className="mb-4">
                The day to day is still being defined, but I&apos;m stoked to help the web team in a more formal sense.
                I&apos;ve been able to support the team a few times in the past year and I&apos;m excited to have it
                more formal now.
              </p>
              {/* TODO: word that paragraph above better...ugh. */}
              <p className="mb-4">
                <s>
                  I&#39;m a Digital Content Coordinator with the University of Alberta&#39;s Digital + Creative Centre
                  of Expertise team (under{" "}
                  <a
                    class="stylized-link"
                    href="https://www.ualberta.ca/en/external-relations/index.html"
                    target="_blank">
                    External Relations
                  </a>
                  ). Think of Digital + Creative as the university&apos;s in-house digital agency. I work
                  cross-functionally with marketing and communications to help design, maintain, and improve the large
                  institutional websites that the University of Alberta serves to students, staff, and the public. Much
                  of my work involves translating complex institutional information into web interfaces that are simple
                  and usable; I use tools like Figma, Bootstrap, and Cascade CMS to rapidly build experiences that
                  support the university&#39;s faculties, departments, and research groups in achieving their strategic
                  marketing goals.
                </s>
              </p>
            </section>
            <section className="">
              <h2 class="fs-2">
                <strong>previously</strong>
              </h2>
              <p className="mb-4">
                {/* TODO: fill out with whatever previous job/project info I want to use... will fix after validating the components... */}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
//  TODO: in time I need to grab the
//   <div className="container mx-auto">
//       <div className="grid grid-cols-12 gap-4">
//         <div className="col-span-12 lg:col-span-3">
// that begins each page thus far maybe make it a component that sits at the top of each page or something because I'm starting to realize that it wraps around each file/function and exists in each page file...so maybe I should just make it a component that wraps around the content of each page instead of having to copy and paste it into each one...but for now, I'll just copy and paste it into here and then refactor it later when I have more pages to work with and can see the pattern better...
