import Link from "next/link";
// TODO: site easter egg after hovering for a bit? secret page for academic work or friends' portolios?
// TODO: make background of footer a colour from design token and then flip text to be light colour
export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-4 gap-6">
      <div className="">
        {/* TODO: is there a more semantic way to name the three divs and avoid div soup? */}
        <p>Site design and build supervised by one (1) orange cat 🐈.</p>
      </div>
      <div>
        <p>From the gold coast to the rocky shields to the industrial north.</p>
      </div>
      <div>
        {/* TODO: replace date with JS or Next JS implementation so not hardcoded */}
        <p>Copyright 2026</p>
        <p>
            {/* TODO: little easter egg here. random quote for the week? lyric for the week? */}
        </p>
      </div>
    </footer>
  );
}
