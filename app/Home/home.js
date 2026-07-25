import Image from "next/image";
import "./home.css";

const services = [
  { number: "01", title: "Custom Facials", description: "Personalized, glow-restoring treatments designed around your skin and the Florida climate.", price: "From $145", duration: "60 min" },
  { number: "02", title: "Therapeutic Massage", description: "A restorative blend of flowing relaxation and focused therapeutic techniques.", price: "From $135", duration: "60 min" },
  { number: "03", title: "Body Rituals", description: "Mineral-rich exfoliation and nourishing hydration for smooth, sun-kissed skin.", price: "From $165", duration: "75 min" },
  { number: "04", title: "Brow & Lash", description: "Polished, natural-looking definition tailored to your features and everyday style.", price: "From $35", duration: "30 min" },
];

const packages = [
  { name: "The Ocean Reset", details: "Custom facial + relaxation massage", price: "$255", note: "2 hours" },
  { name: "Coastal Glow", details: "Body polish + hydrating facial", price: "$285", note: "2.25 hours", featured: true },
  { name: "Full Day Retreat", details: "Massage + facial + body ritual + lunch", price: "$445", note: "4.5 hours" },
];

const hours = [
  ["Monday – Friday", "9am – 3pm"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Elite Aesthetics home">
          <span className="brandMark">EA</span>
          <span>ELITE AESTHETICS <small>MEDSPA</small></span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
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
            <a className="button primary" href="#services">Explore treatments <span>→</span></a>
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

      <section className="services sectionPad" id="services">
        <div className="sectionHeading">
          <div><p className="eyebrow">The treatment menu <span /></p><h2>Care, curated<br /><em>for you.</em></h2></div>
          <p>Our treatments pair high-performance products with intuitive, unhurried care.</p>
        </div>
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

      <section className="packages sectionPad" id="packages">
        <div className="packagesIntro">
          <p className="eyebrow light">Stay a little longer <span /></p>
          <h2>Rituals for<br /><em>deep restoration.</em></h2>
          <p>Slow down with a thoughtfully paired experience. Each package includes herbal tea, a seasonal bite, and time to linger.</p>
        </div>
        <div className="packageCards">
          {packages.map((item) => (
            <article className={item.featured ? "package featured" : "package"} key={item.name}>
              {item.featured && <span className="favorite">Guest favorite</span>}
              <span>{item.note}</span><h3>{item.name}</h3><p>{item.details}</p>
              <div><strong>{item.price}</strong><a href="tel:+17722028668">Reserve <span>→</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial sectionPad">
        <span className="quoteMark">“</span>
        <blockquote>From the moment you walk in, the whole world seems to quiet down. I left feeling lighter, brighter, and completely cared for.</blockquote>
        <p>— ELENA R. &nbsp;·&nbsp; VERO BEACH</p>
      </section>

      <section className="visit" id="visit">
        <div className="visitDetails">
          <p className="eyebrow light">Come see us <span /></p>
          <h2>Your quiet place<br /><em>by the sea.</em></h2>
          <div className="detailsGrid">
            <div><span>LOCATION</span><p>3101 Ocean Drive<br />Vero Beach, FL 32963</p><a href="https://maps.google.com/?q=3101+Ocean+Drive+Vero+Beach+FL" target="_blank" rel="noreferrer">Get directions ↗</a></div>
            <div><span>HOURS</span>{hours.map(([day, time]) => <p className="hours" key={day}><b>{day}</b>{time}</p>)}</div>
          </div>
          <div className="contact"><a href="tel:+17722028668">(772) 202-8668</a><a href="mailto:eliteaestheticsfl@gmail.com">hello@eliteaestheticsfl@gmail.com</a></div>
        </div>
        <div className="visitVisual"><div className="sun" /><p>ATLANTIC<br />OCEAN</p><span>27.65° N<br />80.36° W</span></div>
      </section>

      <footer>
        <div className="brand footerBrand"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>COASTAL SPA</small></span></div>
        <p>© {new Date().getFullYear()} Elite Aesthetics Coastal Spa. All rights reserved.</p>
        <div><a href="#services">Services</a><a href="#visit">Contact</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
