import PageHero from "@/components/PageHero";

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

const PhysicianPhotos = () => {
  return (
    <>
      <PageHero
        title="Physician Photo Gallery"
        subtitle="Meet the physicians at Westside Medical Associates."
        breadcrumb="Welcome / Physician Photo Gallery"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {physicians.map((name) => {
              const initials = name
                .replace("Dr. ", "")
                .split(" ")
                .map((n) => n.charAt(0))
                .join("");
              return (
                <div key={name} className="service-card text-center">
                  <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">{initials}</span>
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhysicianPhotos;
