import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { useCartSync } from "./hooks/useCartSync";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/repairs" element={<Index page="repairs" />} />
<Route path="/pricing" element={<Index page="pricing" />} />
<Route path="/academy" element={<Index page="academy" />} />
<Route path="/corporate" element={<Index page="corporate" />} />
<Route path="/contact" element={<Index page="contact" />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:handle" element={<ProductDetail />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <AppRoutes /><FloatingWhatsApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
