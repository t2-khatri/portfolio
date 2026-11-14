import { motion } from "motion/react";
import { videos } from "../content";
import FadeIn from "./FadeIn";

const PLACEHOLDER = ["#3A3430", "#4A3F38", "#5A4A40", "#3F3A35"];

function Frame({ i }: { i: number }) {
  const f = videos.frames[i];
  const id = f?.id;
  const inner = id ? (
    <img
      src={`https://img.youtube.com/vi/${id}/${f.thumb}.jpg`}
      alt={`Frame ${i + 1} from a YouTube video`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  ) : (
    <div className="w-full h-full flex items-end p-3" style={{ background: PLACEHOLDER[i] }}>
      <span className="meta text-[#D8CFC1]">Frame {String(i + 1).padStart(2, "0")}</span>
    </div>
  );
  return (
    <div className="w-[220px] md:w-auto md:flex-1 aspect-video shrink-0 overflow-hidden">
      {id ? (
        <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" className="block w-full h-full">
          {inner}
        </a>
      ) : inner}
    </div>
  );
}

function Sprockets() {
  return (
    <div className="sprockets" aria-hidden="true">
      {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
    </div>
  );
}

// Film strip of four stills, borrowed from the Northline brief.
// Nothing plays here: the link opens YouTube.
export default function Videos() {
  return (
    <section id="videos" className="dark scroll-mt-24 px-4 pb-4">
      <div className="bg-[#2A2622] rounded-[24px] section">
        <div className="wrap">
          <FadeIn>
            <p className="meta text-signal mb-4">002/ Film</p>
            <h2 className="h-display">Behind the <em>camera</em></h2>
          </FadeIn>
          <p className="prose-measure mt-6 text-muted-d">{videos.intro}</p>

          <div className="mt-14 strip-scroll">
            <motion.div
              className="bg-[#12100E] min-w-[960px] md:min-w-0 overflow-hidden"
              initial={{ x: 40 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Sprockets />
              <div className="flex gap-3 px-3">
                {[0, 1, 2, 3].map((i) => <Frame key={i} i={i} />)}
              </div>
              <Sprockets />
            </motion.div>
          </div>
          <div className="border-t rule mt-6 pt-4 flex flex-col md:flex-row md:justify-between gap-4">
            <p className="meta text-muted-d">{videos.caption}</p>
          </div>

          <ul className="mt-12 border-t rule">
            {videos.films.map((f) => (
              <li key={f.href} className="border-b rule py-6 md:grid md:grid-cols-[1.4fr_1fr_auto] md:gap-8 md:items-baseline">
                <span className="font-serif text-[26px] block">{f.title}</span>
                <span className="block text-muted-d text-[16px] mt-1 md:mt-0">
                  {f.meta} <span className="meta text-signal block mt-1">{f.role}</span>
                </span>
                <a href={f.href} className="text-link inline-block mt-3 md:mt-0" target="_blank" rel="noreferrer">Watch on YouTube</a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-8">
            <a href={videos.preproduction.href} className="text-link" target="_blank" rel="noreferrer">{videos.preproduction.label}</a>
            {videos.channel && (
              <a href={videos.channel} className="text-link" target="_blank" rel="noreferrer">
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
