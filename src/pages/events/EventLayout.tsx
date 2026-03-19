import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

interface EventLink {
  name: string;
  url: string;
  icon: string;
  active: boolean;
}

interface EventMeta {
  title: string;
  subtitle: string;
  details: string;
}

interface EventEntry {
  date: string;
  dateEnd: string;
  title: string;
  location: string;
  type: string;
  link: string;
  eventId?: string;
  urlInregistrare?: string;
  urlFeedback?: string;
  event?: EventMeta;
  links?: EventLink[];
}

export interface EventData {
  event: EventMeta;
  links: EventLink[];
  urlInregistrare?: string;
  urlFeedback?: string;
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
    fetch("/data/evenimente.json")
      .then((r) => r.json())
      .then((events: EventEntry[]) => {
        const entry = events.find((e) => e.eventId === eventId);
        if (entry?.event && entry?.links) {
          setData({
            event: entry.event,
            links: entry.links,
            urlInregistrare: entry.urlInregistrare,
            urlFeedback: entry.urlFeedback,
          });
        }
      })
      .catch(() => {});
  }, [eventId]);

  if (!data) return null;

  const isHub = location.pathname === `/events/${eventId}`;

  return (
    <EventContext.Provider value={{ eventId: eventId || "", data }}>
      <div className="min-h-screen bg-background">
        {/* Sub-page header — shown only on sub-pages, not the hub */}
        {!isHub && (
          <div className="bg-primary text-primary-foreground">
            <div className="max-w-3xl mx-auto px-5 py-2.5 flex items-center gap-3">
              <Link
                to={`/events/${eventId}`}
                className="flex items-center gap-1.5 text-xs font-medium opacity-80 hover:opacity-100 transition-opacity"
                title="Înapoi la pagina evenimentului"
              >
                <Home size={14} />
              </Link>
              <div className="h-3.5 w-px bg-primary-foreground/25" />
              <div className="flex items-baseline gap-2 min-w-0 overflow-hidden">
                <span className="font-display font-semibold text-sm truncate">{data.event.title}</span>
                <span className="text-[11px] opacity-60 truncate hidden sm:inline">{data.event.details}</span>
              </div>
              <div className="flex-1" />
            </div>
          </div>
        )}

        {children}

        {/* Footer — only on sub-pages */}
        {!isHub && (
          <div className="text-center py-4 text-xs text-muted-foreground border-t border-border mt-4">
            <Link to={`/events/${eventId}`} className="hover:text-primary transition-colors">
              ← Înapoi la pagina evenimentului
            </Link>
            <span className="mx-2 opacity-40">|</span>
            <Link to="/evenimente" className="hover:text-primary transition-colors">
              Site principal
            </Link>
            <div className="mt-1.5 text-[10px] opacity-50">
              © {new Date().getFullYear()} Predicare expozitivă
            </div>
          </div>
        )}
      </div>
    </EventContext.Provider>
  );
};

export default EventLayout;
