export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <h1 className="text-6xl font-bold">contact</h1>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <p className="text-3xl/10 font-medium mb-4">
            In the long run, I&apos;m interested in design engineering roles.
          </p>
          <section className="">
            <p className="mb-4">
              If your organization doesn&apos;t call it that yet: think of roles that start in the the frontend to
              combine design, development, content-driven experiences, and implementation. As someone who entered
              development from a non-traditional background, I enjoy working on teams that value curiosity, creativity,
              and bringing together T-shaped creators to build great work. If that sounds like what you need from me,
              please{" "}
              <a href="mailto:amoh.kobe@gmail.com" target="_blank">
                send me an email
              </a>{" "}
              - I&apos;d love to chat.
            </p>
            <h2 className="text-4xl font-bold mb-2">mentoring</h2>
            <p className="mb-4">
              If you&apos;re early in your career, new to the industry, or have general questions about tech, I&apos;m
              happy to chat. If I don&apos;t know the answers, I&apos;m always happy to connect you with one of my peers
              that might.
            </p>
            <h2 className="text-4xl font-bold mb-2">links and such</h2>
            <ul className="mb-4 ">
              <li>
                <a href="https://www.linkedin.com/in/amohkobe/" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/kobexamoh" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="mailto:amoh.kobe@gmail.com" target="_blank">
                  Email
                </a>
              </li>
              <li>
                <a href="/docs/kobe-amoh-resume-2026.pdf">Resume (PDF)</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
