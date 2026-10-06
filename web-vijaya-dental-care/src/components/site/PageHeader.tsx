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
    <section className="container pb-8 pt-14 md:pb-10 md:pt-16">
      <Reveal>
        {eyebrow && (
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        )}
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
          {title} {highlight && <span className="text-aqua-gradient">{highlight}</span>}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </Reveal>
    </section>
  );
}
