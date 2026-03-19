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
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card rounded-2xl border border-border shadow-lg p-8 text-center"
      >
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">
          {event.title}
        </h1>
        <p className="font-display text-base font-semibold text-muted-foreground">
          {event.subtitle}
        </p>
        <p className="text-sm text-muted-foreground mt-1 mb-6">{event.details}</p>

        <div className="space-y-3">
          {links
            .filter((l) => l.active)
            .map((link, i) => {
              const Icon = iconMap[link.icon] || FileText;
              const isExternal = link.url.startsWith("http") || link.url.startsWith("/ghid");
              const to = isExternal
                ? link.url
                : `/events/${eventId}/${urlMap[link.url] || link.url}`;

              const className =
                "group flex items-center gap-4 w-full px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-teal-dark transition-colors";

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                >
                  {isExternal ? (
                    <a href={to} className={className}>
                      <Icon size={20} />
                      <span>{link.name.trim()}</span>
                    </a>
                  ) : (
                    <Link to={to} className={className}>
                      <Icon size={20} />
                      <span>{link.name.trim()}</span>
                    </Link>
                  )}
                </motion.div>
              );
            })}
        </div>

        <div className="mt-8">
          <Link
            to="/evenimente"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Înapoi la Evenimente
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EventHub;
