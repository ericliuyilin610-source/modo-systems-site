type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs font-medium uppercase tracking-[0.14em] text-gray-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{title}</h2>
      {description ? <p className="doc-copy">{description}</p> : null}
    </div>
  );
}
