import { usePreview } from "./PreviewContext";

const TopBar = () => {
  const { openPopup } = usePreview();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background" style={{ height: 40 }}>
      <div className="flex items-center justify-between h-full px-4 sm:px-6 max-w-[1400px] mx-auto">
        <div className="flex-1" />
        <p style={{ fontSize: 14, fontWeight: 500 }} className="opacity-90 text-center">
          This preview is valid for 72 hours
        </p>
        <div className="flex-1 flex justify-end">
          <button
            onClick={openPopup}
            className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            style={{ fontSize: 13, fontWeight: 600, padding: "4px 14px", borderRadius: 4 }}
          >
            Activate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
