"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VENDOR_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Building2, UtensilsCrossed, Camera, Video, Music,
  Flower2, Shirt, Paintbrush, CakeSlice, Car,
  Gem, Mail, CalendarCheck, ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8" />,
  Camera: <Camera className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Music: <Music className="w-8 h-8" />,
  Flower2: <Flower2 className="w-8 h-8" />,
  Shirt: <Shirt className="w-8 h-8" />,
  Paintbrush: <Paintbrush className="w-8 h-8" />,
  CakeSlice: <CakeSlice className="w-8 h-8" />,
  Car: <Car className="w-8 h-8" />,
  Gem: <Gem className="w-8 h-8" />,
  Mail: <Mail className="w-8 h-8" />,
  CalendarCheck: <CalendarCheck className="w-8 h-8" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function CategoriesSection() {
  return (
    <section className="relative py-section bg-ivory-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold-600 mb-4 block">
            La Marketplace
          </span>
          <h2 className="font-display text-display-md text-navy-700 mb-6">
            Les 13 catégories de prestataires
            <br />
            <span className="text-terracotta-600">pour votre mariage</span>
          </h2>
          <p className="font-body text-body text-navy-500 leading-relaxed">
            Des salles des fêtes aux artistes henné, en passant par les traiteurs et couturiers —
            trouvez les meilleurs professionnels de chaque région d&apos;Algérie.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {VENDOR_CATEGORIES.map((cat) => (
            <motion.div key={cat.slug} variants={item}>
              <Link
                href={`/prestataires/${cat.slug}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-ivory-50 border border-ivory-300 hover:border-terracotta-500/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-terracotta-50 text-terracotta-600 flex items-center justify-center group-hover:bg-terracotta-600 group-hover:text-ivory-50 transition-all duration-300">
                  {iconMap[cat.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-sm font-medium text-navy-700 group-hover:text-terracotta-600 transition-colors">
                    {cat.name_fr}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-navy-300 group-hover:text-terracotta-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg">
            Voir tous les prestataires
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
