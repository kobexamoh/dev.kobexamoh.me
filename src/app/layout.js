// Font imports
import { Oxygen } from "next/font/google";
import "./globals.css";

// Font configuration
const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})

// TODO: update metadata to personal site
export const metadata = {
  title: "Kobe Amoh | frontend developer and ux/ui designer",
  description: "Kobe Amoh is a frontend developer and marketing UI/UX designer for brands and startups.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oxygen.weight} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <!-- Navigation -->
	<nav class="navbar navbar-expand-md navbar-light mb-4 px-4 pe-md-5">
		<a class="navbar-brand" id="homeicon" href="/"><strong>ka.</strong></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
			aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<a class="nav-link" href="/about">about</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/work">work</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/blog">blog</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact">contact</a>
				</li>
			</ul>
		</div>
	</nav>{children}<footer>Copyright 2026</footer></body>
    </html>
  );
}
