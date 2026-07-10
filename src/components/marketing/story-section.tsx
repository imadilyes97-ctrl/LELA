"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, FileText, Luggage, Palette, PartyPopper, Sun, Sparkles } from "lucide-react";
import { CHECKLIST_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Luggage: <Luggage className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  PartyPopper: <PartyPopper className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
};

const stepVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const getStepDescription = (slug: string): string => {
  const descriptions: Record<string, string> = {
    khotba: "La visite officielle de la famille du prétendant. Les premières discussions, la demande en bonne et due forme. Un moment solennel et chaleureux qui scelle l'union des deux familles.",
    fatiha: "La lecture de la Fatiha officialise les fiançailles. Bénédiction religieuse, échange de promesses, et premières célébrations en famille autour d'un repas traditionnel.",
    kitab: "L'acte de mariage religieux et civil. Signature chez le notaire ou l'imam, souvent bien avant la fête. Le cadre légal et religieux du mariage est posé.",
    chouar: "La présentation du trousseau de la mariée. Valises soigneusement préparées, mises en scène codifiée, exposition des cadeaux et des affaires. Un moment visuellement riche et très photographié.",
    henne: "La nuit du Henné (Hannouna). Soirée dédiée à la mariée, décorations spécifiques, tenue traditionnelle Karakou ou Chedda, artiste henné, ambiance musicale chaâbi et andalouse.",
    "jour-j": "Le grand jour ! Cérémonie à la salle des fêtes, traiteur, orchestre ou DJ, photographe et vidéaste, gâteaux traditionnels, tenues de cérémonie. L'aboutissement de mois de préparation.",
    sebiaa: "Le lendemain du mariage. Suite des festivités en famille, visite aux mariés, dernier jour de célébration. Moins connu mais essentiel dans la tradition algérienne.",
  };
  return descriptions[slug] || "";
};

export function StorySection() {
  return (
    <section className="relative py-section bg-ivory-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-50 text-terracotta-600 font-body text-xs uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Le Parcours
          </motion.span>
          <h2 className="font-display text-display-md text-navy-700 mb-6">
            Le mariage algérien
            <br />
            <span className="gradient-text-warm">raconté en 7 étapes</span>
          </h2>
          <p className="font-body text-body text-navy-400 leading-relaxed max-w-xl mx-auto">
            Un mariage algérien n&apos;est pas un événement, c&apos;est une succession de rituels
            répartis sur plusieurs jours, parfois plusieurs semaines. Chaque étape a ses traditions,
            ses prestataires, et sa magie.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient glow (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-terracotta-500/30 via-gold-500/50 to-terracotta-500/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-terracotta-500/10 via-gold-500/20 to-terracotta-500/10 blur-sm" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {CHECKLIST_CATEGORIES.map((step, index) => (
              <motion.div
                key={step.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stepVariants}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-terracotta-50 text-terracotta-600 font-body text-xs uppercase tracking-wider mb-4 border border-terracotta-200/50"
                  >
                    {iconMap[step.icon]}
                    <span>{step.name_fr}</span>
                  </motion.div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-700 mb-3 leading-tight">
                    {step.name_fr.split("—")[1]?.trim() || step.name_fr}
                  </h3>
                  <p className="font-body text-body-sm text-navy-400 leading-relaxed">
                    {getStepDescription(step.slug)}
                  </p>
                </div>

                {/* Timeline dot with glow */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5, transition: { duration: 0.3, ease: "easeOut" } }}
                    className="relative"
                  >
                    <div className="w-5 h-5 rounded-full bg-ivory-50 border-2 border-gold-500 shadow-soft z-10 relative" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-500/30"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="w-24 h-px bg-gradient-gold mx-auto mt-20 origin-center"
        />
      </div>
    </section>
  );
}
