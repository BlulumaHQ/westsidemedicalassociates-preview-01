const BlurOverlay = () => {
  return (
    <div
      className="absolute inset-0 z-10 backdrop-blur-[3px] bg-background/20 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default BlurOverlay;
