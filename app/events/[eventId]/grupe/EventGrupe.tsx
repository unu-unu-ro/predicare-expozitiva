'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useEvent } from "../EventLayout";
import { Crown, GraduationCap, User } from "lucide-react";

interface Participant {
  name: string;
  role: string;
  group: string;
  text1: string;
  text2: string;
}

interface Group {
  leader: string;
  members: Participant[];
}

const EventGrupe = () => {
  const { eventId } = useEvent();
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch(`/data/events/${eventId}/participants.json`)
      .then((r) => r.json())
      .then((data: Participant[]) => {
        const groupMap = new Map<string, Participant[]>();
        data.forEach((p) => {
          const list = groupMap.get(p.group) || [];
          list.push(p);
          groupMap.set(p.group, list);
        });

        const sorted = Array.from(groupMap.entries())
          .map(([leader, members]) => ({
            leader,
            members: members.sort((a, b) => {
              const rp: Record<string, number> = { Lider: 0, Ucenic: 1, Participant: 2 };
              return (rp[a.role] ?? 9) - (rp[b.role] ?? 9) || a.name.localeCompare(b.name, "ro");
            }),
          }))
          .sort((a, b) => a.leader.localeCompare(b.leader, "ro"));

        setGroups(sorted);
      })
      .catch(() => {});
  }, [eventId]);

  const roleIcon = (role: string) => {
    if (role === "Lider") return <Crown size={14} className="text-accent" />;
    if (role === "Ucenic") return <GraduationCap size={14} className="text-primary" />;
    return <User size={14} className="text-muted-foreground" />;
  };

  return (
    <section className="page-section space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="section-title">Grupe de lucru</h2>
        <div className="gold-divider mt-2 mb-4" />

        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((group, gi) => (
            <motion.div
              key={group.leader}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.05 }}
              className="bg-card rounded-xl border border-border p-4"
            >
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <Crown size={16} className="text-accent" />
                Grupul {group.leader}
              </h3>
              <div className="space-y-1.5">
                {group.members.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm py-1 px-2 rounded hover:bg-muted/50 transition-colors"
                  >
                    {roleIcon(m.role)}
                    <span className={m.role === "Lider" ? "font-semibold text-foreground" : "text-foreground"}>
                      {m.name}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {m.role !== "Lider" && m.text1 ? m.text1 : ""}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventGrupe;
