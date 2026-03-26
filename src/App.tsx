import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PreviewProvider } from "@/components/preview/PreviewContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import ClinicInformation from "./pages/ClinicInformation";
import OnlineBooking from "./pages/OnlineBooking";
import ClinicStaff from "./pages/ClinicStaff";
import WomensHealth from "./pages/WomensHealth";
import ObesityMedicine from "./pages/ObesityMedicine";
import SkinCare from "./pages/SkinCare";
import PainClinic from "./pages/PainClinic";
import MindScience from "./pages/MindScience";
import PhysicianPhotos from "./pages/PhysicianPhotos";
import ClinicPhotos from "./pages/ClinicPhotos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/clinic-information" element={<ClinicInformation />} />
              <Route path="/online-booking" element={<OnlineBooking />} />
              <Route path="/clinic-staff" element={<ClinicStaff />} />
              <Route path="/womens-health-menopause" element={<WomensHealth />} />
              <Route path="/obesity-medicine" element={<ObesityMedicine />} />
              <Route path="/skin-care" element={<SkinCare />} />
              <Route path="/pain-clinic" element={<PainClinic />} />
              <Route path="/mind-science" element={<MindScience />} />
              <Route path="/physician-photos" element={<PhysicianPhotos />} />
              <Route path="/clinic-photos" element={<ClinicPhotos />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
