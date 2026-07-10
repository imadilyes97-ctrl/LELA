"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Heart, User } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-ivory-100/90 backdrop-blur-xl border-b border-ivory-300 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl text-navy-700 tracking-tight">
              LELLA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-navy-600 hover:text-terracotta-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="p-2 text-navy-500 hover:text-terracotta-600 transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-navy-500 hover:text-terracotta-600 transition-colors"
              aria-label="Favoris"
            >
              <Heart className="w-5 h-5" />
            </button>
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button variant="primary" size="sm">
              Inscription
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-navy-700"
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
            className="md:hidden bg-ivory-100 border-b border-ivory-300 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-base text-navy-700 py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-ivory-300" />
              <Button variant="ghost" size="md" fullWidth>
                Connexion
              </Button>
              <Button variant="primary" size="md" fullWidth>
                Inscription
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
