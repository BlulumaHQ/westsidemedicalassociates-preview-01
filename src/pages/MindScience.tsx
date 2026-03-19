import PageHero from "@/components/PageHero";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Navigational Mind Framework",
    subtitle: "A Unified Model of Consciousness, Mind, and Decision",
    url: "https://www.wsmed.ca/resources/Mind-Science/The_Navigational_Mind_Framework.pdf",
  },
  {
    title: "Navigational Mind (Book)",
    url: "https://www.wsmed.ca/resources/Mind-Science/Navigational-Mind---The-Book-Version.pdf",
  },
  {
    title: "Mindlessness",
    url: "https://www.wsmed.ca/resources/Mind-Science/Mindlessness---General-Reader.pdf",
  },
  {
    title: "Raising the Capable Child",
    url: "https://www.wsmed.ca/resources/Mind-Science/RAISING-THE-CAPABLE-CHILD--compressed.pdf",
  },
  {
    title: "Navigating Blind",
    url: "https://www.wsmed.ca/resources/Mind-Science/Navigating-Blind.pdf",
  },
];

const MindScience = () => {
  return (
    <>
      <PageHero
        title="Mind Science"
        subtitle="The Navigational Mind Framework — understanding how minds actually behave."
        breadcrumb="Welcome / Mind Science"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="service-card text-center md:col-span-1">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">TO</span>
              </div>
              <h3 className="font-semibold text-foreground">Dr. Toye Oyelese</h3>
              <p className="text-sm text-muted-foreground mt-1">MBBS, CCFP, FCFP</p>
              <p className="text-xs text-muted-foreground mt-1">
                Certificate in Medical Acupuncture, U of A
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Clinical Associate Professor, Faculty of Medicine, UBC
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The "Navigational Mind Framework" emerged over more than four decades of clinical practice, personal reconstruction, and sustained attention to how minds actually behave.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://navigationalmind.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Navigational Mind <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://podcast.navigationalmind.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Podcasts <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Publications</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {publications.map((pub) => (
                <a
                  key={pub.title}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </p>
                    {pub.subtitle && (
                      <p className="text-xs text-muted-foreground mt-1">{pub.subtitle}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MindScience;
