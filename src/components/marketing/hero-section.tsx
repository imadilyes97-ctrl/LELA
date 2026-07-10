"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-700"
    >
      {/* Background gradient hero */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 bg-gradient-hero"
      />

      {/* Animated Moroccan pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-96 h-96 rounded-full bg-terracotta-500/10 blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory-50/10 border border-gold-500/30 text-gold-400 font-body text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            La référence des événements familiaux en Algérie
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-display-lg text-ivory-50 mb-6 leading-[0.9]"
        >
          Chaque grand moment
          <br />
          <span className="text-gold-400">mérite une célébration</span>
          <br />
          à la hauteur
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-ivory-300/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Trouvez les meilleurs prestataires pour votre mariage algérien —
          <br className="hidden md:block" />
          de la Khotba à la nuit du Henné, du Chouar au Jour J.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-premium rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative flex items-center bg-ivory-50 rounded-xl overflow-hidden shadow-premium">
              <div className="flex items-center gap-2 pl-5 pr-3 text-navy-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Que cherchez-vous ? Traiteur, photographe, salle des fêtes..."
                className="flex-1 bg-transparent px-4 py-5 font-body text-base text-navy-700 placeholder:text-navy-300 focus:outline-none"
              />
              <div className="pr-2">
                <Button variant="premium" size="md" className="rounded-lg">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories quick preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Salles des fêtes", slug: "salle-des-fetes" },
            { label: "Traiteurs", slug: "traiteur" },
            { label: "Photographes", slug: "photographe" },
            { label: "Orchestres", slug: "orchestre-dj" },
            { label: "Henné", slug: "henne" },
          ].map((cat) => (
            <Link
              key={cat.slug}
              href={`/prestataires/${cat.slug}`}
              className="px-4 py-2 rounded-full bg-ivory-50/10 border border-ivory-50/20 text-ivory-200 font-body text-xs uppercase tracking-wider hover:bg-ivory-50/20 hover:text-ivory-50 transition-all duration-300"
            >
              {cat.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-ivory-400/60"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">
            Découvrir
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
