
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DoctorsPage from "./pages/DoctorsPage";
import HospitalsPage from "./pages/HospitalsPage";
import BloodDonorsPage from "./pages/BloodDonorsPage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import CarRentalPage from "./pages/CarRentalPage";
import PolicePage from "./pages/PolicePage";
import LawyersPage from "./pages/LawyersPage";
import JobsPage from "./pages/JobsPage";
import TeachersPage from "./pages/TeachersPage";
import EntrepreneursPage from "./pages/EntrepreneursPage";
import TrainingCentersPage from "./pages/TrainingCentersPage";
import NewsPage from "./pages/NewsPage";
import TransportPage from "./pages/TransportPage";
import HousingPage from "./pages/HousingPage";
import HotelsPage from "./pages/HotelsPage";
import CourierPage from "./pages/CourierPage";
import MyAppPage from "./pages/MyAppPage";
import NotificationsPage from "./pages/NotificationsPage";
import AboutPage from "./pages/AboutPage";
import WebsitesPage from "./pages/WebsitesPage";
import NewspapersPage from "./pages/NewspapersPage";
import ElectricityPage from "./pages/ElectricityPage";
import GovernmentPage from "./pages/GovernmentPage";
import BanksPage from "./pages/BanksPage";
import GasStationsPage from "./pages/GasStationsPage";
import PrayersPage from "./pages/PrayersPage";
import PharmacyPage from "./pages/PharmacyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/blood-donors" element={<BloodDonorsPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/car-rental" element={<CarRentalPage />} />
          <Route path="/police" element={<PolicePage />} />
          <Route path="/lawyers" element={<LawyersPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/entrepreneurs" element={<EntrepreneursPage />} />
          <Route path="/training-centers" element={<TrainingCentersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/courier" element={<CourierPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/newspapers" element={<NewspapersPage />} />
          <Route path="/electricity" element={<ElectricityPage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/banks" element={<BanksPage />} />
          <Route path="/gas-stations" element={<GasStationsPage />} />
          <Route path="/prayers" element={<PrayersPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/my-app" element={<MyAppPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
