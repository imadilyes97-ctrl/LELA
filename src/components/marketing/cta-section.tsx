"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-section bg-ivory-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-50 text-terracotta-600 font-body text-xs uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3 h-3" />
            Prêt à commencer ?
          </span>

          <h2 className="font-display text-display-md text-navy-700 mb-6">
            Vous organisez votre mariage ?
            <br />
            <span className="text-terracotta-600">On s&apos;occupe de tout.</span>
          </h2>

          <p className="font-body text-body text-navy-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Créez votre projet LELLA en 2 minutes, accédez à des centaines de prestataires
            vérifiés, gérez votre budget et votre checklist, et partagez tout avec votre famille.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="premium" size="xl" className="rounded-xl">
              Commencer mon projet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="secondary" size="xl" className="rounded-xl">
              Je suis un prestataire
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
