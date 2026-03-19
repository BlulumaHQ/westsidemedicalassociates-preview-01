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
          <p className="text-sm text-primary-foreground/60 mb-3 font-medium">{breadcrumb}</p>
        )}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle max-w-2xl">{subtitle}</p>}
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
    </section>
  );
};

export default PageHero;
