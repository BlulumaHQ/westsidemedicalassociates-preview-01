interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div className="container-site relative z-10">
        {breadcrumb && (
          <p className="eyebrow mb-4">{breadcrumb}</p>
        )}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
