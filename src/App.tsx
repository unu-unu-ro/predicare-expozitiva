import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Despre from "./pages/Despre.tsx";
import Evenimente from "./pages/Evenimente.tsx";
import Resurse from "./pages/Resurse.tsx";
import Contact from "./pages/Contact.tsx";
import Abonare from "./pages/Abonare.tsx";
import Ghid from "./pages/Ghid.tsx";
import EventLayout from "./pages/events/EventLayout.tsx";
import EventHub from "./pages/events/EventHub.tsx";
import EventParticipanti from "./pages/events/EventParticipanti.tsx";
import EventGrupe from "./pages/events/EventGrupe.tsx";
import EventOrar from "./pages/events/EventOrar.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/evenimente" element={<Evenimente />} />
          <Route path="/resurse" element={<Resurse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/abonare" element={<Abonare />} />
          <Route path="/ghid" element={<Ghid />} />

          {/* Event sub-sites */}
          <Route
            path="/events/:eventId"
            element={
              <EventLayout>
                <EventHub />
              </EventLayout>
            }
          />
          <Route
            path="/events/:eventId/participanti"
            element={
              <EventLayout>
                <EventParticipanti />
              </EventLayout>
            }
          />
          <Route
            path="/events/:eventId/grupe"
            element={
              <EventLayout>
                <EventGrupe />
              </EventLayout>
            }
          />
          <Route
            path="/events/:eventId/orar"
            element={
              <EventLayout>
                <EventOrar />
              </EventLayout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
