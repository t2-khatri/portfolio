import clsx from "clsx";

// A typographic "cover" for a project, like a hardback jacket.
// Swap for a real screenshot later by passing `image`.
export default function Cover({
  title,
  kicker,
  meta,
  colour,
  image,
  className,
  large = false,
}: {
  title: string;
  kicker?: string;
  meta?: string;
  colour: string;
  image?: string;
  className?: string;
  large?: boolean;
}) {
  if (image) {
    return <img src={image} alt={title} className={clsx("w-full aspect-[2/3] object-cover", className)} />;
  }
  return (
    <div
      className={clsx("relative w-full aspect-[2/3] text-white flex flex-col justify-between", large ? "p-8" : "p-5", className)}
      style={{ backgroundColor: colour }}
      role="img"
      aria-label={`${title} project cover`}
    >
      <div className="absolute inset-3 border border-white/30 pointer-events-none" />
      <span className="label relative" style={{ fontSize: 14 }}>{kicker ?? "Jeewan Khatri"}</span>
      <div className="relative">
        <span className="block w-8 h-px bg-white/70 mb-4" />
        <span className={clsx("font-serif block leading-tight", large ? "text-[34px] md:text-[42px]" : "text-[22px]")}>{title}</span>
        {meta && <span className="block mt-3 text-[14px] leading-snug opacity-90">{meta}</span>}
      </div>
    </div>
  );
}
