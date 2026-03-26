import { X, Check, Shield } from "lucide-react";
import { usePreview } from "./PreviewContext";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const STRIPE_299 = "#stripe-299";
const STRIPE_499 = "#stripe-499";
const STRIPE_799 = "#stripe-799";

const ActivatePopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (!isPopupOpen) return null;

  const switchVersion = (target: "a" | "b") => {
    const params = new URLSearchParams(searchParams);
    if (target === "b") {
      params.set("v", "b");
    } else {
      params.delete("v");
    }
    const qs = params.toString();
    navigate(`${location.pathname}${qs ? `?${qs}` : ""}`, { replace: true });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={closePopup} />

      {/* Popup */}
      <div className="relative bg-background rounded-2xl shadow-2xl border border-border w-[95vw] max-w-[960px] max-h-[95vh] overflow-hidden mx-4">
        {/* Close */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 sm:px-10 py-8 sm:py-10">
          {/* Headline */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              This Website Preview is Ready.
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Activate your website anytime — everything is already built and ready to go.
            </p>
          </div>

          {/* Sales Pitch */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              You've already seen the result. This is a professionally built, conversion-focused website — not a template.
              Everything is ready. All that's left is activation.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-6">
            {[
              { step: "1", title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
              { step: "2", title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
              { step: "3", title: "Launch Your Website", desc: "We finalize and deploy your site" },
            ].map((s) => (
              <div key={s.step} className="text-center bg-section-alt rounded-xl p-3 sm:p-4">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mx-auto mb-2">
                  {s.step}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mb-4 text-xs sm:text-sm text-muted-foreground">
            {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-secondary" /> {b}
              </span>
            ))}
          </div>

          {/* Risk Line */}
          <p className="text-center text-sm font-medium text-foreground mb-6">
            You've already seen exactly what you'll get — no risk.
          </p>

          {/* Version Switch */}
          <div className="flex justify-center gap-2 mb-5">
            <button
              onClick={() => switchVersion("a")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-colors ${
                version === "a"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
            >
              View Version A
            </button>
            <button
              onClick={() => switchVersion("b")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-colors ${
                version === "b"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
            >
              View Version B
            </button>
          </div>

          {/* Pricing CTAs */}
          {version === "a" ? (
            <div className="text-center space-y-3">
              <a
                href={STRIPE_499}
                className="block w-full max-w-md mx-auto btn-primary text-base py-3.5"
              >
                Activate with Revisions – $499
              </a>
              <p className="text-xs text-muted-foreground">
                Includes guided revisions, content updates, and final polish.
              </p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={STRIPE_299}
                    className="inline-block text-sm text-primary hover:underline cursor-pointer"
                  >
                    Or launch as-is – $299
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs text-left space-y-2 p-3">
                  <p className="text-xs">
                    <strong>Preview Access ($299):</strong> You get the site exactly as shown. No revisions.
                  </p>
                  <p className="text-xs">
                    <strong>Launch Ready ($499):</strong> Includes revisions and final polish.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <div className="text-center">
              <a
                href={STRIPE_799}
                className="block w-full max-w-md mx-auto btn-primary text-base py-3.5"
              >
                Activate Your Website – $799
              </a>
            </div>
          )}

          {/* Trust */}
          <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5" />
            Secure checkout powered by Stripe
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivatePopup;
