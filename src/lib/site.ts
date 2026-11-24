import { Heart, Stethoscope, Shield, Syringe, Brain } from "lucide-react";

export const SITE = {
  name: "Westside Medical Associates",
  phone: "250-768-6920",
  phoneHref: "tel:2507686920",
  fax: "250-768-6907",
  email: "admin@wsmed.ca",
  street: "103 – 1135 Stevens Road",
  city: "West Kelowna, BC V1Z 2S8",
  bookingUrl: "https://ocean.cognisantmd.com/online-booking/c3c00b8f-eebf-4e82-81e1-d032d365768e",
  hours: [
    { label: "Weekdays", time: "8AM – 7PM", note: "Mon–Fri · appointment only" },
    { label: "Saturday", time: "8AM – 2PM", note: "Walk-in & appointments" },
  ],
};

export const MAIN_NAV = [
  { label: "Welcome", path: "/" },
  { label: "Clinic Info", path: "/clinic-information" },
  { label: "Online Booking", path: "/online-booking" },
  { label: "Clinic Staff", path: "/clinic-staff" },
];

export const SERVICES = [
  { title: "Women's Health & Menopause", description: "Peri-menopause and menopause consults, hormone therapy and birth control clinic.", icon: Heart, path: "/womens-health-menopause", tone: "red" },
  { title: "Weight & Lifestyle Medicine", description: "Individualized obesity medicine plans with a multidisciplinary team approach.", icon: Stethoscope, path: "/obesity-medicine", tone: "navy" },
  { title: "Skin Cancer Screening", description: "Specialized referral-based skin cancer screening and diagnosis services.", icon: Shield, path: "/skin-care", tone: "navy" },
  { title: "Pain Clinic", description: "Trigger point and joint injections in multi-modal pain management.", icon: Syringe, path: "/pain-clinic", tone: "red", isNew: true },
  { title: "Mind Science", description: "The Navigational Mind Framework — a unified model of consciousness, mind and decision.", icon: Brain, path: "/mind-science", tone: "navy" },
];

export const GALLERY = [
  { label: "Physician Photos", path: "/physician-photos" },
  { label: "Clinic Photos", path: "/clinic-photos" },
];
