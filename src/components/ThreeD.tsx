import { motion } from "motion/react";
import { threeD } from "../content";
import FadeIn from "./FadeIn";
import Cover from "./Cover";

// The lead 3D section: one big render, then three pieces with who did what.
export default function ThreeD() {
  const { lead, pieces } = threeD;
  return (
    <section id="three-d" className="section bg-surface scroll-mt-24">
      <div className="wrap">
        <FadeIn>
          <p className="meta text-accent mb-4">001/ 3D</p>
          <h2 className="h-display mb-12">Made in <em>Maya</em> and Unity</h2>
        </FadeIn>

        <figure>
          <div className="overflow-hidden">
            <motion.img
              src={lead.image}
              alt={lead.caption}
              className="w-full aspect-video object-cover"
              initial={{ scale: 1.03 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <figcaption className="mt-4 border-t rule pt-4 md:flex md:justify-between md:gap-10">
            <span className="font-serif text-[22px]">{lead.title}</span>
            <span className="block prose-measure text-muted text-[16px] mt-2 md:mt-0 md:text-right">
              <span className="meta block mb-1 text-ink">{lead.tool}</span>
              {lead.caption}
            </span>
          </figcaption>
        </figure>

        <ul className="mt-20 grid md:grid-cols-3 gap-12 md:gap-10">
          {pieces.map((p) => (
            <li key={p.title}>
              <FadeIn>
                {p.image ? (
                  <img src={p.image} alt={`${p.title}, ${p.tag}`} className="w-full aspect-[4/3] object-cover" />
                ) : (
                  <div className="aspect-[4/3]">
                    <div className="h-full [&>div]:!aspect-auto [&>div]:h-full">
                      <Cover title={p.title} kicker={p.tag} meta={p.status} colour={p.colour} />
                    </div>
                  </div>
                )}
              </FadeIn>
              <p className="meta text-muted mt-5">{p.tag}</p>
              <h3 className="font-serif text-[26px] leading-tight mt-2">{p.title}</h3>
              <p className="mt-3 text-[17px]">{p.description}</p>
              <p className="mt-4 text-[15px] border-t rule pt-3">
                <span className="meta text-accent">What I did</span>
                <span className="block mt-1">{p.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
