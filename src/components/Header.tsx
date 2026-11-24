import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { GALLERY, MAIN_NAV, SERVICES, SITE } from "@/lib/site";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <span className="flex items-center gap-3">
    <span className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${light ? "bg-white" : "bg-primary"}`}>
      <Plus className={`h-5 w-5 ${light ? "text-primary" : "text-white"}`} strokeWidth={2.6} aria-hidden="true" />
    </span>
    <span className="flex flex-col leading-tight">
      <span className={`text-[17px] font-bold tracking-[-0.02em] ${light ? "text-white" : "text-primary"}`}>Westside Medical</span>
      <span className={`text-xs ${light ? "text-white/70" : "text-muted-foreground"}`}>Associates</span>
    </span>
  </span>
);

const Dropdown = ({ label, items, active }: { label: string; items: { label: string; path: string }[]; active: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-[10px] px-3 py-2 text-[15px] font-medium transition-colors ${
          active ? "bg-accent text-primary" : "text-primary hover:bg-accent"
        }`}
      >
        {label} <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="w-72 rounded-2xl border border-border bg-white p-2 shadow-[0_16px_40px_-16px_rgba(20,40,75,0.35)]">
            {items.map((i) => (
              <Link key={i.path} to={i.path} className="block rounded-[10px] px-4 py-2.5 text-[15px] text-primary hover:bg-accent">
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <div className="bg-primary text-[13px] text-[#DCE4F0]">
        <div className="container-site flex flex-wrap justify-between gap-2 py-2.5">
          <span>{SITE.street}, {SITE.city}</span>
          <span>Mon–Fri 8AM–7PM · Sat 8AM–2PM</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container-site flex h-20 items-center justify-between gap-4">
          <Link to="/" aria-label="Westside Medical Associates home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-[10px] px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive(item.path) ? "bg-accent text-primary" : "text-primary hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Dropdown label="Services" items={SERVICES.map((s) => ({ label: s.title, path: s.path }))} active={SERVICES.some((s) => isActive(s.path))} />
            <Dropdown label="Gallery" items={GALLERY} active={GALLERY.some((g) => isActive(g.path))} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={SITE.phoneHref} className="rounded-[10px] border border-input px-4 py-3 text-sm font-semibold text-primary hover:border-primary">
              {SITE.phone}
            </a>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent !py-3 text-sm">
              Book Online
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-input text-primary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="container-site flex flex-col gap-1 pb-6 lg:hidden" aria-label="Mobile">
            {MAIN_NAV.map((item) => (
              <Link key={item.path} to={item.path} className="rounded-[10px] px-4 py-3 text-base font-medium text-primary hover:bg-accent">
                {item.label}
              </Link>
            ))}
            <span className="eyebrow mt-3 px-4">Services</span>
            {SERVICES.map((s) => (
              <Link key={s.path} to={s.path} className="rounded-[10px] px-4 py-2.5 text-[15px] text-primary hover:bg-accent">
                {s.title}
              </Link>
            ))}
            <span className="eyebrow mt-3 px-4">Gallery</span>
            {GALLERY.map((g) => (
              <Link key={g.path} to={g.path} className="rounded-[10px] px-4 py-2.5 text-[15px] text-primary hover:bg-accent">
                {g.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href={SITE.phoneHref} className="btn-outline">Call</a>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-accent">Book Online</a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
