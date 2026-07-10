"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";
import Link from "next/link";
import { FEATURED_VENDORS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, MapPin, Sparkles, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                           */
/* ------------------------------------------------------------------ */

const badgeStyles: Record<string, { bg: string; text: string }> = {
  "Top choix 2026": { bg: "bg-gold-500", text: "text-ivory-50" },
  "Coup de cœur": { bg: "bg-rose-500", text: "text-ivory-50" },
  Expert: { bg: "bg-navy-600", text: "text-ivory-50" },
  Tendance: { bg: "bg-emerald-600", text: "text-ivory-50" },
  "Meilleur note": { bg: "bg-gold-500", text: "text-ivory-50" },
  "Artisan d'exception": { bg: "bg-terracotta-600", text: "text-ivory-50" },
};

const defaultBadge = { bg: "bg-gold-600", text: "text-ivory-50" };

const vendorGradients = [
  {
    // Palais d'El-Mouradia — Terracotta & Gold Royal
    bg: "from-terracotta-700 via-gold-600 to-terracotta-900",
  },
  {
    // Traiteur Les Délices d'Orient — Warm Amber & Gold
    bg: "from-gold-700 via-amber-600 to-gold-900",
  },
  {
    // Studio Lumières d'Afrique — Navy & Gold
    bg: "from-navy-800 via-gold-600 to-navy-900",
  },
  {
    // Orchestre Ziryab — Deep Rose & Gold
    bg: "from-rose-800 via-terracotta-600 to-rose-900",
  },
  {
    // Yasmina Henné Art — Emerald & Gold
    bg: "from-emerald-800 via-gold-600 to-emerald-900",
  },
  {
    // Chedda Couture — Terracotta & Rose
    bg: "from-terracotta-700 via-rose-600 to-terracotta-900",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ------------------------------------------------------------------ */
/*  StarRating                                                          */
/* ------------------------------------------------------------------ */

function StarRating({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(1, Math.max(0, rating - (star - 1)));
          return (
            <span key={star} className="relative w-3.5 h-3.5">
              {/* Empty star background */}
              <Star className="absolute inset-0 w-3.5 h-3.5 text-ivory-300" />
              {/* Filled star foreground (clipped) */}
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
              </span>
            </span>
          );
        })}
      </div>
      <span className="font-body text-sm font-semibold text-navy-600">
        {rating.toFixed(1)}
      </span>
      <span className="font-body text-xs text-navy-400">
        ({reviewCount} avis)
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  VendorCard — 3D tilt + gradient placeholder                        */
/* ------------------------------------------------------------------ */

function VendorCard({
  vendor,
  index,
}: {
  vendor: (typeof FEATURED_VENDORS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 200, damping: 25 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 200, damping: 25 }
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const gradient = vendorGradients[index % vendorGradients.length];
  const badge = badgeStyles[vendor.badge] ?? defaultBadge;
  const initials = vendor.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div variants={staggerItem} className="group relative">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="relative h-full rounded-2xl bg-white/75 backdrop-blur-md border border-ivory-200/70 shadow-soft hover:shadow-card-hover transition-shadow duration-500 overflow-hidden"
      >
        {/* ========== Gradient Placeholder Header ========== */}
        <div
          className={cn(
            "relative h-44 md:h-48 overflow-hidden bg-gradient-to-br",
            gradient.bg
          )}
        >
          {/* Decorative orb — top right */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-ivory-50/6 blur-xl" />

          {/* Decorative orb — bottom left */}
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-ivory-50/6 blur-xl" />

          {/* Decorative orb — center */}
          <div className="absolute top-1/2 left-1/3 w-28 h-28 rounded-full bg-gold-400/10 blur-2xl" />

          {/* Floating diamond / geometric accent */}
          <div className="absolute top-1/4 right-1/4 w-12 h-12 rotate-45 border border-ivory-50/10 rounded-sm" />
          <div className="absolute bottom-1/3 right-[15%] w-6 h-6 rotate-45 bg-ivory-50/8 rounded-sm" />

          {/* Diamond tessellation pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Subtle linear shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory-50/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

          {/* Monogram watermark */}
          <div className="absolute bottom-4 left-5 select-none">
            <span className="font-display text-4xl md:text-5xl font-bold text-ivory-50/15 tracking-tight">
              {initials}
            </span>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-body font-semibold uppercase tracking-[0.15em] shadow-lg backdrop-blur-sm",
                badge.bg,
                badge.text
              )}
            >
              <Sparkles className="w-3 h-3" />
              {vendor.badge}
            </span>
          </div>

          {/* Location chip */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-navy-900/40 backdrop-blur-sm text-ivory-200/85 font-body text-[10px] uppercase tracking-wider">
              <MapPin className="w-3 h-3" />
              {vendor.location}
            </span>
          </div>
        </div>

        {/* ========== Card Body (glassmorphism) ========== */}
        <div className="relative p-5 md:p-6">
          {/* Category label */}
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-terracotta-500 font-semibold">
            {vendor.category}
          </span>

          {/* Vendor name */}
          <h3 className="font-display text-heading-md text-navy-700 mt-1 mb-3 leading-snug">
            {vendor.name}
          </h3>

          {/* Star rating */}
          <StarRating rating={vendor.rating} reviewCount={vendor.reviews} />

          {/* Description */}
          <p className="font-body text-body-sm text-navy-500 leading-relaxed mt-3 mb-5 line-clamp-2">
            {vendor.description}
          </p>

          {/* CTA button */}
          <Link
            href={`/prestataires/${vendor.categorySlug}/${vendor.id}`}
            className="block"
          >
            <Button
              variant="outline"
              size="sm"
              fullWidth
              className="group/btn rounded-lg"
            >
              <span>Voir le profil</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  FeaturedVendorsSection                                             */
/* ------------------------------------------------------------------ */

export function FeaturedVendorsSection() {
  return (
    <section className="relative py-section bg-ivory-100 overflow-hidden">
      {/* ---- Decorative background layers ---- */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-terracotta-200/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gold-200/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-gold opacity-30 pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C8674A\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ---- Section Header ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 text-gold-700 font-body text-xs uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Sélection
          </motion.span>
          <h2 className="font-display text-display-md text-navy-700 mb-4">
            Prestataires en vedette
            <br />
            <span className="gradient-text">pour votre mariage</span>
          </h2>
          <p className="font-body text-body text-navy-500 leading-relaxed max-w-xl mx-auto">
            Une sélection des meilleurs professionnels du mariage en Algérie,
            soigneusement choisis pour leur excellence et leur savoir-faire
            unique.
          </p>
        </motion.div>

        {/* ---- Vendor Grid (stagger animation on scroll) ---- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7"
        >
          {FEATURED_VENDORS.map((vendor, index) => (
            <VendorCard key={vendor.id} vendor={vendor} index={index} />
          ))}
        </motion.div>

        {/* ---- Bottom CTA ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-center mt-14 md:mt-16"
        >
          <Link href="/prestataires">
            <Button variant="secondary" size="lg" className="rounded-xl">
              Découvrir tous les prestataires
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
