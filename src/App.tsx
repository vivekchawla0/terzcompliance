import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import NppaRegistration from "./pages/NppaRegistration";
import { SearchHighlightProvider } from "./components/SearchHighlightProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SearchHighlightProvider />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/nppa-registration-medical-devices" element={<NppaRegistration />} />
              <Route path="/services/nppa-registration" element={<Navigate to="/services/nppa-registration-medical-devices" replace />} />
              {/* Redirects for old service routes */}
              <Route path="/services/medical-devices" element={<Navigate to="/services#medical-devices" replace />} />
              <Route path="/services/ivd" element={<Navigate to="/services#ivd" replace />} />
              <Route path="/services/cosmetics" element={<Navigate to="/services#cosmetics" replace />} />
              <Route path="/services/lmpc" element={<Navigate to="/services#lmpc" replace />} />
              <Route path="/services/iec" element={<Navigate to="/services#iec" replace />} />
              <Route path="/services/epr" element={<Navigate to="/services#epr" replace />} />
              {/* Redirect old procedure route */}
              <Route path="/procedure" element={<Navigate to="/services" replace />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:type/:slug" element={<ResourceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/search" element={<Search />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
