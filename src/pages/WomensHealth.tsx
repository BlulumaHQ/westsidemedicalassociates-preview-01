import PageHero from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

const WomensHealth = () => {
  return (
    <>
      <PageHero
        title="Women's Health & Menopause Clinic"
        subtitle="Specialized care for women's health across the reproductive lifespan."
        breadcrumb="Welcome / Women's Health & Menopause Clinic"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            {/* Dr. Malhotra */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Primary Women's Health Care & Menopause Clinic
              </h2>
              <div className="mt-8 grid md:grid-cols-3 gap-8">
                <div className="service-card text-center md:col-span-1">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">UM</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Dr. Unjali Malhotra</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    MD, CCFP Women's Health FCFP NCMP
                  </p>
                  <a
                    href="https://themenopausesite.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-3"
                  >
                    themenopausesite.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Unjali Malhotra is from Prince Albert, Saskatchewan. She completed her residency in Winnipeg, Manitoba, where she created and completed a women's health residency program after family residency. She has completed extensive post graduate menopause training under many of the most prominent menopause providers throughout Canada.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Malhotra is the founder and former program director of the UBC Women's Health Residency Program. She has also held the positions of Medical Director of Options for Sexual Health BC and the Chair of the Society of Obstetricians and Gynaecologists of the Canadian Foundation for Women's Health.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    She is the recipient of the King Charles III Coronation Medal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Malhotra is now available at Westside Medical Associates to do peri-menopause and menopause consultations including hormone therapy. This service is not covered by MSP. Initial appointments are 30–40 minutes.
                  </p>
                  <div className="bg-primary/5 border border-primary/10 rounded-lg p-5 mt-6">
                    <p className="text-sm text-foreground font-medium mb-2">How to Book</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Patients can self-refer and are required to complete the Medical Intake Questionnaire. Completed forms can be emailed to{" "}
                      <a href="mailto:patients@wsmed.ca" className="text-primary hover:underline">
                        patients@wsmed.ca
                      </a>{" "}
                      or faxed to 250-768-6907 or returned to the clinic in person.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Reynolds - Birth Control */}
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Birth Control Clinic</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card text-center md:col-span-1">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-2xl">GR</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Dr. Garland Reynolds</h3>
                  <p className="text-sm text-muted-foreground mt-1">MD, MRCGP, CCFP</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Garland Reynolds grew up in Jamaica. He attended the Faculty of Medicine, Cienfuegos, Cuba and graduated in July 2007 as an MD. He has a diploma in Obstetrics & Gynecology (DRCOG) from the Royal College of Obstetrics and Gynecology and completed his training in General Practice (Family Medicine) in the UK in August 2021.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He is a member of the Royal College of General Practitioners (MRCGP) UK, College of Family Physicians, Canada and the Medical Council of Jamaica.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    He is now available at Westside Medical Associates to do IUD insertions and the birth control implant (AKA Nexplanon). See your family physician for a referral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WomensHealth;
