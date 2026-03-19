import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-clinic.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const images = [
  { src: heroImage, alt: "Westside Medical Associates reception area" },
  { src: clinicExterior, alt: "Westside Medical Associates exterior" },
  { src: clinicInterior, alt: "Westside Medical Associates examination room" },
];

const ClinicPhotos = () => {
  return (
    <>
      <PageHero
        title="Clinic Photo Gallery"
        subtitle="Take a virtual tour of our modern clinic facilities."
        breadcrumb="Welcome / Clinic Photo Gallery"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicPhotos;
