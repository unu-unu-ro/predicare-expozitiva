import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEvent } from "./EventLayout";
import {
  UserPlus,
  FileText,
  Users,
  CalendarDays,
  BookOpen,
  MessageSquare,
  FileDown,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "fa-solid fa-user-plus": UserPlus,
  "fa-solid fa-file-alt": FileText,
  "fa-solid fa-people-group": Users,
  "fa-solid fa-calendar-days": CalendarDays,
  "fa-solid fa-book": BookOpen,
  "fa-solid fa-file-pdf": FileDown,
  "fa-solid fa-comment": MessageSquare,
};

const urlMap: Record<string, string> = {
  participanti: "participanti",
  grupe: "grupe",
  orar: "orar",
  inregistrare: "participanti",
  feedback: "feedback",
  handout: "handout",
};

const EventHub = () => {
  const { eventId, data } = useEvent();

  if (!data) return null;

  const { event, links } = data;

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Card */}
        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          {/* Header area */}
          <div className="px-8 pt-8 pb-5 text-center">

            <h1 className="font-display text-xl font-bold text-foreground leading-snug">
              {event.title}
            </h1>
            <p className="font-display text-sm font-semibold text-muted-foreground mt-0.5">
              {event.subtitle}
            </p>
            <p className="text-xs text-muted-foreground mt-1.5">{event.details}</p>
          </div>

          {/* Links */}
          <div className="px-5 pb-6 space-y-2.5">
            {links
              .filter((l) => l.active)
              .map((link, i) => {
                const Icon = iconMap[link.icon] || FileText;
                const isExternal = link.url.startsWith("http") || link.url.startsWith("/ghid");
                const to = isExternal
                  ? link.url
                  : `/events/${eventId}/${urlMap[link.url] || link.url}`;

                const btnClass =
                  "group flex items-center gap-3 w-full px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-navy-dark transition-all hover:shadow-md";

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                  >
                    {isExternal ? (
                      <a href={to} className={btnClass}>
                        <Icon size={18} className="opacity-80" />
                        <span>{link.name.trim()}</span>
                      </a>
                    ) : (
                      <Link to={to} className={btnClass}>
                        <Icon size={18} className="opacity-80" />
                        <span>{link.name.trim()}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Footer beneath card */}
        <div className="text-center mt-5 space-y-1">
          <Link
            to="/evenimente"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            ← Înapoi la site
          </Link>
          <div className="text-[10px] text-muted-foreground/50">
            © {new Date().getFullYear()} CST Biserica Unu-Unu, Cluj-Napoca 🤍
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventHub;
