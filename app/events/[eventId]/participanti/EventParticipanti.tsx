'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useEvent } from "../EventLayout";
import { Users, GraduationCap, Crown, User } from "lucide-react";

interface Participant {
  name: string;
  role: string;
  group: string;
  text1: string;
  text2: string;
}

const rolePriority: Record<string, number> = {
  Lider: 0,
  Ucenic: 1,
  Participant: 2,
};

const roleIcon: Record<string, React.ElementType> = {
  Lider: Crown,
  Ucenic: GraduationCap,
  Participant: User,
};

const roleBadgeClass: Record<string, string> = {
  Lider: "bg-accent/20 text-accent",
  Ucenic: "bg-primary/15 text-primary",
  Participant: "bg-muted text-muted-foreground",
};

const EventParticipanti = () => {
  const { eventId } = useEvent();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetch(`/data/events/${eventId}/participants.json`)
      .then((r) => r.json())
      .then((data: Participant[]) => {
        const sorted = [...data].sort(
          (a, b) =>
            (rolePriority[a.role] ?? 9) - (rolePriority[b.role] ?? 9) ||
            a.name.localeCompare(b.name, "ro")
        );
        setParticipants(sorted);
      })
      .catch(() => {});
  }, [eventId]);

  const stats = {
    total: participants.length,
    lideri: participants.filter((p) => p.role === "Lider").length,
    ucenici: participants.filter((p) => p.role === "Ucenic").length,
    participanti: participants.filter((p) => p.role === "Participant").length,
  };

  return (
    <section className="page-section space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="section-title">Participanți</h2>
        <div className="gold-divider mt-2 mb-4" />

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users size={16} className="text-primary" />
            <span><strong>{stats.total}</strong> total</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Crown size={16} className="text-accent" />
            <span>{stats.lideri} lideri</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap size={16} className="text-primary" />
            <span>{stats.ucenici} ucenici</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User size={16} />
            <span>{stats.participanti} participanți</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left px-4 py-2.5 font-semibold text-foreground">Nume</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground">Rol</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground hidden md:table-cell">Grup</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground hidden lg:table-cell">Text 1</th>
                <th className="text-left px-4 py-2.5 font-semibold text-foreground hidden lg:table-cell">Text 2</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((p, i) => {
                const RoleIcon = roleIcon[p.role] || User;
                return (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-2.5 font-medium text-foreground">{p.name}</td>
                    <td className="px-4 py-2.5">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${roleBadgeClass[p.role] || ""}`}>
                        <RoleIcon size={12} />
                        {p.role}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{p.group}</td>
                    <td className="px-4 py-2.5 text-muted-foreground text-xs hidden lg:table-cell">{p.text1 || "—"}</td>
                    <td className="px-4 py-2.5 text-muted-foreground text-xs hidden lg:table-cell">{p.text2 || "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default EventParticipanti;
