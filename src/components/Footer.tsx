import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Welcome", path: "/" },
  { label: "Clinic Info", path: "/clinic-information" },
  { label: "Online Booking", path: "/online-booking" },
  { label: "Clinic Staff", path: "/clinic-staff" },
];

const serviceLinks = [
  { label: "Women's Health & Menopause", path: "/womens-health-menopause" },
  { label: "Weight & Lifestyle Medicine", path: "/obesity-medicine" },
  { label: "Skin Cancer Screening", path: "/skin-care" },
  { label: "Pain Clinic", path: "/pain-clinic" },
  { label: "Mind Science", path: "/mind-science" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">Westside Medical</span>
              <span className="block text-xs tracking-wider uppercase opacity-70 mt-0.5">
                Associates
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Family Health & Wellness Centre providing comprehensive, compassionate, competent &
              continuous medical care in West Kelowna, BC.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/place/Westside+Medical+Associates/@49.8648136,-119.5661491,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  103 - 1135 Stevens Road, West Kelowna, BC V1Z 2S8
                </a>
              </li>
              <li>
                <a
                  href="tel:2507686920"
                  className="flex items-center gap-2.5 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  250-768-6920
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@wsmed.ca"
                  className="flex items-center gap-2.5 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  admin@wsmed.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-5">
          <p className="text-xs opacity-50 text-center">
            © {currentYear} Westside Medical Associates. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 underline"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 underline"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
