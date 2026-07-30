import Image from "next/image";
import Link from "next/link";
import "./home.css";

const hours = [
  ["Monday – Friday", "9am – 3pm"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Elite Aesthetics home">
          <span className="brandMark">EA</span>
          <span>ELITE AESTHETICS <small>MEDSPA</small></span>
        </Link>
        <div className="navLinks">
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <a href="#visit">Visit</a>
        </div>
        <a className="navCta" href="tel:+17722028668">Book a treatment <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <Image className="heroImage" src="/spa-hero.png" alt="Sunlit coastal treatment room overlooking the ocean" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">Vero Beach, Florida <span /></p>
          <h1>Come back to<br /><em>yourself.</em></h1>
          <p className="heroCopy">Thoughtful treatments, coastal calm, and a little time that is entirely yours.</p>
          <div className="heroActions">
            <Link className="button primary" href="/services">Explore treatments <span>→</span></Link>
            <a className="textLink lightLink" href="tel:+17722028668">Call (772) 202-8668</a>
          </div>
        </div>
        <div className="heroNote"><span>Open Mon - Fri</span><strong>9:00 AM – 3:00 PM</strong></div>
      </section>

      <section className="intro sectionPad">
        <p className="eyebrow">Our philosophy <span /></p>
        <div className="introGrid">
          <h2>Wellness should feel<br /><em>beautifully simple.</em></h2>
          <div>
            <p>Nestled along Florida’s Treasure Coast, Elite Aesthetics is a modern sanctuary inspired by the restorative rhythm of the ocean. Every detail is considered, every treatment is personal.</p>
            <a className="textLink" href="#visit">Discover our space <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visitDetails">
          <p className="eyebrow light">Come see us <span /></p>
          <h2>Your quiet place<br /><em>by the sea.</em></h2>
          <div className="detailsGrid">
            <div><span>LOCATION</span><p>1575 Indian River Blvd<br />Suit C130<br />Vero Beach, FL 32963</p><a href="https://maps.google.com/?q=1575+Indian+River+Blvd+Suite+C130+Vero+Beach,+FL+32960" target="_blank" rel="noreferrer">Get directions ↗</a></div>
            <div><span>HOURS</span>{hours.map(([day, time]) => <p className="hours" key={day}><b>{day}</b>{time}</p>)}</div>
          </div>
          <div className="contact"><a href="tel:+17722028668">(772) 202-8668</a><a href="mailto:eliteaestheticsfl@gmail.com">hello@eliteaestheticsfl@gmail.com</a></div>
        </div>
        <div className="visitVisual"><div className="sun" /><p>ATLANTIC<br />OCEAN</p><span>27.65° N<br />80.36° W</span></div>
      </section>

      <footer>
        <div className="brand footerBrand"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small> MEDSPA</small></span></div>
        <p>© {new Date().getFullYear()} Elite Aesthetics MedSpa. All rights reserved.</p>
        <div><Link href="/services">Services</Link><Link href="/packages">Packages</Link><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
