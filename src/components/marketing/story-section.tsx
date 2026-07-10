"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, FileText, Luggage, Palette, PartyPopper, Sun } from "lucide-react";
import { CHECKLIST_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Luggage: <Luggage className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  PartyPopper: <PartyPopper className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export function StorySection() {
  return (
    <section className="relative py-section bg-ivory-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-terracotta-600 mb-4 block">
            Le Parcours
          </span>
          <h2 className="font-display text-display-md text-navy-700 mb-6">
            Le mariage algérien
            <br />
            <span className="text-terracotta-600">raconté en 7 étapes</span>
          </h2>
          <p className="font-body text-body text-navy-500 leading-relaxed">
            Un mariage algérien n&apos;est pas un événement, c&apos;est une succession de rituels
            répartis sur plusieurs jours, parfois plusieurs semaines. Chaque étape a ses traditions,
            ses prestataires, et sa magie.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta-500/20 via-gold-500/30 to-terracotta-500/20" />

          <div className="space-y-24 md:space-y-32">
            {CHECKLIST_CATEGORIES.map((step, index) => (
              <motion.div
                key={step.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Content alternates left/right */}
                <div className={index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"}>
                  <div
                    className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-terracotta-50 text-terracotta-600 font-body text-xs uppercase tracking-wider mb-4 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    {iconMap[step.icon]}
                    <span>{step.name_fr}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-700 mb-3">
                    {step.name_fr.split("—")[1]?.trim() || step.name_fr}
                  </h3>
                  <p className="font-body text-body-sm text-navy-500 leading-relaxed">
                    {getStepDescription(step.slug)}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-ivory-50 border-2 border-gold-500 shadow-soft z-10" />
                </div>

                {/* Spacer for alternating layout */}
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getStepDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    khotba:
      "La visite officielle de la famille du prétendant. Les premières discussions, la demande en bonne et due forme. Un moment solennel et chaleureux qui scelle l'union des deux familles.",
    fatiha:
      "La lecture de la Fatiha officialise les fiançailles. Bénédiction religieuse, échange de promesses, et premières célébrations en famille autour d'un repas traditionnel.",
    kitab:
      "L'acte de mariage religieux et civil. Signature chez le notaire ou l'imam, souvent bien avant la fête. Le cadre légal et religieux du mariage est posé.",
    chouar:
      "La présentation du trousseau de la mariée. Valises soigneusement préparées, mises en scène codifiée, exposition des cadeaux et des affaires. Un moment visuellement riche et très photographié.",
    henne:
      "La nuit du Henné (Hannouna). Soirée dédiée à la mariée, décorations spécifiques, tenue traditionnelle Karakou ou Chedda, artiste henné, ambiance musicale chaâbi et andalouse. L'une des étapes les plus importantes.",
    "jour-j":
      "Le grand jour ! Cérémonie à la salle des fêtes, traiteur, orchestre ou DJ, photographe et vidéaste, gâteaux traditionnels, tenues de cérémonie. L'aboutissement de mois de préparation.",
    sebiaa:
      "Le lendemain du mariage. Suite des festivités en famille, visite aux mariés, dernier jour de célébration. Moins connu des plateformes occidentales mais essentiel dans la tradition algérienne.",
  };
  return descriptions[slug] || "";
}
