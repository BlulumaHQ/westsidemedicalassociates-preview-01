import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const mainNav = [
  { label: "Welcome", path: "/" },
  { label: "Clinic Info", path: "/clinic-information" },
  { label: "Online Booking", path: "/online-booking" },
  { label: "Clinic Staff", path: "/clinic-staff" },
];

const servicesNav = [
  { label: "Women's Health & Menopause", path: "/womens-health-menopause" },
  { label: "Weight & Lifestyle Medicine", path: "/obesity-medicine" },
  { label: "Skin Cancer Screening", path: "/skin-care" },
  { label: "Pain Clinic", path: "/pain-clinic" },
  { label: "Mind Science", path: "/mind-science" },
];

const galleryNav = [
  { label: "Physician Photos", path: "/physician-photos" },
  { label: "Clinic Photos", path: "/clinic-photos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-site flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold text-primary tracking-tight">
              Westside Medical
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Associates
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.path)
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                servicesNav.some((s) => isActive(s.path))
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-foreground/80 hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                galleryNav.some((s) => isActive(s.path))
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              }`}
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
              onClick={() => setGalleryOpen(!galleryOpen)}
            >
              Gallery <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {galleryOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setGalleryOpen(true)}
                onMouseLeave={() => setGalleryOpen(false)}
              >
                {galleryNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-foreground/80 hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setGalleryOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:2507686920"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            250-768-6920
          </a>
          <a
            href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Book Online
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-site py-4 space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Services
            </div>
            {servicesNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Gallery
            </div>
            {galleryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <a
                href="https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm"
              >
                Book Online
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
