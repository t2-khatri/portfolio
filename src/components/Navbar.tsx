import { useEffect, useState } from "react";
import clsx from "clsx";
import { site } from "../content";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b rule">
      <div className="wrap">
        {/* Desktop */}
        <div
          className={clsx(
            "hidden md:flex transition-all duration-300",
            compact ? "flex-row items-center justify-between py-4" : "flex-col items-center py-7 gap-2"
          )}
        >
          <a href="#top" className="font-serif text-[26px] leading-none">{site.name}</a>
          <nav aria-label="Main">
            <ul className="flex gap-8">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="label text-muted hover:text-ink transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between py-4">
          <a href="#top" className="font-serif text-[22px] leading-none">{site.name}</a>
          <button
            className="text-link label"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden border-t rule bg-paper">
          <ul className="wrap py-2">
            {site.nav.map((n) => (
              <li key={n.href} className="border-b rule last:border-0">
                <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-[24px]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
