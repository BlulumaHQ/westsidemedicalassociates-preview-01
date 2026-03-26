import { usePreview } from "./PreviewContext";

const BlurOverlay = () => {
  const { openPopup } = usePreview();

  return (
    <div
      className="absolute inset-0 z-10 backdrop-blur-[3px] bg-background/20 cursor-pointer"
      onClick={openPopup}
      aria-label="Content locked — click to activate"
    />
  );
};

export default BlurOverlay;
