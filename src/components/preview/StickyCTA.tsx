import { usePreview } from "./PreviewContext";

const StickyCTA = () => {
  const { openPopup, isPopupOpen } = usePreview();

  if (isPopupOpen) return null;

  return (
    <button
      onClick={openPopup}
      className="hidden md:flex fixed z-[55] bg-primary text-primary-foreground items-center justify-center shadow-xl hover:opacity-90 transition-all"
      style={{
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        width: 56,
        height: 180,
        borderRadius: 12,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.5px",
      }}
    >
      Activate Now
    </button>
  );
};

export default StickyCTA;
