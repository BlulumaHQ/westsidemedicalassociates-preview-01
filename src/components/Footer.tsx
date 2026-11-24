import { Link } from "react-router-dom";
import { GALLERY, MAIN_NAV, SERVICES, SITE } from "@/lib/site";
import { Logo } from "./Header";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-[#C3CEE0]">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Logo light />
          <p className="max-w-sm text-sm leading-relaxed">
            Family Health &amp; Wellness Centre providing comprehensive, compassionate, competent and continuous care in West Kelowna, BC.
          </p>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent self-start text-sm">
            Book Online
          </a>
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="font-bold text-white">Clinic</span>
          {MAIN_NAV.map((l) => (
            <Link key={l.path} to={l.path} className="hover:text-white">{l.label}</Link>
          ))}
          {GALLERY.map((l) => (
            <Link key={l.path} to={l.path} className="hover:text-white">{l.label}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="font-bold text-white">Services</span>
          {SERVICES.map((s) => (
            <Link key={s.path} to={s.path} className="hover:text-white">{s.title}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <span className="font-bold text-white">Contact</span>
          <span>{SITE.street}</span>
          <span>{SITE.city}</span>
          <a href={SITE.phoneHref} className="hover:text-white">Tel {SITE.phone}</a>
          <span>Fax {SITE.fax}</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-[#8C9BB8] md:flex-row md:justify-between">
          <span>
            © {currentYear} Westside Medical Associates. All rights reserved.{" "}
            <span data-concept-note>Design concept for portfolio purposes only. Not the official website of Westside Medical Associates.</span>
          </span>
          <span>
            Web Design by <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Bluluma</a> | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">SwiftLift</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
