import type { Metadata } from "next";
import Link from "next/link";
import "../Home/home.css";

export const metadata: Metadata = {
  title: "Services | Elite Aesthetics MedSpa",
  description: "Explore personalized facials, massage, body rituals, and brow and lash services.",
};

const services = [
  { number: "01", title: "Custom Facials", description: "Personalized, glow-restoring treatments designed around your skin and the Florida climate.", price: "From $145", duration: "60 min" },
  { number: "02", title: "Therapeutic Massage", description: "A restorative blend of flowing relaxation and focused therapeutic techniques.", price: "From $135", duration: "60 min" },
  { number: "03", title: "Body Rituals", description: "Mineral-rich exfoliation and nourishing hydration for smooth, sun-kissed skin.", price: "From $165", duration: "75 min" },
  { number: "04", title: "Brow & Lash", description: "Polished, natural-looking definition tailored to your features and everyday style.", price: "From $35", duration: "30 min" },
];

export default function ServicesPage() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Elite Aesthetics home"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <div className="navLinks"><Link className="active" href="/services">Services</Link><Link href="/packages">Packages</Link><Link href="/#visit">Visit</Link></div>
        <a className="navCta" href="tel:+17722028668">Book a treatment <span>↗</span></a>
      </nav>

      <header className="pageHero sectionPad">
        <p className="eyebrow">The treatment menu <span /></p>
        <div className="sectionHeading">
          <h1>Care, curated<br /><em>for you.</em></h1>
          <p>Our treatments pair high-performance products with intuitive, unhurried care.</p>
        </div>
      </header>

      <section className="services sectionPad">
        <div className="serviceList">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <span className="serviceNumber">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="servicePrice"><strong>{service.price}</strong><span>{service.duration}</span></div>
              <a href="tel:+17722028668" aria-label={`Book ${service.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <Link className="brand footerBrand" href="/"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <p>© {new Date().getFullYear()} Elite Aesthetics MedSpa. All rights reserved.</p>
        <div><Link href="/packages">Packages</Link><Link href="/#visit">Contact</Link><a href="#">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
