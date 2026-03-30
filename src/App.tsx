import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Yazuchy from "./pages/Yazuchy";
import Geograf from "./pages/Geograf";
import Biolog from "./pages/Biolog";
import AshSu from "./pages/AshSu";
import TelGalime from "./pages/TelGalime";
import SuzOstasy from "./pages/SuzOstasy";
import Mengelek from "./pages/Mengelek";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/yazuchy" element={<Yazuchy />} />
          <Route path="/geograf" element={<Geograf />} />
          <Route path="/biolog" element={<Biolog />} />
          <Route path="/ashsu" element={<AshSu />} />
          <Route path="/telgalime" element={<TelGalime />} />
          <Route path="/suzostasy" element={<SuzOstasy />} />
          <Route path="/mengelek" element={<Mengelek />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;