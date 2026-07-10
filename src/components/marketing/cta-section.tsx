"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Shield, Clock } from "lucide-react";

const benefits = [
  { icon: <Heart className="w-4 h-4" />, text: "Accès à 500+ prestataires vérifiés" },
  { icon: <Shield className="w-4 h-4" />, text: "Avis et notes authentifiés" },
  { icon: <Clock className="w-4 h-4" />, text: "Création de projet en 2 minutes" },
];

export function CTASection() {
  return (
    <section className="relative py-section bg-ivory-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-gold opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-50 border border-terracotta-200/50 text-terracotta-600 font-body text-xs uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Prêt à commencer ?
          </motion.div>

          {/* Heading */}
          <h2 className="font-display text-display-md text-navy-700 mb-4">
            Vous organisez votre mariage ?
          </h2>
          <h2 className="font-display text-display-md mb-8">
            <span className="gradient-text-warm">On s&apos;occupe de tout.</span>
          </h2>

          {/* Description */}
          <p className="font-body text-body text-navy-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Créez votre projet LELLA en 2 minutes, accédez à des centaines de prestataires
            vérifiés, gérez votre budget et votre checklist, et partagez tout avec votre famille.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-2 text-navy-500 font-body text-sm"
              >
                <span className="text-terracotta-500">{benefit.icon}</span>
                {benefit.text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="premium" size="xl" className="rounded-xl text-base shadow-premium hover:shadow-glow-strong">
                Commencer mon projet
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="secondary" size="xl" className="rounded-xl text-base">
                Je suis un prestataire
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
