import { usePreview } from "./PreviewContext";

const TopBar = () => {
  const { openPopup } = usePreview();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-primary-foreground">
      <div className="container-site flex items-center justify-between h-10">
        <div className="flex-1" />
        <p className="text-xs sm:text-sm font-medium opacity-90 text-center">
          This preview is valid for 72 hours
        </p>
        <div className="flex-1 flex justify-end">
          <button
            onClick={openPopup}
            className="text-xs sm:text-sm font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded hover:opacity-90 transition-opacity"
          >
            Activate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
