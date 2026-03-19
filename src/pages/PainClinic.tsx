import PageHero from "@/components/PageHero";

const PainClinic = () => {
  return (
    <>
      <PageHero
        title="Pain Clinic"
        subtitle="Trigger point injections and joint injections as part of multi-modal pain management."
        breadcrumb="Welcome / Pain Clinic"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          {/* Dr. Milanovic - TPI */}
          <div className="mb-16">
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
                  Now Accepting Referrals for Trigger Point Injections
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Stefan Milanovic is now accepting referrals for trigger point injections (TPI) as part of a multi-modal pain management strategy. TPIs are safe, evidence-based procedures used to alleviate myofascial pain in patients who have not responded to conservative management.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3">Common Indications</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Chronic neck or back pain, Myofascial pain syndrome
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Tension headaches related to cervical muscle trigger points
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Fibromyalgia (targeted, focal muscle involvement)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Piriformis syndrome, Shoulder girdle pain
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Adjunct to physiotherapy, massage, or IMS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dr. Khan - Joint Injections */}
          <div className="border-t border-border pt-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="service-card text-center md:col-span-1">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">SK</span>
                </div>
                <h3 className="font-semibold text-foreground">Dr. Saad Khan</h3>
                <p className="text-sm text-muted-foreground mt-1">MBBS, MD, MRCEM, MRCGP, CCFP</p>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Now Accepting Referrals for Joint Injections
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  His current scope includes shoulders, knees, first CMC joint, trigger fingers, trochanteric bursitis, and lateral and medial epicondylitis (tennis and golfer's elbow).
                </p>
              </div>
            </div>
          </div>

          {/* Procedure & Referral Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">Procedure Overview</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  In-office treatment using local anesthetic (e.g., Lidocaine 1%) with or without corticosteroid
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Patients can typically resume normal activities the same day
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Follow-up coordinated with referring provider and/or allied health (PT, RMT)
                </li>
              </ul>
            </div>

            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">How to Refer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Simply have your family physician send a referral letter to Westside Medical Associates:
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
                Please fax relevant clinical notes, imaging (if available), and list of previous conservative treatments.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-destructive/5 border border-destructive/10 rounded-lg p-5">
            <p className="text-sm text-foreground font-medium">
              Please note that we do not write narcotic prescriptions for patients.
            </p>
          </div>

          <p className="text-muted-foreground text-center mt-8 italic">
            Thank you for entrusting us with your care.
          </p>
        </div>
      </section>
    </>
  );
};

export default PainClinic;
