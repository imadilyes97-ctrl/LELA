"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const FloatingOrb = ({
  className,
  delay = 0,
  duration = 8,
}: {
  className: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [0, -30, 20, -15, 0],
      x: [0, 20, -15, 10, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const Particle = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 150 + Math.random() * 200;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const size = 2 + Math.random() * 4;

  return (
    <motion.div
      className="absolute rounded-full bg-gold-400/30"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
      }}
      animate={{
        x: [x, x + Math.random() * 60 - 30, x],
        y: [y, y + Math.random() * 60 - 30, y],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  );
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.5], [0, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 30);
    mouseY.set(y * 30);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-800"
    >
      {/* Background */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="absolute inset-0"
      >
        {/* Hero gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </motion.div>

      {/* Floating orbs — parallax depth layers */}
      <FloatingOrb
        className="top-[10%] right-[15%] w-96 h-96 bg-gold-500/10"
        delay={0}
        duration={10}
      />
      <FloatingOrb
        className="bottom-[20%] left-[10%] w-[500px] h-[500px] bg-terracotta-500/10"
        delay={2}
        duration={12}
      />
      <FloatingOrb
        className="top-[40%] left-[30%] w-64 h-64 bg-emerald-500/5"
        delay={4}
        duration={8}
      />
      <FloatingOrb
        className="bottom-[30%] right-[20%] w-80 h-80 bg-gold-500/8"
        delay={1}
        duration={9}
      />

      {/* Mouse-follower glow */}
      <motion.div
        className="absolute pointer-events-none w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-3xl"
        style={{
          x: useTransform(springX, (v) => v - 200),
          y: useTransform(springY, (v) => v - 200),
          left: "50%",
          top: "50%",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} index={i} total={30} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, filter: `blur(${blurAmount}px)` }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Premium badge */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory-50/8 border border-gold-500/20 shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-gold-400">
              La référence des événements familiaux en Algérie
            </span>
          </motion.div>
        </motion.div>

        {/* Main heading — word-by-word reveal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <motion.h1 variants={staggerItem} className="font-display text-display-lg text-ivory-50 leading-[0.9]">
            Chaque grand moment
          </motion.h1>
          <motion.h1
            variants={staggerItem}
            className="font-display text-display-lg leading-[0.9]"
          >
            <span className="gradient-text-gold">mérite une célébration</span>
          </motion.h1>
          <motion.h1 variants={staggerItem} className="font-display text-display-lg text-ivory-50 leading-[0.9]">
            à la hauteur
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-ivory-300/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Trouvez les meilleurs prestataires pour votre mariage algérien —
          <br className="hidden md:block" />
          de la <span className="text-gold-400">Khotba</span> à la{" "}
          <span className="text-terracotta-400">nuit du Henné</span>, du{" "}
          <span className="text-gold-400">Chouar</span> au{" "}
          <span className="text-ivory-300">Jour J</span>.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-1.5 bg-gradient-premium rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex items-center bg-ivory-50 rounded-xl overflow-hidden shadow-premium group-hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-500">
              <div className="flex items-center gap-2 pl-5 pr-3">
                <Search className="w-5 h-5 text-terracotta-500" />
                <span className="w-px h-6 bg-ivory-300" />
              </div>
              <input
                type="text"
                placeholder="Que cherchez-vous ? Traiteur, photographe, salle des fêtes..."
                className="flex-1 bg-transparent px-4 py-5 font-body text-base text-navy-700 placeholder:text-navy-300/60 focus:outline-none"
              />
              <div className="pr-2">
                <Button variant="premium" size="md" className="rounded-lg">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Salles des fêtes", slug: "salle-des-fetes" },
            { label: "Traiteurs", slug: "traiteur" },
            { label: "Photographes", slug: "photographe" },
            { label: "Orchestres", slug: "orchestre-dj" },
            { label: "Henné", slug: "henne" },
          ].map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
            >
              <Link
                href={`/prestataires/${cat.slug}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory-50/8 border border-ivory-50/15 text-ivory-300 font-body text-xs uppercase tracking-wider hover:bg-ivory-50/20 hover:text-ivory-50 hover:border-gold-500/30 transition-all duration-300"
              >
                {cat.label}
                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ivory-400/50"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">
            Découvrir
          </span>
          <div className="relative">
            <ChevronDown className="w-4 h-4" />
            <motion.div
              className="absolute inset-0 rounded-full bg-gold-500/20"
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
