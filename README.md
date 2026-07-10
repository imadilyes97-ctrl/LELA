# LELLA 🇩🇿✨

**La plateforme de référence des événements familiaux en Algérie.**

Trouvez les meilleurs prestataires pour votre mariage algérien : salles des fêtes, traiteurs, photographes, orchestres, couturiers, artistes henné et bien plus — de la Khotba au Sebiaa.

---

## Stack Technique

| Domaine | Technologie |
|---------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Langage** | TypeScript strict |
| **Style** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Backend** | Supabase (PostgreSQL, Auth, Storage, Realtime) |
| **Forms** | React Hook Form + Zod |
| **i18n** | next-intl (FR/AR) |
| **Tests** | Vitest + Playwright |
| **Déploiement** | Vercel |

## Architecture

```
src/
├── app/              # Next.js App Router
│   ├── [locale]/     # Routes internationalisées
│   └── api/          # API routes
├── components/       # Design system atomique
│   ├── ui/           # Atomes (Button, Input, Card...)
│   ├── layout/       # Header, Footer
│   └── marketing/    # Landing page sections
├── lib/              # Logique métier
│   ├── supabase/     # Clients Supabase
│   └── validations/  # Schémas Zod
├── i18n/             # Internationalisation
├── hooks/            # Custom hooks
└── stores/           # Zustand stores
```

## Design System

**Direction artistique :** "L'Élégance Intemporelle" — fusion du luxe digital moderne (Apple, Airbnb, Dior) avec la richesse des traditions algériennes.

- **Palette :** Terracotta, Or, Ivoire, Émeraude, Bleu Nuit
- **Typographie :** Playfair Display (titres) + Inter (corps) + Noto Naskh Arabic (arabe)
- **Composants :** Atomic Design (atomes → molécules → organismes)
- **Animations :** Framer Motion, transitions fluides et discrètes

## Catégories de Prestataires

| # | Catégorie |
|---|-----------|
| 1 | Salles des fêtes |
| 2 | Traiteurs |
| 3 | Photographes |
| 4 | Vidéastes |
| 5 | Orchestres & DJ |
| 6 | Décoration & Fleuristes |
| 7 | Couturiers & Tenues |
| 8 | Artistes Henné |
| 9 | Pâtisseries & Cake |
| 10 | Voitures de luxe |
| 11 | Bijouterie & Accessoires |
| 12 | Faire-part & Papeterie |
| 13 | Wedding Planners |

## Parcours Mariage Algérien (Checklist)

1. **Khotba** — Demande en mariage
2. **Fatiha** — Lecture du Fatiha / Fiançailles
3. **Kitab** — Acte de mariage (religieux & civil)
4. **Chouar** — Trousseau de la mariée
5. **Hannouna** — Nuit du Henné
6. **Jour J** — La fête (salle, traiteur, orchestre)
7. **Sebiaa** — Lendemain du mariage

## Démarrage Rapide

```bash
git clone https://github.com/lella/lella.git
cd lella
npm install
cp .env.example .env.local
# Remplir .env.local avec vos credentials Supabase
npm run dev
```

## Configuration Supabase

1. Créez un projet sur [supabase.com](https://supabase.com)
2. Exécutez la migration : `supabase/migrations/001_schema.sql` dans l'éditeur SQL
3. Copiez vos clés dans `.env.local`

## Déploiement Vercel

```bash
npm run build
vercel --prod
```

## Roadmap Post-MVP

- [ ] Paiement en ligne (CIB, Edahabia)
- [ ] Application mobile
- [ ] Expansion Tunisie/Maroc
- [ ] Verticales Aqiqa, Khitane, Anniversaires

---

Construit avec ❤️ pour les familles algériennes.
