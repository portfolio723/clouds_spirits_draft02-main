import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageFooterNav, PageHeader } from "@/components/Page";
import { FeedbackBox } from "@/components/FeedbackBox";
import { brandColors } from "@/lib/brand";
import { useReview } from "@/lib/review-store";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Color Direction — Clouds & Spirits Draft 02" },
      {
        name: "description",
        content:
          "The Clouds & Spirits Draft 02 palette: espresso, ivory, champagne, gold, taupe and olive, shown across menu, packaging and social.",
      },
      { property: "og:title", content: "Color Direction — Clouds & Spirits Draft 02" },
      {
        property: "og:description",
        content: "A palette drawn from the interior, warm lighting, marble and wood.",
      },
    ],
  }),
  component: Colors,
});

function Colors() {
  const { review, set } = useReview();
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        label="Draft 02"
        title="Color Direction"
        intro="Hover or tap any color card to expand it and see where it is used across the brand identity."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6 pb-2">
        {brandColors.map((color) => {
          const isHovered = hoveredColor === color.name;
          return (
            <div
              key={color.hex}
              onMouseEnter={() => setHoveredColor(color.name)}
              onMouseLeave={() => setHoveredColor(null)}
              onClick={() => setHoveredColor(isHovered ? null : color.name)}
              style={
                isHovered
                  ? {
                      borderColor: color.hex,
                      boxShadow: `0 12px 28px -6px ${color.hex}40, 0 0 0 1px ${color.hex}`,
                    }
                  : undefined
              }
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 ease-out cursor-pointer ${
                isHovered
                  ? "-translate-y-3 bg-surface z-10"
                  : "border-border hover:-translate-y-2 hover:border-border-strong hover:shadow-md bg-card"
              }`}
            >
              <span
                className="block h-32 w-full md:h-36 transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <div className="p-5">
                <span className="block font-display text-[18px] text-foreground font-medium">
                  {color.name}
                </span>
                <span className="mt-1 block text-[14px] text-muted-foreground">
                  {color.hex} · {color.role}
                </span>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isHovered
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-3 border-t border-border"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[12px] font-semibold tracking-wider text-accent uppercase">
                      Used for
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[14px] text-foreground">
                      {color.usage.map((use) => (
                        <li key={use} className="flex items-center gap-2">
                          <span
                            className="size-2 rounded-full shrink-0 border border-black/10 shadow-xs"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[14px] text-muted-foreground">
        Hover over any colour above to see its applications.
      </p>

      <FeedbackBox
        value={review.colors_note}
        onChange={(value) => set("colors_note", value)}
        label="Anything you'd like us to change about the colours?"
      />

      <PageFooterNav
        prev={{ to: "/", label: "Overview" }}
        next={{ to: "/typography", label: "Typography" }}
      />
    </>
  );
}
