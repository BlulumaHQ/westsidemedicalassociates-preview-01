import PageHero from "@/components/PageHero";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { Link } from "react-router-dom";

const ClinicInformation = () => {
  return (
    <>
      <PageHero
        title="Clinic Information"
        subtitle="A family health and wellness centre providing comprehensive, compassionate & continuous medical care."
        breadcrumb="Welcome / Clinic Information"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-5 mb-8">
                <p className="font-semibold text-foreground">
                  Family medicine services are only for patients registered with this clinic.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We are now taking{" "}
                  <span className="text-primary font-semibold">new patients</span>.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                Family Health & Wellness Centre
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each patient has a designated family physician but has access to all the other medical doctors if their family physician is unavailable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Attendance is by booked appointments only by calling (250) 768-6920. Same day appointments may be available for urgent cases.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Patients are encouraged to make a list of their medical concerns and book a separate appointment for each unrelated medical concern.
              </p>

              <a
                href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mb-8"
              >
                Book an Appointment Online
              </a>

              <p className="text-sm text-muted-foreground italic">
                This service is now available to all patients with a family physician at our clinic.
              </p>
            </div>
            <div>
              <img
                src={clinicInterior}
                alt="Westside Medical clinic interior"
                className="rounded-xl shadow-lg w-full mb-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-site max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Extended Hours</h2>
          <div className="service-card mb-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Monday – Friday</h4>
                <p className="text-muted-foreground">8AM – 7PM</p>
                <p className="text-sm text-muted-foreground">By Appointment Only</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Saturday</h4>
                <p className="text-muted-foreground">8AM – 2PM</p>
                <p className="text-sm text-muted-foreground">Walk-in & Appointments</p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Westside Medical Clinic is now open from 8AM - 7PM (Mon - Fri) and on Saturdays, 8AM - 2PM. Clinic patients will be seen by the Family Physician on duty. The clinic on Saturday is on a 'walk-in' and pre-booked appointments basis.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-3">New Services</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <Link to="/pain-clinic" className="text-primary font-semibold hover:underline">
              Trigger Point Injections and Joint Injections
            </Link>{" "}
            are now available at our clinic.
          </p>

          <div className="bg-primary/5 border border-primary/10 rounded-lg p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Please note that our clinic uses "Artificial Intelligence" for clinic note transcription. We would appreciate you providing consent to use this during your visit and are happy to answer any questions that you may have about this innovative approach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicInformation;
