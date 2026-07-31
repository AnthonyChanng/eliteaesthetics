import type { Metadata } from "next";
import Link from "next/link";
import "../Home/home.css";

export const metadata: Metadata = {
  title: "Services | Elite Aesthetics MedSpa",
  description: "Explore esthetic services, injectables, and wellness treatments at Elite Aesthetics MedSpa.",
};

const estheticServices = [
  { title: "Soothing Facial", description: "For clients who are new to skincare, first-time facial clients, or sensitive skin who want a gentle approach.", price: "$100" },
  { title: "Age Defying Facial", description: "Specific for skin with fine lines and wrinkles.", price: "$100" },
  { title: "Antioxidant Force Field Facial", description: "Perfect for treatment and prevention of photo damage using Obagi Professional-C products.", price: "$115" },
  { title: "Acne Express Facial", description: "For clients who have oily skin that is prone to breakouts.", price: "$115" },
  { title: "Custom Obagi Facial with Skintrinsiq Device", description: "Non-invasive extractions and infusions to the deep layers of the skin. Includes Antioxidant, Brightening, or Firming Protocol.", price: "$175" },
  { title: "Blue Peel Radiance Facial", description: "Gentle, effective peel using a unique blend of acids resulting in tighter, smoother, brighter-looking skin.", price: "$225" },
  { title: "Micro-needling with SkinPen", description: "FDA-approved micro-needling device. Minimally invasive procedure to reduce the appearance of scars and neck wrinkles.", price: "$375" },
  { title: "Progen PRP Micro-needling with SkinPen", description: "Advanced recovery and healing using the body's own growth factors and antibodies found in platelet-rich plasma.", price: "$600" },
  { title: "Botox Facial with Aquagold® Micro-needling Device", description: "Bespoke micro-needle facial customized with a proprietary blend of Botox, hyaluronic acid, PRP, or peptides.", price: "$500+" },
];

const injectables = [
  { title: "Dermal Fillers", description: "Reduce the appearance of fine lines and wrinkles, facial folds, and create structure, framework, and volume to the face and lips with hyaluronic acid." },
  { title: "Platelet Rich Plasma", description: "Regenerative therapy that uses natural growth and healing factors from your own blood to restore youthful skin and smooth out fine wrinkles." },
  { title: "Neuromodulators", description: "Smooth and reduce fine lines and wrinkles with carefully injected neurotoxin into the muscles of contraction." },
];

const wellness = [
  { title: "Medically Guided Weight Loss", description: "Work with a physician to create a detailed weight-loss plan using pharmaceuticals, hormones, and diet-based algorithms." },
  { title: "Bio-identical Hormone Replacement", description: "Get your hormone levels rebalanced and optimized under physician supervision to regain your youth and vitality." },
  { title: "IV Hydration and Vitamin Supplementation", description: "Boost your energy and revitalize yourself with IV hydration composed of a cocktail of vitamins, antioxidants, and minerals." },
];

export default function ServicesPage() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Elite Aesthetics home"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <div className="navLinks"><Link className="active" href="/services">Services</Link><Link href="/packages">Packages</Link><Link href="/#visit">Contact</Link></div>
        <Link className="navCta" href="/#visit">Book a treatment <span>↗</span></Link>
      </nav>

      <header className="pageHero sectionPad">
        <p className="eyebrow">The treatment menu <span /></p>
        <div className="sectionHeading">
          <h1>Care, curated<br /><em>for you.</em></h1>
          <p>Our treatments pair high-performance products with intuitive, unhurried care.</p>
        </div>
      </header>

      <section className="serviceCategory esthetics sectionPad">
        <div className="categoryHeading">
          <p className="eyebrow">Esthetic services <span /></p>
          <h2>Skin health,<br /><em>beautifully refined.</em></h2>
        </div>
        <div className="estheticGrid">
          {estheticServices.map((service, index) => (
            <article className="estheticService" key={service.title}>
              <span className="serviceNumber">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="serviceTitle"><h3>{service.title}</h3><strong>{service.price}</strong></div>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="serviceNote">* Results and pricing may vary following consultation.</p>
      </section>

      <section className="serviceCategory injectables sectionPad">
        <div className="categoryHeading">
          <p className="eyebrow light">Injectables <span /></p>
          <h2>Subtle changes.<br /><em>Confident results.</em></h2>
        </div>
        <div className="treatmentCards">
          {injectables.map((service) => (
            <article className="treatmentCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="serviceCategory wellness sectionPad">
        <div className="categoryHeading">
          <p className="eyebrow">Wellness <span /></p>
          <h2>Feel well,<br /><em>from within.</em></h2>
        </div>
        <div className="treatmentCards">
          {wellness.map((service) => (
            <article className="treatmentCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <Link className="brand footerBrand" href="/"><span className="brandMark">EA</span><span>ELITE AESTHETICS <small>MEDSPA</small></span></Link>
        <p>© {new Date().getFullYear()} Elite Aesthetics MedSpa. All rights reserved.</p>
        <div><Link href="/#visit">Contact</Link><a href="#">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
