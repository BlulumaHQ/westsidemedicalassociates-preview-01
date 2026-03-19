import PageHero from "@/components/PageHero";

const SkinCare = () => {
  return (
    <>
      <PageHero
        title="Skin Cancer Screening Clinic"
        subtitle="Specialized skin cancer screening and diagnosis services."
        breadcrumb="Welcome / Skin Cancer Screening Clinic"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card text-center md:col-span-1">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">SM</span>
              </div>
              <h3 className="font-semibold text-foreground">Dr. Stefan Milanovic</h3>
              <p className="text-sm text-muted-foreground mt-1">MD, CCFP</p>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Now Accepting Referrals for Skin Care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Stefan Milanovic is now accepting referrals for skin cancer screening and diagnosis. If you are seeking specialized support in managing skin and related conditions, we're here to help.
              </p>

              <div className="bg-primary/5 border border-primary/10 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">How to Refer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Simply have your family physician send a referral letter to Dr. Stefan Milanovic at Westside Medical Associates:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    Email:{" "}
                    <a href="mailto:admin@wsmed.ca" className="text-primary hover:underline">
                      admin@wsmed.ca
                    </a>
                  </li>
                  <li>Fax: 250-768-6907</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  We will take it from there and ensure you receive prompt attention.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6 italic">
                Thank you for entrusting us with your care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkinCare;
