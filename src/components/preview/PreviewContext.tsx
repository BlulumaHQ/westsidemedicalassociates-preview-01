import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

interface PreviewContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  version: "a" | "b";
}

const PreviewContext = createContext<PreviewContextType | null>(null);

export const usePreview = () => {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error("usePreview must be used within PreviewProvider");
  return ctx;
};

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const version = searchParams.get("v") === "b" ? "b" : "a";

  const openPopup = useCallback(() => {
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <PreviewContext.Provider value={{ isPopupOpen, openPopup, closePopup, version }}>
      {children}
    </PreviewContext.Provider>
  );
};
