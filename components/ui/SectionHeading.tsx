import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
