import PageHero from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

const OnlineBooking = () => {
  return (
    <>
      <PageHero
        title="Online Booking"
        subtitle="Book your telemedicine appointments including prescription renewals online."
        breadcrumb="Welcome / Online Booking"
      />

      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12">
            <a
              href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open Online Booking
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              This service is now available to all patients with a family physician at our clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">When</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can now book your telemedicine appointments (telephone or video) including prescription renewals online.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Please call the clinic at 250-768-6920 to book your appointment if there are no online booking spots available or you need an onsite clinic appointment with your family physician.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">How</h3>
              <p className="text-muted-foreground leading-relaxed">
                You will need to enter your name, birthday and healthcare number.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                You will need to have a valid email address.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
            >
              Westside Medical Associates Online Appointment Booking
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineBooking;
