// TODO: site easter egg after hovering for a bit? secret page for academic work or friends' portolios?
export default function Footer() {
  return (
    <footer className="bg-foreground text-surface flex items-center justify-evenly px-4 gap-6 pt-20 pb-8 text-sm">
      <div className="container mx-auto">
      <div className="flex-1">
        {/* TODO: is there a more semantic way to name the three divs and avoid div soup? */}
        <p>Site design and build supervised by one (1) orange cat 🐈.</p>
      </div>
      <div className="flex-none">
        <p>From the gold coast to the rocky shields to the industrial north.</p>
      </div>
      <div className="flex-1 text-right">
        {/* TODO: replace date with JS or Next JS implementation so not hardcoded */}
        <p>Copyright 2026</p>
        <p>{/* TODO: little easter egg here. random quote for the week? lyric for the week? */}</p>
      </div>
      </div>
    </footer>
  );
}
