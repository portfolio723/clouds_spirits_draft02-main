import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageFooterNav } from "@/components/Page";
import { LogoVersionsSection } from "@/components/LogoVersionsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clouds & Spirits — Brand Exploration, Draft 02" },
      {
        name: "description",
        content:
          "Review the brand direction for Clouds & Spirits: colour, typography and logo directions, with space for your feedback.",
      },
      { property: "og:title", content: "Clouds & Spirits — Brand Exploration, Draft 02" },
      {
        property: "og:description",
        content: "Your brand direction is ready to review.",
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <section className="pt-6 sm:pt-10 pb-2 md:pt-20 md:pb-4">
        <p className="label-xs">Brand exploration · Draft 02</p>
        <h1 className="mt-3 text-[36px] leading-[1.05] sm:text-[40px] md:text-[64px]">
          Clouds &amp; Spirits
        </h1>
        <p className="mt-4 max-w-[52ch] text-[17px] text-foreground sm:text-[18px] md:text-[20px]">
          Your brand direction is ready to review.
        </p>
        <p className="mt-3 max-w-[62ch] text-[15px] text-muted-foreground sm:text-[16px] md:text-[17px]">
          We've explored the visual identity across color, typography and logo directions. Take a
          look through the options and tell us what feels right.
        </p>
      </section>

      {/* Action Buttons and About Box */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/colors"
            className="inline-flex h-12 items-center rounded-xl bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Draft 02
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className="inline-flex h-12 items-center rounded-xl border border-border-strong bg-background px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-surface"
          >
            About this review
          </button>
        </div>

        {open ? (
          <div className="mt-6 max-w-[62ch] rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-[20px]">What is this?</h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              This is an early visual exploration, not the final brand system. Your feedback will
              help us refine the selected direction before we develop the complete identity.
            </p>
          </div>
        ) : null}
      </div>

      {/* Feature Cards Section */}
      <section className="mt-12 md:mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { title: "Color", text: "Six colours drawn from the interior, lighting and materials." },
          { title: "Typography", text: "Two type directions to compare side by side." },
          { title: "Logos", text: "Logo variations and real-world applications showcase." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-border p-6">
            <h2 className="text-[20px]">{item.title}</h2>
            <p className="mt-2 text-[14px] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Logo Directions Section */}
      <div>
        <LogoVersionsSection
          title="Logo Directions"
          subtitle="Explore the logo version concepts on dark backgrounds."
          className="mt-12 md:mt-16 mb-8 md:mb-12"
        />
      </div>

      <div>
        <PageFooterNav next={{ to: "/colors", label: "Color direction" }} />
      </div>
    </div>
  );
}
