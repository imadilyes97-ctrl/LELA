"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Calendar } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

const AVATAR_COLORS = [
  "bg-terracotta-500",
  "bg-gold-500",
  "bg-emerald-500",
  "bg-navy-600",
  "bg-rose-500",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "text-gold-500 fill-gold-500" : "text-ivory-300"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  featured = false,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
  featured?: boolean;
}) {
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 20px 60px -15px rgba(0,0,0,0.15), 0 10px 30px -10px rgba(0,0,0,0.1)",
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      }}
      className={`group relative bg-white rounded-2xl border border-ivory-200/80 shadow-soft transition-shadow duration-500 ${
        featured
          ? "md:col-span-2 p-8 md:p-10 flex flex-col"
          : "p-6 md:p-7"
      }`}
    >
      {/* Subtle gold glow for featured card */}
      {featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-radial-gold opacity-40 pointer-events-none" />
      )}

      {/* Decorative quotation mark */}
      <div
        className={`absolute ${
          featured ? "top-6 right-6" : "top-4 right-4"
        } text-gold-200/50 pointer-events-none select-none`}
      >
        <Quote className={featured ? "w-10 h-10" : "w-7 h-7"} />
      </div>

      <div className="relative z-10">
        {/* Highlight phrase */}
        <p
          className={`font-display font-bold bg-gradient-to-r from-terracotta-600 via-gold-600 to-terracotta-500 bg-clip-text text-transparent mb-3 ${
            featured
              ? "text-2xl md:text-3xl leading-tight"
              : "text-lg md:text-xl leading-snug"
          }`}
        >
          &ldquo;{testimonial.highlight}&rdquo;
        </p>

        {/* Testimonial body */}
        <p
          className={`font-body text-navy-500 leading-relaxed ${
            featured ? "text-body mb-6" : "text-body-sm mb-5"
          }`}
        >
          {testimonial.text}
        </p>

        {/* User details */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`${avatarColor} rounded-full flex items-center justify-center text-ivory-50 font-display font-bold shrink-0 ${
              featured ? "w-12 h-12 text-base" : "w-10 h-10 text-sm"
            }`}
          >
            {testimonial.avatar}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`font-display text-navy-700 font-semibold ${
                  featured ? "text-base" : "text-sm"
                }`}
              >
                {testimonial.name}
              </span>
              <StarRating rating={testimonial.rating} />
            </div>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="flex items-center gap-1 text-xs text-navy-400 font-body">
                <MapPin className="w-3 h-3" />
                {testimonial.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-navy-400 font-body">
                <Calendar className="w-3 h-3" />
                {testimonial.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */

export function TestimonialsSection() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="relative py-section bg-ivory-50 overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23A34D32\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-gold opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ---- Section header ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-terracotta-600 mb-4 block">
            T&eacute;moignages
          </span>
          <h2 className="font-display text-display-md text-navy-700 mb-4">
            Ce qu&apos;ils disent
          </h2>
          <p className="font-body text-body text-navy-500 leading-relaxed max-w-2xl mx-auto">
            Des centaines de couples alg&eacute;riens nous font confiance pour
            organiser le plus beau jour de leur vie. D&eacute;couvrez leurs
            histoires.
          </p>
        </motion.div>

        {/* ---- Bento grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Featured — spans 2 columns on tablet and desktop */}
          <TestimonialCard testimonial={featured} index={0} featured />

          {/* Balanced visual order:
              Tablet (2 cols):  feat | feat | Lina | Nadia  →  Ines | Sarah
              Desktop (3 cols): feat | feat | Lina | Nadia  →  Ines | Sarah | (empty)
          */}
          <TestimonialCard testimonial={rest[3]} index={1} />
          <TestimonialCard testimonial={rest[0]} index={2} />
          <TestimonialCard testimonial={rest[1]} index={3} />
          <TestimonialCard testimonial={rest[2]} index={4} />
        </div>
      </div>
    </section>
  );
}
