import { Link } from "react-router-dom";
import { Clock, Phone, MapPin, Calendar, ArrowRight, Stethoscope, Heart, Brain, Syringe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const services = [
  {
    title: "Women's Health & Menopause",
    description: "Peri-menopause and menopause consultations including hormone therapy, plus birth control clinic services.",
    icon: Heart,
    path: "/womens-health-menopause",
  },
  {
    title: "Weight & Lifestyle Medicine",
    description: "Comprehensive obesity medicine care with individualized treatment plans and a multidisciplinary approach.",
    icon: Stethoscope,
    path: "/obesity-medicine",
  },
  {
    title: "Skin Cancer Screening",
    description: "Specialized referral-based skin cancer screening and diagnosis services.",
    icon: Shield,
    path: "/skin-care",
  },
  {
    title: "Pain Clinic",
    description: "Trigger point injections and joint injections as part of multi-modal pain management strategies.",
    icon: Syringe,
    path: "/pain-clinic",
  },
  {
    title: "Mind Science",
    description: "The Navigational Mind Framework — a unified model of consciousness, mind, and decision.",
    icon: Brain,
    path: "/mind-science",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Westside Medical Associates reception area"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="container-site relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in">
              Family Health & Wellness Centre
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Westside Medical Associates
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive, concise, compassionate, competent & continuous care for you and your family in West Kelowna, BC.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </a>
              <Link to="/clinic-information" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="bg-secondary py-4">
        <div className="container-site flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-secondary-foreground font-semibold text-sm md:text-base">
            We Are Now Taking New Patients
          </span>
          <span className="text-secondary-foreground/70 text-sm hidden sm:inline">|</span>
          <span className="text-secondary-foreground/90 text-sm">
            Family medicine services for registered patients only
          </span>
        </div>
      </section>

      {/* Hours & Quick Info */}
      <section className="section-padding bg-section-alt">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Extended Hours</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mon – Fri: 8AM – 7PM (Appointment Only)<br />
                  Saturday: 8AM – 2PM (Walk-in & Appointments)
                </p>
              </div>
            </div>
            <div className="service-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Phone: 250-768-6920<br />
                  Fax: 250-768-6907<br />
                  Email: admin@wsmed.ca
                </p>
              </div>
            </div>
            <div className="service-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  103 - 1135 Stevens Road<br />
                  West Kelowna, BC V1Z 2S8
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Specialized Clinics
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Beyond family medicine, we offer specialized services to support your complete health and wellness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.path} to={service.path} className="service-card group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Highlight */}
      <section className="section-padding bg-section-alt">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
                New Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trigger Point Injections & Joint Injections
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are pleased to offer trigger point injections and joint injections as part of our expanded pain management services. These procedures are safe, evidence-based treatments used to alleviate myofascial pain and joint discomfort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Simply have your family physician send a referral letter to Westside Medical Associates and we will ensure you receive prompt attention.
              </p>
              <Link to="/pain-clinic" className="btn-primary">
                Learn About Our Pain Clinic <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={clinicExterior}
                alt="Westside Medical Associates clinic"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Notice */}
      <section className="section-padding">
        <div className="container-site max-w-3xl text-center">
          <div className="service-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Innovative AI-Powered Transcription
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Please note that our clinic uses "Artificial Intelligence" for clinic note transcription. We would appreciate you providing consent to use this during your visit and are happy to answer any questions that you may have about this innovative approach.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-section-alt">
        <div className="container-site section-padding">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Visit Our Clinic</h2>
            <p className="text-muted-foreground mt-3">103 - 1135 Stevens Road, West Kelowna, BC V1Z 2S8</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.5!2d-119.5661491!3d49.8648136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df318122e8c43%3A0xea4e1339e62b29db!2sWestside%20Medical%20Associates!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Westside Medical Associates location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
