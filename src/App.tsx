import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";
import Cover from "./components/Cover";
import { site, hero, focus, projects, about, experience, contact } from "./content";

function Hero() {
  return (
    <section id="top" className="section">
      <div className="wrap grid md:grid-cols-[1.15fr_1fr] gap-14 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <FadeIn>
            <p className="label text-accent mb-6">{hero.label}</p>
            <h1 className="h-display">
              {hero.titleStart} <em>{hero.titleItalic}</em> {hero.titleEnd}
            </h1>
          </FadeIn>
          <p className="prose-measure mt-7 text-muted">{hero.pitch}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="#work" className="btn">{hero.button}</a>
            <a href="#contact" className="text-link">{hero.link}</a>
          </div>
        </div>
        <div className="order-1 md:order-2 bg-surface p-10 md:p-14 flex justify-center">
          <motion.div
            className="w-[70%] md:w-full max-w-[340px]"
            initial={{ rotate: 4, opacity: 0, y: 12 }}
            animate={{ rotate: 2, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Cover large title={hero.featured.title} kicker={hero.featured.kicker} meta={hero.featured.meta} colour={hero.featured.colour} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section aria-label="What I do" className="pb-[120px] max-md:pb-20">
      <div className="wrap">
        <ul className="border-t rule">
          {focus.map((f) => (
            <li key={f.line} className="border-b rule py-10 md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-baseline">
              <FadeIn>
                <p className="font-serif italic text-[24px] leading-snug">{f.line}</p>
              </FadeIn>
              <p className="label text-muted mt-3 md:mt-0">{f.source}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section pt-0 scroll-mt-24">
      <div className="wrap">
        <FadeIn>
          <p className="label text-accent mb-4">Selected work</p>
          <h2 className="h-display mb-14">Things I have <em>built</em></h2>
        </FadeIn>
        <ul className="border-t rule">
          {projects.map((p) => (
            <li key={p.title} className="border-b rule py-10 flex flex-col sm:flex-row gap-8">
              <FadeIn className="w-[180px] shrink-0">
                <Cover title={p.title} kicker={p.tag} colour={p.colour} />
              </FadeIn>
              <div className="prose-measure">
                <h3 className="font-serif text-[30px] leading-tight">{p.title}</h3>
                <p className="label text-muted mt-2">{p.tag}, {p.year}</p>
                <p className="mt-4">{p.description}</p>
                {p.links.length > 0 && (
                  <p className="mt-5 flex gap-6">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} className="text-link" target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          More code and coursework on{" "}
          <a href={site.github} className="text-link" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  );
}

function Portrait() {
  const [failed, setFailed] = useState(false);
  // Drop a photo at public/portrait.jpg and it appears here automatically.
  if (!failed) {
    return (
      <img
        src="/portrait.jpg"
        alt="Portrait of Jeewan Khatri"
        onError={() => setFailed(true)}
        className="w-full aspect-[4/5] object-cover"
      />
    );
  }
  return (
    <div className="w-full aspect-[4/5] bg-paper border rule flex items-center justify-center" role="img" aria-label="Jeewan Khatri monogram">
      <span className="font-serif text-[96px] text-accent leading-none">JK</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section bg-surface scroll-mt-24">
      <div className="wrap grid md:grid-cols-[340px_1fr] gap-12 md:gap-20 items-start">
        <FadeIn><Portrait /></FadeIn>
        <div>
          <FadeIn>
            <p className="label text-accent mb-4">About</p>
            <h2 className="h-display mb-10">Hello, I am <em>Jeewan</em></h2>
          </FadeIn>
          <div className="prose-measure space-y-6">
            {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
          </div>
          <p className="label text-muted mt-10">{about.line}</p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section scroll-mt-24">
      <div className="wrap">
        <FadeIn>
          <p className="label text-accent mb-4">Experience</p>
          <h2 className="h-display mb-14">Where I <em>work</em></h2>
        </FadeIn>
        <div className="border-t rule">
          <div className="hidden md:grid grid-cols-[120px_1.3fr_1fr_120px] gap-6 py-4 border-b rule label text-muted">
            <span>When</span><span>Role</span><span>Where</span><span>City</span>
          </div>
          {experience.map((e) => (
            <div key={e.role + e.place} className="border-b rule py-6 md:grid md:grid-cols-[120px_1.3fr_1fr_120px] md:gap-6 md:items-baseline">
              <span className="label text-muted block md:inline">{e.when}</span>
              <span className="font-serif text-[22px] block mt-1 md:mt-0">{e.role}</span>
              <span className="block">{e.place}</span>
              <span className="block text-muted">{e.city}</span>
            </div>
          ))}
          <div className="border-b rule py-6 md:grid md:grid-cols-[120px_1.3fr_1fr_120px] md:gap-6 md:items-baseline">
            <span className="label text-muted block md:inline">2024 to 2027</span>
            <span className="font-serif text-[22px] block mt-1 md:mt-0">BSc Digital Media</span>
            <span className="block">UWE Bristol</span>
            <span className="block text-muted">Bristol</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(`Hi Jeewan,\n\n\n\nReply to: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="wrap text-center flex flex-col items-center">
        <FadeIn><h2 className="h-display">{contact.heading}</h2></FadeIn>
        <p className="prose-measure mt-6 text-muted">{contact.text}</p>
        <form onSubmit={onSubmit} className="mt-12 w-full max-w-[520px] flex flex-col sm:flex-row gap-6 sm:items-end">
          <label className="flex-1 text-left">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={contact.placeholder}
              className="w-full bg-transparent border-0 border-b-[1.5px] border-ink py-3 text-[18px] placeholder:text-muted focus:outline-none"
            />
          </label>
          <button type="submit" className="btn">{contact.button}</button>
        </form>
        <p className="mt-8 text-[16px] text-muted">
          Or write to <a href={`mailto:${site.email}`} className="text-link">{site.email}</a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t rule">
      <div className="wrap py-8 flex flex-col md:flex-row gap-4 justify-between text-[16px]">
        <p>{site.name}, {site.year}</p>
        <ul className="flex gap-6">
          <li><a href={site.github} className="text-link" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={`mailto:${site.email}`} className="text-link">Email</a></li>
          <li><a href="#top" className="text-link">Back to top</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Focus />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
