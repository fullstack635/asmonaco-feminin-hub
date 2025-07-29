import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Roster from "./pages/Roster";
import Matches from "./pages/Matches";
import Club from "./pages/Club";
import News from "./pages/News";
import Academy from "./pages/Academy";
import Partners from "./pages/Partners";
import Sponsor from "./pages/Sponsor";
import Shop from "./pages/Shop";
import Tickets from "./pages/Tickets";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/club" element={<Club />} />
            <Route path="/news" element={<News />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/tickets" element={<Tickets />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
