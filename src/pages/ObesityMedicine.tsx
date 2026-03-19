import PageHero from "@/components/PageHero";
import { CheckCircle } from "lucide-react";

const ObesityMedicine = () => {
  return (
    <>
      <PageHero
        title="Weight & Lifestyle Medicine Clinic"
        subtitle="Comprehensive obesity medicine care with individualized treatment plans."
        breadcrumb="Welcome / Weight & Lifestyle Medicine Clinic"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card text-center md:col-span-1">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-2xl">RA</span>
              </div>
              <h3 className="font-semibold text-foreground">Dr. Rehana Ahmed</h3>
              <p className="text-sm text-muted-foreground mt-1">MD, CCFP</p>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Now Accepting Referrals for Weight & Lifestyle Medicine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Rehana Ahmed is now accepting referrals for comprehensive Obesity Medicine care. If you are seeking specialized support in managing obesity and related conditions, we're here to help.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">Why Refer to Us?</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Individualized Treatment Plans",
                  "Multidisciplinary Approach",
                  "Patient-Centred Care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-lg p-5">
                <h4 className="font-semibold text-foreground mb-2">How to Refer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simply have your family physician send a referral letter to Dr. Rehana Ahmed at Westside Medical Associates and we will take it from there and ensure you receive prompt attention.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6 italic">
                Thank you for entrusting us with your care. Together, let's make a positive impact on your health journey!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ObesityMedicine;
