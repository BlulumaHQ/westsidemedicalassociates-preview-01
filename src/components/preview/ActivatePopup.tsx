import { X, Check, Shield } from "lucide-react";
import { usePreview } from "./PreviewContext";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const STRIPE_299 = "#stripe-299";
const STRIPE_499 = "#stripe-499";
const STRIPE_799 = "#stripe-799";

const PREVIEW_A_URL = "#PREVIEW_A_URL";
const PREVIEW_B_URL = "#PREVIEW_B_URL";

const ActivatePopup = () => {
  const { isPopupOpen, closePopup, version } = usePreview();

  if (!isPopupOpen) return null;

  const navigateToVersion = (target: "a" | "b") => {
    window.location.href = target === "a" ? PREVIEW_A_URL : PREVIEW_B_URL;
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={closePopup} />

      <div
        className="relative bg-background rounded-2xl shadow-2xl border border-border mx-4 overflow-hidden"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "95vw",
          maxWidth: 960,
          maxHeight: "95vh",
        }}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 sm:px-10 py-6 sm:py-8">
          <h2 className="text-center text-foreground" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>
            This Website Preview is Ready.
          </h2>

          <p className="text-center text-muted-foreground mt-2" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.5 }}>
            Activate your website anytime — everything is already built and ready to go.
          </p>

          <p className="text-center max-w-2xl mx-auto mt-4 text-muted-foreground" style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.7 }}>
            You've already seen the result. This is a professionally built, conversion-focused website — not a template.
            Everything is ready. All that's left is activation.
          </p>

          {/* Process block */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-5">
            {[
              { step: "1", title: "Payment Confirmed", desc: "Secure checkout via Stripe" },
              { step: "2", title: "Submit Your Revisions", desc: "We'll send you a simple revision form" },
              { step: "3", title: "Launch Your Website", desc: "We finalize and deploy your site" },
            ].map((s) => (
              <div key={s.step} className="text-center bg-accent rounded-xl p-3 sm:p-4">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2" style={{ fontSize: 12, fontWeight: 700 }}>
                  {s.step}
                </div>
                <p className="text-foreground" style={{ fontSize: 16, fontWeight: 700 }}>{s.title}</p>
                <p className="text-muted-foreground mt-1" style={{ fontSize: 14, fontWeight: 400 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-4 text-muted-foreground" style={{ fontSize: 14 }}>
            {["Multi-page ready", "Mobile optimized", "SEO-ready", "Hosting included"].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" /> {b}
              </span>
            ))}
          </div>

          {/* Risk line */}
          <p className="text-center text-foreground mt-4" style={{ fontSize: 15, fontWeight: 500 }}>
            You've already seen exactly what you'll get — no risk.
          </p>

          {/* Pricing */}
          {version === "a" ? (
            <div className="text-center mt-4 space-y-2">
              <a
                href={STRIPE_499}
                className="block w-full max-w-md mx-auto bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
                style={{ fontSize: 18, fontWeight: 700, height: 64, lineHeight: "64px" }}
              >
                Activate with Revisions – $499
              </a>
              <p className="text-muted-foreground" style={{ fontSize: 14 }}>
                Includes guided revisions, content updates, and final polish.
              </p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href={STRIPE_299} className="inline-block text-primary hover:underline cursor-pointer" style={{ fontSize: 15 }}>
                    Or launch as-is – $299
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs text-left space-y-2 p-3">
                  <p style={{ fontSize: 12 }}>
                    <strong>Preview Access ($299):</strong> You get the site exactly as shown. No revisions.
                  </p>
                  <p style={{ fontSize: 12 }}>
                    <strong>Launch Ready ($499):</strong> Includes revisions and final polish.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <div className="text-center mt-4 space-y-2">
              <a
                href={STRIPE_799}
                className="block w-full max-w-md mx-auto bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
                style={{ fontSize: 18, fontWeight: 700, height: 64, lineHeight: "64px" }}
              >
                Activate Your Website – $799
              </a>
              <p className="text-muted-foreground" style={{ fontSize: 14 }}>
                Includes guided revisions, content updates, and full optimization.
              </p>
            </div>
          )}

          {/* A/B buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => version !== "a" && navigateToVersion("a")}
              className={`border transition-colors ${
                version === "a"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
              style={{ fontSize: 16, fontWeight: 600, height: 48, paddingLeft: 20, paddingRight: 20, borderRadius: 8 }}
            >
              View Version A
            </button>
            <button
              onClick={() => version !== "b" && navigateToVersion("b")}
              className={`border transition-colors ${
                version === "b"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/40"
              }`}
              style={{ fontSize: 16, fontWeight: 600, height: 48, paddingLeft: 20, paddingRight: 20, borderRadius: 8 }}
            >
              View Version B
            </button>
          </div>

          {/* Stripe line */}
          <div className="flex items-center justify-center gap-1.5 mt-4 text-muted-foreground" style={{ fontSize: 12 }}>
            <Shield className="w-3.5 h-3.5" />
            Secure checkout powered by Stripe
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivatePopup;
