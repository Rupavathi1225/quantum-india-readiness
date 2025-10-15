import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create query client instance
const queryClient = new QueryClient();

// ✅ Page tracking hook
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview every time the route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

// ✅ Wrapper component to include tracking inside BrowserRouter
function AppRoutes() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// ✅ Main App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
