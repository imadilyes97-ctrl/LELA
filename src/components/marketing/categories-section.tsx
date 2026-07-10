"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { VENDOR_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Building2, UtensilsCrossed, Camera, Video, Music,
  Flower2, Shirt, Paintbrush, CakeSlice, Car,
  Gem, Mail, CalendarCheck, ArrowRight, Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7" />,
  UtensilsCrossed: <UtensilsCrossed className="w-7 h-7" />,
  Camera: <Camera className="w-7 h-7" />,
  Video: <Video className="w-7 h-7" />,
  Music: <Music className="w-7 h-7" />,
  Flower2: <Flower2 className="w-7 h-7" />,
  Shirt: <Shirt className="w-7 h-7" />,
  Paintbrush: <Paintbrush className="w-7 h-7" />,
  CakeSlice: <CakeSlice className="w-7 h-7" />,
  Car: <Car className="w-7 h-7" />,
  Gem: <Gem className="w-7 h-7" />,
  Mail: <Mail className="w-7 h-7" />,
  CalendarCheck: <CalendarCheck className="w-7 h-7" />,
};

const categoryGradients = [
  "from-terracotta-500 to-rose-600",
  "from-gold-500 to-gold-700",
  "from-emerald-500 to-emerald-700",
  "from-navy-500 to-navy-700",
  "from-terracotta-400 to-gold-600",
  "from-emerald-400 to-terracotta-500",
  "from-rose-500 to-terracotta-600",
  "from-gold-400 to-emerald-500",
  "from-navy-400 to-terracotta-500",
  "from-terracotta-500 to-gold-500",
  "from-emerald-500 to-navy-600",
  "from-gold-500 to-navy-500",
  "from-rose-400 to-gold-600",
];

export function CategoriesSection() {
  return (
    <section className="relative py-section bg-ivory-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-terracotta-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 text-gold-700 font-body text-xs uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles className="w-3 h-3" />
            La Marketplace
          </motion.span>
          <h2 className="font-display text-display-md text-navy-700 mb-6">
            Les 13 catégories de prestataires
            <br />
            <span className="gradient-text">pour votre mariage</span>
          </h2>
          <p className="font-body text-body text-navy-400 leading-relaxed max-w-xl mx-auto">
            Des salles des fêtes aux artistes henné, en passant par les traiteurs et couturiers —
            trouvez les meilleurs professionnels de chaque région d&apos;Algérie.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* First item — featured (spans 2 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="xl:col-span-2"
          >
            <Link
              href={`/prestataires/${VENDOR_CATEGORIES[0].slug}`}
              className="group relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-premium text-ivory-50 overflow-hidden h-full"
            >
              {/* Animated shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory-50/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative z-10 flex items-center gap-6 w-full">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-ivory-50/15 flex items-center justify-center backdrop-blur-sm">
                  {iconMap[VENDOR_CATEGORIES[0].icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-lg font-semibold mb-1">
                    {VENDOR_CATEGORIES[0].name_fr}
                  </h3>
                  <p className="font-body text-sm text-ivory-200/80">
                    {VENDOR_CATEGORIES[0].count} prestataires
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-ivory-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Rest of the items */}
          {VENDOR_CATEGORIES.slice(1).map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/prestataires/${cat.slug}`}
                className="group relative flex flex-col gap-4 p-5 rounded-xl bg-ivory-50 border border-ivory-300 hover:border-transparent hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-ivory-50 to-ivory-200" />

                {/* Colored top accent */}
                <div className={`relative z-10 w-full h-1 rounded-full bg-gradient-to-r ${categoryGradients[(index + 1) % categoryGradients.length]} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-terracotta-50 text-terracotta-600 flex items-center justify-center group-hover:bg-terracotta-600 group-hover:text-ivory-50 transition-all duration-300">
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-navy-700 group-hover:text-terracotta-600 transition-colors">
                        {cat.name_fr}
                      </h3>
                      <p className="font-body text-xs text-navy-300">
                        {cat.name_ar}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-navy-300 group-hover:text-terracotta-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="secondary" size="lg" className="rounded-xl">
            Voir tous les prestataires
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
