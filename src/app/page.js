// TODO: maybe sort this out when using CMS but should body content be inside a container or whatever Tailwind's container class is these days?
export default function Home() {
  return (
    // TODO: this first div is the container...set max width?
    <div className="container mx-auto">
      {/* TODO: either keep the h1 for accessibility/SEO or hide it in case it confuses screenreaders... */}
      <h1 className="text-8xl font-bold mb-8">Hi, I&apos;m Kobe.</h1>
      <div className="text-4xl">
        <p className="mb-4">
          I design and engineer web experiences that help organizations tell their stories and market themselves.
        </p>
        <p className="mb-4">
          I&apos;m a web developer with{" "}
          <a
            className="stylized-link"
            href="https://www.ualberta.ca/en/toolkit/digital-and-creative/index.html"
            target="_blank">
            Digital + Creative
          </a>
          , the in-house design agency at the University of Alberta.
        </p>
        <p className="mb-4">
          My recent work includes building a component to display college affiliations on the university&apos;s site footers,
          designing the landing page for{" "}
          <a
            className="stylized-link"
            href="https://www.ualberta.ca/en/graduate-programs/online-masters-of-engineering-in-construction-engineering-and-management.html"
            target="_blank">
            the new MEng advertising campaign
          </a>
          , and conducting the UX analysis + redesign for{" "}
          <a
            className="stylized-link"
            href="https://www.ualberta.ca/en/campus-community-recreation/index.html"
            target="_blank">
            Campus + Community Recreation&apos;s web services
          </a>
          .
        </p>
      </div>
    </div>
  );
}
// TODO: update <Header> to have margin to push container away, and have <Footer> sticky or fixed so it stays at the bottom (right now it's higher in the page view since the homepage is not much copy...)
// TODO: whether in here or in Sanity, figure out a way to have the ' change to &apos; on save or on running Prettier so that VS Code doesn't underline it in red...