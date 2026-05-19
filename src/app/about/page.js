export default function About() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <h1 className="text-6xl font-bold">about</h1>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <p className="text-3xl/10 font-medium mb-4">
            I work at the University of Alberta where I design, maintain, and improve large institutional websites used
            by its students and staff for the public.
          </p>
          <section className="">
            <p className="mb-4">
              I originally studied physiology before moving into web design and development, and I’ve built my career
              working on websites and digital content systems.
            </p>
            <p className="mb-4">My background combines frontend development, design, and content strategy.</p>
            <p className="mb-4">
              My early interest in the web started with building blogs with friends to experiment with online publishing
              – something that still influences how I approach the web today. I care deeply about building and creating
              collaboratively with others.
            </p>
            <p className="mb-4">
              I enjoy working on projects where design, development, and content systems intersect – especially in
              environments where clarity and accessibility matter.
            </p>
            <h2 className="text-4xl font-bold mb-4">outside of work</h2>
            <p className="mb-4">
              Outside of development and design, I spend a lot of time with music: I play guitar and piano, collect
              records, and enjoy music production as a hobby. I enjoy reading and writing about how technology, culture,
              and communication shape each other.
            </p>
            <p className="mb-4">
              I also work as a{" "}
              <a className="stylized-link" href="https://kobexamoh.tumblr.com" target="_blank">
                commercial and lifestyle photographer
              </a>
              with a focus on branding, marketing, and lifestyle work. Some of my previous clients include the
              University of Alberta (Peter Lougheed Leadership College; Dean of Students; Faculty of Science),
              Basketball Alberta, Tourism Red Deer, and the City of Leduc.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
