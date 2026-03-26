import { usePreview } from "./PreviewContext";

const StickyCTA = () => {
  const { openPopup, isPopupOpen } = usePreview();

  if (isPopupOpen) return null;

  return (
    <button
      onClick={openPopup}
      className="fixed right-5 bottom-6 z-[55] bg-primary-dark text-primary-foreground font-semibold text-sm px-5 py-3 rounded-lg shadow-xl hover:opacity-90 transition-all"
    >
      Activate Now
    </button>
  );
};

export default StickyCTA;
