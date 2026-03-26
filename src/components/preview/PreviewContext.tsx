import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

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

function detectVersion(): "a" | "b" {
  const host = window.location.hostname;
  if (host.includes("-preview-b")) return "b";
  return "a";
}

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const version = detectVersion();
  const isHomepage = location.pathname === "/";

  // Auto-open popup on internal pages
  useEffect(() => {
    if (!isHomepage) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [isHomepage]);

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
