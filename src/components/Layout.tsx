import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import TopBar from "./preview/TopBar";
import StickyCTA from "./preview/StickyCTA";
import ActivatePopup from "./preview/ActivatePopup";
import BlurOverlay from "./preview/BlurOverlay";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <TopBar />
      <div style={{ marginTop: 40 }}>
        <Header />
        <main className="flex-1 relative">
          {!isHomepage && <BlurOverlay />}
          {children}
        </main>
        <Footer />
      </div>
      <StickyCTA />
      <ActivatePopup />
    </div>
  );
};

export default Layout;
