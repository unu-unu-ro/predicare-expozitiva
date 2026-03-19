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
  ChevronRight,
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
    <div className="min-h-screen bg-foreground flex flex-col items-center justify-center px-4 py-12">
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 max-w-lg"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto">
            <BookOpen className="w-7 h-7 text-gold" />
          </div>
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight tracking-tight">
          {event.title}
        </h1>
        <p className="font-display text-lg md:text-xl font-semibold text-gold mt-3">
          {event.subtitle}
        </p>
        <p className="text-sm text-primary-foreground/60 mt-3 tracking-wide">
          {event.details}
        </p>
      </motion.div>

      {/* Navigation links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full max-w-sm space-y-3"
      >
        {links
          .filter((l) => l.active)
          .map((link, i) => {
            const Icon = iconMap[link.icon] || FileText;
            const isExternal = link.url.startsWith("http") || link.url.startsWith("/ghid");
            const to = isExternal
              ? link.url
              : `/events/${eventId}/${urlMap[link.url] || link.url}`;

            const content = (
              <>
                <span className="flex items-center gap-3">
                  <Icon size={18} className="opacity-70" />
                  <span>{link.name.trim()}</span>
                </span>
                <ChevronRight size={16} className="opacity-40 group-hover:opacity-80 transition-opacity" />
              </>
            );

            const btnClass =
              "group flex items-center justify-between w-full px-5 py-3.5 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-sm border border-primary-foreground/10 hover:bg-gold hover:text-foreground hover:border-gold transition-all duration-200";

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
              >
                {isExternal ? (
                  <a href={to} className={btnClass}>
                    {content}
                  </a>
                ) : (
                  <Link to={to} className={btnClass}>
                    {content}
                  </Link>
                )}
              </motion.div>
            );
          })}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-center mt-14 space-y-2"
      >
        <Link
          to="/evenimente"
          className="text-xs text-primary-foreground/40 hover:text-gold transition-colors tracking-wide uppercase"
        >
          ← Înapoi la site
        </Link>
        <div className="text-[10px] text-primary-foreground/25">
          © {new Date().getFullYear()} CST · Cluj-Napoca
        </div>
      </motion.div>
    </div>
  );
};

export default EventHub;
