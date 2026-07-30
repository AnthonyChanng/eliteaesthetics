import type { Metadata } from "next";
import Link from "next/link";
import "../Home/home.css";

export const metadata: Metadata = {
  title: "Packages | Elite Aesthetics MedSpa",
  description: "Explore restorative spa packages at Elite Aesthetics in Vero Beach.",
};

const packages = [
  { name: "The Ocean Reset", details: "Custom facial + relaxation massage", price: "$255", note: "2 hours" },
  { name: "Coastal Glow", details: "Body polish + hydrating facial", price: "$285", note: "2.25 hours", featured: true },
  { name: "Full Day Retreat", details: "Massage + facial + body ritual + lunch", price: "$445", note: "4.5 hours" },
];

export default function PackagesPage() {
  return (
    <main className="packagesPage">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Elite Aesthetics home"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <div className="navLinks"><Link href="/services">Services</Link><Link className="active" href="/packages">Packages</Link><Link href="/contact">Contact</Link></div>
        <Link className="navCta" href="/contact">Book a treatment <span>↗</span></Link>
      </nav>

      <section className="packages packagePageContent sectionPad">
        <div className="packagesIntro">
          <p className="eyebrow light">Stay a little longer <span /></p>
          <h1>Rituals for<br /><em>deep restoration.</em></h1>
          <p>Slow down with a thoughtfully paired experience. Each package includes herbal tea, a seasonal bite, and time to linger.</p>
        </div>
        <div className="packageCards">
          {packages.map((item) => (
            <article className={item.featured ? "package featured" : "package"} key={item.name}>
              {item.featured && <span className="favorite">Guest favorite</span>}
              <span>{item.note}</span><h3>{item.name}</h3><p>{item.details}</p>
              <div><strong>{item.price}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <Link className="brand footerBrand" href="/"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <p>© {new Date().getFullYear()} Elite Aesthetics MedSpa. All rights reserved.</p>
        <div><Link href="/services">Services</Link><Link href="/contact">Contact</Link><a href="#">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
