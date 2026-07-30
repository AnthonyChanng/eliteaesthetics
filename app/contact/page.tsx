import type { Metadata } from "next";
import Link from "next/link";
import "../Home/home.css";

export const metadata: Metadata = {
  title: "Contact | Elite Aesthetics MedSpa",
  description: "Contact Elite Aesthetics MedSpa in Vero Beach, Florida.",
};

export default function ContactPage() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Elite Aesthetics home"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <div className="navLinks"><Link href="/services">Services</Link><Link href="/packages">Packages</Link><Link className="active" href="/contact">Contact</Link></div>
        <Link className="navCta" href="/contact">Book a treatment <span>↗</span></Link>
      </nav>

      <section className="visit contactPage">
        <div className="visitDetails">
          <p className="eyebrow light">Get in touch <span /></p>
          <h1>Your quiet place<br /><em>by the sea.</em></h1>
          <div className="detailsGrid">
            <div>
              <span>LOCATION</span>
              <p>1575 Indian River Blvd<br />Suite C130<br />Vero Beach, FL 32963</p>
              <a href="https://maps.google.com/?q=1575+Indian+River+Blvd+Suite+C130+Vero+Beach,+FL+32960" target="_blank" rel="noreferrer">Get directions ↗</a>
            </div>
            <div>
              <span>HOURS</span>
              <p className="hours"><b>Monday – Friday</b>9am – 3pm</p>
            </div>
          </div>
          <div className="contact"><span>(772) 202-8668</span><a href="mailto:eliteaestheticsfl@gmail.com">eliteaestheticsfl@gmail.com</a></div>
        </div>
        <div className="visitVisual"><div className="sun" /><p>ATLANTIC<br />OCEAN</p><span>27.65° N<br />80.36° W</span></div>
      </section>

      <footer>
        <Link className="brand footerBrand" href="/"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <p>© {new Date().getFullYear()} Elite Aesthetics MedSpa. All rights reserved.</p>
        <div><Link href="/services">Services</Link><Link href="/packages">Packages</Link><a href="#">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
