// A 16 by 16 pixel character drawn with divs. Two frames, swapped with steps().
// B = bone, G = signal green, . = empty
const FRAME_A = [
  "......GGGG......",
  ".....GGGGGG.....",
  ".....BBBBBB.....",
  ".....B.BB.B.....",
  ".....BBBBBB.....",
  "......BBBB......",
  "....GGGGGGGG....",
  "...B.GGGGGG.B...",
  "...B.GGGGGG.B...",
  ".....GGGGGG.....",
  ".....BB..BB.....",
  ".....BB..BB.....",
  "....BB....BB....",
  "....BB....BB....",
  "...BB......BB...",
  "...BB......BB...",
];
const FRAME_B = [
  "......GGGG......",
  ".....GGGGGG.....",
  ".....BBBBBB.....",
  ".....B.BB.B.....",
  ".....BBBBBB.....",
  "......BBBB......",
  "....GGGGGGGG....",
  "....BGGGGGGB....",
  "....BGGGGGGB....",
  ".....GGGGGG.....",
  ".....BB..BB.....",
  ".....BB..BB.....",
  "......BBBB......",
  "......BBBB......",
  ".....BB.BB......",
  ".....BB.BB......",
];

const PX = 2; // each pixel is 2 css px, so the sprite is 32 by 32

function Frame({ rows, cls }: { rows: string[]; cls: string }) {
  return (
    <div className={`walker-frame ${cls}`} aria-hidden="true">
      {rows.map((row, y) =>
        row.split("").map((c, x) =>
          c === "." ? null : (
            <div
              key={`${x}-${y}`}
              style={{
                position: "absolute",
                left: x * PX,
                top: y * PX,
                width: PX,
                height: PX,
                background: c === "G" ? "#79C043" : "#F7F3EA",
              }}
            />
          )
        )
      )}
    </div>
  );
}

export default function PixelWalker() {
  return (
    <div className="walker-track border-b rule" aria-hidden="true">
      <div className="walker" style={{ width: 16 * PX, height: 16 * PX }}>
        <Frame rows={FRAME_A} cls="a" />
        <Frame rows={FRAME_B} cls="b" />
      </div>
    </div>
  );
}
