import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { games } from "../content";
import PixelWalker from "./PixelWalker";
import Cover from "./Cover";
import FadeIn from "./FadeIn";

// Index swap: hover a title on the left, its key art swaps in on the right.
export default function Games() {
  const [active, setActive] = useState(0);
  const g = games[active];

  return (
    <section id="games" className="dark scroll-mt-24">
      <PixelWalker />
      <div className="wrap section">
        <FadeIn>
          <p className="meta text-signal mb-4">003/ Games</p>
          <h2 className="h-display mb-14">Games I have <em>made</em></h2>
        </FadeIn>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-start">
          <ul className="border-t rule">
            {games.map((game, i) => (
              <li key={game.title} className="border-b rule">
                <button
                  className="w-full text-left py-7 flex gap-5 items-start group"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="md:hidden w-16 shrink-0">
                    <Cover title={game.title} colour={game.colour} image={game.image} kicker=" " />
                  </span>
                  <span className="flex-1">
                    <span
                      className={clsx(
                        "block font-serif text-[30px] md:text-[40px] leading-tight transition-colors",
                        active === i ? "text-paper" : "text-muted-d group-hover:text-paper"
                      )}
                    >
                      {game.title}
                    </span>
                    <span className="block mt-2 text-[16px] text-muted-d">{game.line}</span>
                    <span className="block meta mt-3 text-signal">{game.meta}</span>
                  </span>
                </button>
                {game.link && (
                  <p className="pb-6 -mt-2 md:pl-0 pl-[84px]">
                    <a href={game.link.href} className="text-link text-[16px]" target="_blank" rel="noreferrer">
                      {game.link.label}
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:block sticky top-32">
            <div className="max-w-[340px] ml-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Cover large title={g.title} kicker="Game" meta={g.meta} colour={g.colour} image={g.image} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
