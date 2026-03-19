import PageHero from "@/components/PageHero";
import { Mail } from "lucide-react";

const physicians = [
  "Dr. Nadeem Ackbarally",
  "Dr. Rehana Ahmed",
  "Dr. Amy Boalch",
  "Dr. Anne Davies",
  "Dr. Lindapeth Iyare",
  "Dr. Saad Khan",
  "Dr. Stefan Milanovic",
  "Dr. Olu Onakoya",
  "Dr. Ajibola Osire",
  "Dr. Toye Oyelese",
  "Dr. Elliot Raymond-Hornby",
  "Dr. Garland Reynolds",
  "Dr. Bret Schifke",
  "Dr. Lilian Shyman",
  "Dr. Barbara Ugwonali",
  "Dr. Unjali Malhotra",
  "Dr. Varun Dravid",
  "Dr. Priscilla Tetey Asiedu",
  "Dr. Lysanda Madzinga",
];

const nurses = ["Tara", "Grace"];

const moas = [
  "Tanya (MOA Leader)",
  "Yolanda",
  "Danielle",
  "Sarah",
  "Anya",
  "Alexandra",
  "Jasmeen",
  "Jupneet",
  "Tashia",
  "Beth",
  "Aleasha",
];

const ClinicStaff = () => {
  return (
    <>
      <PageHero
        title="Clinic Staff"
        subtitle="Meet the dedicated team at Westside Medical Associates."
        breadcrumb="Welcome / Clinic Staff"
      />

      <section className="section-padding">
        <div className="container-site">
          {/* Physicians */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Physicians</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {physicians.map((name) => (
                <div key={name} className="service-card py-5 px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">
                      {name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nurses */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Registered Nurses</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nurses.map((name) => (
                <div key={name} className="service-card py-5 px-6 text-center">
                  <p className="font-medium text-foreground">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MOAs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Medical Office Assistants</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moas.map((name) => (
                <div key={name} className="service-card py-5 px-6 text-center">
                  <p className="font-medium text-foreground text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Clinic Director</h3>
              <p className="text-muted-foreground font-medium">Vicky Gore</p>
              <a
                href="mailto:vicky@wsmed.ca"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                <Mail className="w-4 h-4" /> vicky@wsmed.ca
              </a>
            </div>
            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Medical Director</h3>
              <p className="text-muted-foreground font-medium">Dr. Toye Oyelese</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicStaff;
