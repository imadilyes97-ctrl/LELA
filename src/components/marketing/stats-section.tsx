"use client";

import { motion } from "framer-motion";
import { Users, Star, Building2, CalendarCheck } from "lucide-react";

const stats = [
  { icon: <Building2 className="w-6 h-6" />, value: "500+", label: "Prestataires référencés" },
  { icon: <Star className="w-6 h-6" />, value: "4.8", label: "Note moyenne" },
  { icon: <Users className="w-6 h-6" />, value: "10 000+", label: "Mariages accompagnés" },
  { icon: <CalendarCheck className="w-6 h-6" />, value: "48h", label: "Délai de réponse moyen" },
];

export function StatsSection() {
  return (
    <section className="relative py-section bg-navy-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 mb-4">
                {stat.icon}
              </div>
              <p className="font-display text-3xl md:text-4xl text-ivory-50 mb-1">
                {stat.value}
              </p>
              <p className="font-body text-sm text-ivory-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
