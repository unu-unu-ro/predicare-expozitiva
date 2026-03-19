import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface EventData {
  event: {
    title: string;
    subtitle: string;
    details: string;
  };
  links: {
    name: string;
    url: string;
    icon: string;
    active: boolean;
  }[];
}

interface EventContextType {
  eventId: string;
  data: EventData | null;
}

const EventContext = createContext<EventContextType>({ eventId: "", data: null });

export const useEvent = () => useContext(EventContext);

const EventLayout = ({ children }: { children: ReactNode }) => {
  const { eventId } = useParams<{ eventId: string }>();
  const location = useLocation();
  const [data, setData] = useState<EventData | null>(null);

  useEffect(() => {
    if (!eventId) return;
    fetch(`/data/events/${eventId}/data.json`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, [eventId]);

  if (!data) return null;

  const isHub = location.pathname === `/events/${eventId}`;

  return (
    <EventContext.Provider value={{ eventId: eventId || "", data }}>
      <div className="min-h-screen bg-background">
        {/* Compact header */}
        {!isHub && (
          <div className="bg-primary text-primary-foreground">
            <div className="max-w-3xl mx-auto px-5 py-3 flex items-center gap-3">
              <Link
                to={`/events/${eventId}`}
                className="flex items-center gap-1.5 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <ArrowLeft size={16} />
                Hub
              </Link>
              <div className="h-4 w-px bg-primary-foreground/30" />
              <div>
                <span className="font-display font-semibold text-sm">{data.event.title}</span>
                <span className="text-xs opacity-70 ml-2">{data.event.details}</span>
              </div>
            </div>
          </div>
        )}

        {children}

        {/* Footer */}
        <div className="text-center py-4 text-xs text-muted-foreground">
          <Link to={`/events/${eventId}`} className="hover:text-primary transition-colors">
            ← Înapoi la Hub
          </Link>
          <div className="mt-1 opacity-60">
            © {new Date().getFullYear()} CST România
          </div>
        </div>
      </div>
    </EventContext.Provider>
  );
};

export default EventLayout;
