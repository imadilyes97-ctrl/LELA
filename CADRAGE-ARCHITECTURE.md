# LELLA — Plan de Cadrage Architecture

> **Projet :** Plateforme de référence des événements familiaux en Algérie
> **Date :** 2026-07-10
> **Stack :** Next.js 14 App Router · TypeScript strict · Tailwind CSS · Supabase · Framer Motion · next-intl

---

## 1. Arborescence du Projet

```
lella/
├── .github/
│   └── workflows/
│       └── ci.yml                    # CI/CD GitHub Actions
│
├── public/
│   ├── fonts/                        # Polices auto-hébergées
│   ├── images/                       # Images statiques (og, favicon)
│   ├── locales/                      # Fichiers de traduction (optionnel)
│   └── manifest.json                 # PWA manifest
│
├── src/
│   ├── app/                          # App Router (Next.js 14)
│   │   ├── [locale]/                 # i18n : fr | ar
│   │   │   ├── layout.tsx            # Layout racine avec providers
│   │   │   ├── page.tsx              # Landing page (storytelling 5 actes)
│   │   │   │
│   │   │   ├── (marketing)/          # Pages publiques
│   │   │   │   ├── a-propos/page.tsx
│   │   │   │   ├── comment-ca-marre/page.tsx
│   │   │   │   ├── pour-les-prestataires/page.tsx
│   │   │   │   ├── blog/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   ├── contact/page.tsx
│   │   │   │   └── legal/
│   │   │   │       ├── cgu/page.tsx
│   │   │   │       └── confidentialite/page.tsx
│   │   │   │
│   │   │   ├── prestataires/         # Marketplace
│   │   │   │   ├── page.tsx          # Recherche & filtres
│   │   │   │   ├── [categorie]/      # Par catégorie
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/page.tsx  # Fiche prestataire
│   │   │   │   └── results/page.tsx  # Résultats recherche
│   │   │   │
│   │   │   ├── (auth)/               # Authentification
│   │   │   │   ├── connexion/page.tsx
│   │   │   │   ├── inscription/page.tsx
│   │   │   │   └── mot-de-passe-oublie/page.tsx
│   │   │   │
│   │   │   ├── (dashboard)/
│   │   │   │   ├── client/           # Espace client (future mariée)
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── page.tsx      # Dashboard overview
│   │   │   │   │   ├── checklist/    # Checklist mariage algérien
│   │   │   │   │   ├── budget/       # Suivi budget
│   │   │   │   │   ├── devis/        # Mes demandes de devis
│   │   │   │   │   ├── reservations/ # Mes réservations
│   │   │   │   │   ├── messagerie/   # Messages
│   │   │   │   │   ├── favoris/      # Prestataires favoris
│   │   │   │   │   └── partage/      # Partage famille
│   │   │   │   │
│   │   │   │   └── prestataire/      # Espace prestataire
│   │   │   │       ├── layout.tsx
│   │   │   │       ├── page.tsx      # Dashboard stats
│   │   │   │       ├── profil/       # Gestion fiche vitrine
│   │   │   │       ├── portfolio/    # Photos/vidéos
│   │   │   │       ├── calendrier/   # Disponibilités
│   │   │   │       ├── devis/        # Demandes reçues
│   │   │   │       ├── messagerie/   # Messages clients
│   │   │   │       ├── avis/         # Avis clients
│   │   │   │       └── abonnement/   # Formule
│   │   │   │
│   │   │   └── admin/                # Espace admin
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx          # Dashboard analytics
│   │   │       ├── utilisateurs/
│   │   │       ├── prestataires/
│   │   │       ├── categories/
│   │   │       ├── avis/
│   │   │       ├── blog/
│   │   │       └── configuration/
│   │   │
│   │   ├── api/                      # API routes (si besoin)
│   │   └── layout.tsx                # Root layout (html, body)
│   │
│   ├── components/                   # Design System Atomique
│   │   ├── ui/                       # Atoms (Design System)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...
│   │   │
│   │   ├── molecules/                # Molécules
│   │   │   ├── search-bar.tsx
│   │   │   ├── vendor-card.tsx
│   │   │   ├── review-card.tsx
│   │   │   ├── booking-calendar.tsx
│   │   │   ├── budget-progress.tsx
│   │   │   ├── checklist-item.tsx
│   │   │   └── ...
│   │   │
│   │   ├── organisms/                # Organismes
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── search-filters.tsx
│   │   │   ├── vendor-gallery.tsx
│   │   │   ├── messaging-thread.tsx
│   │   │   └── ...
│   │   │
│   │   └── templates/                # Templates de page
│   │       ├── marketing-layout.tsx
│   │       ├── dashboard-layout.tsx
│   │       └── auth-layout.tsx
│   │
│   ├── hooks/                        # Custom hooks
│   │   ├── use-auth.ts
│   │   ├── use-debounce.ts
│   │   ├── use-media-query.ts
│   │   ├── use-scroll-animation.ts
│   │   └── use-intersection-observer.ts
│   │
│   ├── lib/                          # Logique métier & utilitaires
│   │   ├── supabase/
│   │   │   ├── client.ts            # Client Supabase (côté client)
│   │   │   ├── server.ts            # Client Supabase (serveur)
│   │   │   ├── admin.ts             # Client Supabase (admin)
│   │   │   └── middleware.ts         # Auth middleware
│   │   ├── validations/             # Schémas Zod
│   │   │   ├── auth.ts
│   │   │   ├── vendor.ts
│   │   │   ├── booking.ts
│   │   │   └── review.ts
│   │   ├── constants.ts             # Constantes globales
│   │   ├── utils.ts                 # Fonctions utilitaires
│   │   └── types.ts                 # Types globaux
│   │
│   ├── i18n/                         # Internationalisation
│   │   ├── config.ts                # Config next-intl
│   │   ├── request.ts               # Récupération locale
│   │   ├── routing.ts               # Routing i18n
│   │   └── messages/                # Fichiers de traduction
│   │       ├── fr/
│   │       │   ├── common.json
│   │       │   ├── landing.json
│   │       │   ├── marketplace.json
│   │       │   ├── dashboard.json
│   │       │   └── auth.json
│   │       └── ar/
│   │           └── ...
│   │
│   ├── stores/                       # State management (Zustand)
│   │   ├── auth-store.ts
│   │   ├── search-store.ts
│   │   └── ui-store.ts
│   │
│   └── styles/                       # Styles globaux
│       ├── globals.css
│       └── animations.css
│
├── supabase/                         # Config Supabase
│   ├── migrations/
│   │   └── 001_schema.sql           # Schéma DDL complet
│   ├── seed.sql                     # Données de démo
│   └── config.toml                  # Supabase config
│
├── tests/                            # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│       └── playwright.config.ts
│
├── docs/
│   ├── ADR/                          # Architecture Decision Records
│   ├── API.md
│   └── DEPLOYMENT.md
│
├── .env.example
├── .env.local
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── package.json
├── README.md
└── CONTRIBUTING.md
```

---

## 2. Schéma de Base de Données (Supabase / PostgreSQL)

### 2.1 Tables Principales

```sql
-- ============================================
-- ENUMS
-- ============================================
CREATE TYPE user_role AS ENUM ('client', 'vendor', 'admin');
CREATE TYPE event_type AS ENUM ('mariage', 'hannouna', 'fiancailles', 'aqiqa', 'khitane', 'anniversaire', 'autre');
CREATE TYPE vendor_category AS ENUM (
  'salle-des-fetes', 'traiteur', 'photographe', 'videaste',
  'orchestre-dj', 'decoration-fleuriste', 'couturier-tenues',
  'artiste-henne', 'patisserie', 'voiture-luxe',
  'bijouterie', 'faire-part', 'wedding-planner'
);
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');
CREATE TYPE inquiry_status AS ENUM ('new', 'discussing', 'accepted', 'refused', 'expired');
CREATE TYPE checklist_category AS ENUM ('khotba', 'fatiha', 'kitab', 'chouar', 'henne', 'jour_j', 'sebiaa');

-- ============================================
-- PROFILS
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'client',
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  language TEXT DEFAULT 'fr',
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRESTATAIRES
-- ============================================
CREATE TABLE vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category vendor_category NOT NULL,
  subcategory TEXT,
  description TEXT,
  story TEXT,                             -- Storytelling (Etsy-style)
  tagline TEXT,
  city TEXT NOT NULL,
  region TEXT NOT NULL,
  address TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  phone TEXT,
  website TEXT,
  social_links JSONB,                     -- {facebook, instagram, tiktok}
  price_range_min DECIMAL,
  price_range_max DECIMAL,
  capacity INTEGER,                       -- Pour salles
  cover_image TEXT,
  logo_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  verification_badge TEXT,                -- 'identity', 'professional', 'premium'
  response_time_hours INTEGER,
  subscription_tier TEXT DEFAULT 'free',  -- 'free', 'premium', 'featured'
  is_active BOOLEAN DEFAULT true,
  views_count INTEGER DEFAULT 0,
  completed_bookings INTEGER DEFAULT 0,
  avg_rating DECIMAL(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Galerie prestataire
CREATE TABLE vendor_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  type TEXT CHECK (type IN ('image', 'video')),
  alt_text TEXT,
  is_cover BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Disponibilités
CREATE TABLE vendor_availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  is_available BOOLEAN DEFAULT true,
  time_slots JSONB,                       -- [{"start":"09:00","end":"18:00"}]
  UNIQUE(vendor_id, date)
);

-- Prestations / Services
CREATE TABLE vendor_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL,
  price_type TEXT CHECK (price_type IN ('fixed', 'per_person', 'per_hour', 'devis')),
  is_optional BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0
);

-- ============================================
-- CLIENTS / FUTURS MARIÉS
-- ============================================
CREATE TABLE client_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  event_type event_type DEFAULT 'mariage',
  wedding_date DATE,
  partner_name TEXT,
  budget_global DECIMAL,
  city TEXT,
  region TEXT,
  guest_count INTEGER,
  has_family_sharing BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CHECKLIST MARIAGE ALGÉRIEN
-- ============================================
CREATE TABLE checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  category checklist_category NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT false,
  due_date DATE,
  sort_order INTEGER DEFAULT 0,
  assigned_to TEXT,                       -- 'me', 'partner', 'family'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BUDGET
-- ============================================
CREATE TABLE budget_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  category vendor_category NOT NULL,
  vendor_id UUID REFERENCES vendors(id),
  description TEXT,
  estimated_amount DECIMAL NOT NULL,
  actual_amount DECIMAL,
  is_paid BOOLEAN DEFAULT false,
  due_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- DEMANDES DE DEVIS & RÉSERVATIONS
-- ============================================
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  status inquiry_status DEFAULT 'new',
  event_type event_type DEFAULT 'mariage',
  event_date DATE,
  guest_count INTEGER,
  message TEXT,
  budget_min DECIMAL,
  budget_max DECIMAL,
  additional_info JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_id UUID REFERENCES inquiries(id),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  status booking_status DEFAULT 'pending',
  event_date DATE NOT NULL,
  total_amount DECIMAL,
  deposit_amount DECIMAL,
  deposit_paid BOOLEAN DEFAULT false,
  contract_terms TEXT,
  confirmed_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AVIS CLIENTS
-- ============================================
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID UNIQUE NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  title TEXT,
  comment TEXT NOT NULL,
  photos TEXT[],
  is_verified BOOLEAN DEFAULT false,      -- Uniquement après prestation confirmée
  is_moderated BOOLEAN DEFAULT false,
  vendor_response TEXT,
  vendor_response_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- MESSAGERIE
-- ============================================
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  inquiry_id UUID REFERENCES inquiries(id),
  last_message_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(client_id, vendor_id)
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  attachments TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- FAVORIS
-- ============================================
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(client_id, vendor_id)
);

-- ============================================
-- PARTAGE FAMILIAL
-- ============================================
CREATE TABLE family_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  member_email TEXT NOT NULL,
  member_name TEXT,
  role TEXT CHECK (role IN ('viewer', 'contributor')) DEFAULT 'viewer',
  token TEXT UNIQUE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- NOTIFICATIONS
-- ============================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,                     -- 'new_inquiry', 'new_message', 'new_review', 'booking_confirmed'
  title TEXT NOT NULL,
  body TEXT,
  data JSONB,                             -- Données contextuelles
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CONTENU ÉDITORIAL / BLOG
-- ============================================
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_id UUID REFERENCES profiles(id),
  category TEXT,
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_vendors_category ON vendors(category);
CREATE INDEX idx_vendors_city ON vendors(city);
CREATE INDEX idx_vendors_region ON vendors(region);
CREATE INDEX idx_vendors_verified ON vendors(is_verified);
CREATE INDEX idx_vendors_featured ON vendors(is_featured);
CREATE INDEX idx_vendors_slug ON vendors(slug);
CREATE INDEX idx_inquiries_client ON inquiries(client_id);
CREATE INDEX idx_inquiries_vendor ON inquiries(vendor_id);
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_created ON messages(created_at);
CREATE INDEX idx_reviews_vendor ON reviews(vendor_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_notifications_profile ON notifications(profile_id);
CREATE INDEX idx_notifications_read ON notifications(is_read);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(is_published, published_at);
```

### 2.2 Row Level Security (RLS)

```sql
-- Profils : chacun voit/modifie son propre profil
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Prestataires : visibles publiquement (SELECT pour tous)
CREATE POLICY "Vendors are publicly visible" ON vendors
  FOR SELECT USING (is_active = true);
-- Prestataire peut modifier sa fiche
CREATE POLICY "Vendor can manage own profile" ON vendors
  FOR ALL USING (profile_id = auth.uid());

-- Devis : client et prestataire concernés peuvent voir
CREATE POLICY "Inquiry participants can view" ON inquiries
  FOR SELECT USING (
    client_id IN (SELECT id FROM client_profiles WHERE profile_id = auth.uid())
    OR vendor_id IN (SELECT id FROM vendors WHERE profile_id = auth.uid())
    OR auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin')
  );

-- Messages : seuls les participants de la conversation
CREATE POLICY "Conversation participants can view messages" ON messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM conversations c
      WHERE c.id = conversation_id
      AND (
        c.client_id IN (SELECT id FROM client_profiles WHERE profile_id = auth.uid())
        OR c.vendor_id IN (SELECT id FROM vendors WHERE profile_id = auth.uid())
      )
    )
  );

-- Avis : visibles publiquement si modérés
CREATE POLICY "Reviews are publicly visible" ON reviews
  FOR SELECT USING (is_moderated = true OR is_verified = true);
```

---

## 3. Design System — Direction Artistique

### 3.1 Palette Couleurs (Premium Maghrébin)

```css
/* Inspiration : terracotta algérien, or, ivoire, vert émeraude, bleu nuit */
:root {
  /* Primitives */
  --color-terracotta: #C8674A;
  --color-terracotta-dark: #A34D32;
  --color-terracotta-light: #E8A58D;

  --color-gold: #C9A84C;
  --color-gold-light: #E8D08C;
  --color-gold-dark: #A8882E;

  --color-ivory: #FDF8F0;
  --color-cream: #F5EDE0;

  --color-emerald: #1B6B4A;
  --color-emerald-light: #2D8F64;

  --color-navy: #1A2332;
  --color-navy-light: #2C3E50;

  /* Sémantique */
  --color-bg-primary: #FDF8F0;     /* Ivoire chaud */
  --color-bg-secondary: #F5EDE0;   /* Crème */
  --color-bg-dark: #1A2332;        /* Navy profond */

  --color-text-primary: #1A2332;
  --color-text-secondary: #5A6577;
  --color-text-on-dark: #FDF8F0;
  --color-text-muted: #9CA3AF;

  --color-accent: #C8674A;         /* Terracotta principal */
  --color-accent-hover: #A34D32;
  --color-accent-gold: #C9A84C;    /* Or secondaire */

  --color-border: #E5DDD2;
  --color-border-light: #F0EBE3;

  --color-success: #1B6B4A;
  --color-warning: #C9A84C;
  --color-error: #C8674A;
}
```

### 3.2 Typographie

| Usage | Police | Poids | Détail |
|-------|--------|-------|--------|
| **Titres display** | Playfair Display (serif) | 700, 900 | Élégance, raffinement |
| **Titres section** | Playfair Display | 600, 700 | |
| **Corps de texte** | Inter (sans-serif) | 400, 500 | Lisibilité, modernité |
| **Menu & UI** | Inter | 400, 500, 600 | |
| **Arabe (RTL)** | Noto Naskh Arabic (serif) / Tajawal (sans) | — | Support RTL natif |

### 3.3 Composants Clés

| Composant | Description |
|-----------|-------------|
| `Button` | Variants : primary (terracotta), secondary (outline gold), ghost, premium (gradient) |
| `Card` | Vendor card, review card, article card — avec overlay hover, glassmorphism optionnel |
| `HeroSection` | Fullscreen storytelling avec parallax, video overlay, ou slideshow |
| `SearchBar` | Barre de recherche principale avec autocomplétion et icônes |
| `VendorGallery` | Galerie photo plein écran type Airbnb |
| `BookingCalendar` | Calendrier de disponibilité par date |
| `BudgetProgress` | Barre de progression budget avec catégories |
| `ChecklistPanel` | Checklist interactive du mariage algérien (par étape rituelle) |
| `MessagingThread` | Fil de discussion temps réel |
| `ReviewCard` | Carte d'avis avec note, photo, réponse prestataire |
| `FilterPanel` | Filtres avancés combinables (prix, ville, catégorie, note, date) |

---

## 4. User Flows Principaux

### 4.1 Future Mariée
```
Landing page (wow) 
  → Découvre les prestataires 
    → Filtre par catégorie/région 
      → Visite fiche prestataire (galerie, avis, tarifs) 
        → Envoie demande de devis 
          → Reçoit réponse dans messagerie 
            → Réserve et suit dans son dashboard
```

### 4.2 Prestataire
```
Inscription 
  → Création fiche vitrine (onboarding guidé) 
    → Dashboard : gère calendrier, devis, messages 
      → Reçoit demande → répond → confirme réservation
```

### 4.3 Admin
```
Dashboard analytics 
  → Modère avis, fiches, contenus 
    → Gère utilisateurs et catégories
```

---

## 5. Plan de Lots d'Exécution

| Lot | Nom | Dépendances | Modèles |
|-----|-----|-------------|---------|
| **1** | Design System + Landing Page | Aucune | GLM-5.2 Design + Nemotron + MiniMax |
| **2** | Marketplace & Recherche | Lot 1 | Nemotron + GLM-5.2 |
| **3** | Auth & Espaces Client/Prestataire | Lot 1 | Nemotron + GLM-5.2 Design |
| **4** | Messagerie, Avis & Notifications | Lot 3 | MiniMax + North Mini |
| **5** | Espace Admin | Lots 2, 3 | Nemotron + GLM-5.2 |
| **6** | SEO, Perf, Accessibilité, Tests | Lots 1-5 | North Mini + MiniMax |

---

## 6. Risques & Atténuations

| Risque | Probabilité | Atténuation |
|--------|-------------|-------------|
| **Paiement en ligne** (culturellement sensible en Algérie) | Haute | Hybride : devis gratuit + acompte optionnel + paiement à la prestation |
| **Confiance des prestataires** (habitués à Facebook) | Haute | Onboarding guidé, badge vérification, vitrine professionnelle |
| **i18n RTL complexe** (Arabe) | Moyenne | next-intl + test cross-langue dès le Lot 1 |
| **Performance mobile** (majorité traffic Algérie) | Moyenne | Mobile-first, images optimisées, lazy loading |
| **Modération des avis** (faux avis) | Moyenne | Avis uniquement après prestation confirmée + modération admin |

---

*Document d'architecture généré par JARVIS · 2026-07-10*
