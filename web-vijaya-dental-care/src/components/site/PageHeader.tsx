import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
}

/** Large page title block used at the top of every inner page. */
export default function PageHeader({ eyebrow, title, highlight, subtitle }: PageHeaderProps) {
  return (
    <section className="container pb-12 pt-32 md:pb-16 md:pt-40">
      <Reveal>
        {eyebrow && (
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
          {title} {highlight && <span className="text-aqua-gradient">{highlight}</span>}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </Reveal>
    </section>
  );
}
