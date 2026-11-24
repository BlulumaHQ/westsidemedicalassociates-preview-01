import { Link } from "react-router-dom";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import heroImage from "@/assets/hero-clinic.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted">
        <div className="container-site grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-2.5 self-start rounded-full border border-input bg-white px-4 py-2 text-[13px] font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-[#2E8B57]" aria-hidden="true" />
              We are now taking new patients
            </span>
            <h1 className="text-[42px] font-bold leading-[1.04] tracking-[-0.04em] text-primary md:text-[60px] lg:text-[72px]">
              Family medicine for West Kelowna —{" "}
              <span className="font-medium italic text-secondary">and beyond.</span>
            </h1>
            <p className="max-w-[520px] text-lg leading-relaxed text-muted-foreground">
              Comprehensive, concise, compassionate, competent and continuous care for you and your family — plus specialized clinics under one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-7 !py-4 text-base">
                Book an Appointment
              </a>
              <Link to="/clinic-information" className="btn-outline !px-7 !py-4 text-base">
                Clinic Information
              </Link>
            </div>
            <p className="text-[13px] text-muted-foreground">Family medicine services are for registered patients only.</p>
          </div>
          <div className="flex flex-col gap-4">
            <img src={heroImage} alt="Westside Medical Associates reception area" className="h-[300px] w-full rounded-2xl object-cover md:h-[420px]" />
            <div className="grid grid-cols-2 gap-4">
              {SITE.hours.map((h) => (
                <div key={h.label} className="flex flex-col gap-1 rounded-2xl bg-white p-5">
                  <span className="eyebrow">{h.label}</span>
                  <span className="text-xl font-bold text-primary">{h.time}</span>
                  <span className="text-[13px] text-muted-foreground">{h.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized clinics */}
      <section className="section-padding">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex max-w-2xl flex-col gap-3">
              <span className="eyebrow">Specialized clinics</span>
              <h2 className="text-3xl text-primary md:text-[48px] md:leading-[1.08]">Focused care for your complete health and wellness</h2>
            </div>
            <Link to="/clinic-information" className="border-b-2 border-primary pb-1 text-[15px] font-semibold text-primary">
              All clinic info
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.path} to={s.path} className="service-card flex flex-col gap-4">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.tone === "red" ? "bg-[#FBEDEC] text-secondary" : "bg-accent text-primary"}`}>
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="text-[21px] font-bold text-primary">
                  {s.title}
                  {s.isNew && (
                    <span className="ml-2 inline-block rounded-full bg-secondary px-2.5 py-1 align-middle text-[11px] font-bold tracking-wide text-white">NEW</span>
                  )}
                </span>
                <span className="text-[15px] leading-relaxed text-muted-foreground">{s.description}</span>
                <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
            <Link to="/clinic-information" className="flex flex-col justify-between gap-4 rounded-2xl bg-primary p-8 text-white">
              <span className="text-[21px] font-bold">Family Medicine</span>
              <span className="text-[15px] leading-relaxed text-[#C3CEE0]">Continuous, whole-family care for our registered patients.</span>
              <span className="flex items-center gap-1.5 text-sm font-semibold">Clinic info <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* New services */}
      <section className="container-site pb-20 md:pb-28">
        <div className="grid overflow-hidden rounded-3xl bg-muted lg:grid-cols-2">
          <img src={clinicInterior} alt="Exam room at Westside Medical Associates" className="h-[300px] w-full object-cover lg:h-full" />
          <div className="flex flex-col gap-5 p-8 md:p-14">
            <span className="eyebrow">New services</span>
            <h2 className="text-3xl text-primary md:text-[44px] md:leading-[1.1]">Trigger point &amp; joint injections</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Safe, evidence-based treatments used to alleviate myofascial pain and joint discomfort, as part of our expanded pain management services.
            </p>
            <ol className="flex flex-col gap-3 text-[15px] text-primary">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">1</span>
                Your family physician sends a referral letter to Westside Medical Associates
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">2</span>
                We ensure you receive prompt attention
              </li>
            </ol>
            <Link to="/pain-clinic" className="btn-primary self-start">Learn about our Pain Clinic</Link>
          </div>
        </div>
      </section>

      {/* AI note + contact */}
      <section className="container-site grid gap-5 pb-20 md:pb-28 lg:grid-cols-3">
        <div className="flex gap-5 rounded-2xl border border-border p-8 lg:col-span-2">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
            <FileText className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-primary">Innovative AI-powered transcription</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Our clinic uses artificial intelligence for clinic note transcription. We appreciate your consent during your visit and are happy to answer any questions about this approach.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-2xl bg-secondary p-8 text-white">
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FBDCD9]">Contact</span>
          <a href={SITE.phoneHref} className="text-[28px] font-bold">{SITE.phone}</a>
          <span className="text-sm text-[#FBE6E4]">Fax {SITE.fax} · {SITE.email}</span>
        </div>
      </section>

      {/* Visit */}
      <section className="container-site pb-20 md:pb-28">
        <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-3xl">
          <img src={clinicExterior} alt="Westside Medical Associates building" className="absolute inset-0 h-full w-full object-cover" />
          <div className="relative m-5 flex flex-wrap items-center gap-6 rounded-2xl bg-white p-6 md:m-7 md:p-8">
            <MapPin className="h-6 w-6 text-secondary" />
            <div className="flex flex-col gap-1">
              <span className="eyebrow">Visit our clinic</span>
              <span className="text-lg font-bold text-primary md:text-[22px]">{SITE.street}, {SITE.city}</span>
            </div>
            <Link to="/clinic-information" className="btn-primary">Get directions</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
