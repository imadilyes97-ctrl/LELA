"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Heart, User, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "/prestataires", label: "Prestataires" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-ivory-100/85 backdrop-blur-2xl border-b border-ivory-300/50 shadow-glass"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className={cn(
                "font-display text-2xl tracking-tight transition-colors duration-300",
                isScrolled ? "gradient-text" : "text-ivory-50"
              )}
            >
              LELLA
            </motion.span>
            {!isScrolled && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-1.5 h-1.5 rounded-full bg-gold-400"
              />
            )}
          </Link>

          {/* Desktop Nav — shown when scrolled or always on hover */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm transition-colors duration-200 relative group/link",
                  isScrolled
                    ? "text-navy-500 hover:text-terracotta-600"
                    : "text-ivory-200 hover:text-ivory-50"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover/link:w-full",
                  isScrolled ? "bg-terracotta-500" : "bg-gold-400"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-navy-400 hover:text-terracotta-600" : "text-ivory-300 hover:text-ivory-50"
              )}
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "p-2 transition-colors",
                isScrolled ? "text-navy-400 hover:text-terracotta-600" : "text-ivory-300 hover:text-ivory-50"
              )}
              aria-label="Favoris"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <Button
              variant={isScrolled ? "ghost" : "outline"}
              size="sm"
              className={cn(
                !isScrolled && "border-ivory-50/30 text-ivory-200 hover:text-ivory-50 hover:bg-ivory-50/10"
              )}
            >
              Connexion
            </Button>
            <Button variant={isScrolled ? "primary" : "premium"} size="sm">
              Inscription
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-navy-700" : "text-ivory-50"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Fermer menu" : "Ouvrir menu"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory-100/95 backdrop-blur-2xl border-b border-ivory-300/50 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-base text-navy-700 py-2 hover:text-terracotta-600 transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-ivory-300" />
              <div className="flex gap-3">
                <Button variant="ghost" size="md" fullWidth>
                  Connexion
                </Button>
                <Button variant="premium" size="md" fullWidth>
                  Inscription
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
