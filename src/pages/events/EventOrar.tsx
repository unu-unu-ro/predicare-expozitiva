import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useEvent } from "./EventLayout";
import { Clock, Mic, Coffee } from "lucide-react";

interface Session {
  time: string;
  title: string;
  speaker: string;
  pageInPrint?: boolean;
}

interface DaySchedule {
  day: string;
  sessions: Session[];
}

interface OrarData {
  schedule: DaySchedule[];
}

const breakKeywords = ["Pauză", "Prânz", "Sosire", "Încheiere", "Anunț", "Rugăciune"];

const EventOrar = () => {
  const { eventId } = useEvent();
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);

  useEffect(() => {
    fetch(`/data/events/${eventId}/orar.json`)
      .then((r) => r.json())
      .then((data: OrarData) => setSchedule(data.schedule))
      .catch(() => {});
  }, [eventId]);

  const isBreak = (title: string) =>
    breakKeywords.some((kw) => title.startsWith(kw));

  return (
    <section className="page-section space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="section-title">Orar zilnic</h2>
        <div className="gold-divider mt-2 mb-4" />

        <div className="space-y-6">
          {schedule.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: di * 0.08 }}
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                {day.day}
              </h3>
              <div className="rounded-lg border border-border overflow-hidden">
                {day.sessions.map((session, si) => {
                  const isBrk = isBreak(session.title);
                  return (
                    <div
                      key={si}
                      className={`flex items-start gap-3 px-4 py-2.5 text-sm border-b border-border last:border-b-0 ${
                        isBrk ? "bg-muted/40" : "bg-card"
                      }`}
                    >
                      <span className="font-mono text-xs text-muted-foreground w-12 pt-0.5 flex-shrink-0">
                        {session.time}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className={`flex items-center gap-2 ${isBrk ? "text-muted-foreground" : "text-foreground font-medium"}`}>
                          {isBrk ? <Coffee size={13} className="text-muted-foreground/60 flex-shrink-0" /> : null}
                          {session.title}
                        </div>
                        {session.speaker && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                            <Mic size={11} />
                            {session.speaker}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventOrar;
