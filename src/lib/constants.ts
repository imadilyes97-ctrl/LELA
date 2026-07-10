export const VENDOR_CATEGORIES = [
  { slug: "salle-des-fetes", name_fr: "Salles des fêtes", name_ar: "قاعات الحفلات", icon: "Building2", count: 0 },
  { slug: "traiteur", name_fr: "Traiteurs", name_ar: "مطاعم ومأكولات", icon: "UtensilsCrossed", count: 0 },
  { slug: "photographe", name_fr: "Photographes", name_ar: "مصورون", icon: "Camera", count: 0 },
  { slug: "videaste", name_fr: "Vidéastes", name_ar: "مصورو فيديو", icon: "Video", count: 0 },
  { slug: "orchestre-dj", name_fr: "Orchestres & DJ", name_ar: "أوركسترا ودي جي", icon: "Music", count: 0 },
  { slug: "decoration", name_fr: "Décoration & Fleuristes", name_ar: "ديكور وورود", icon: "Flower2", count: 0 },
  { slug: "couturier", name_fr: "Couturiers & Tenues", name_ar: "خياطون وأزياء", icon: "Shirt", count: 0 },
  { slug: "henne", name_fr: "Artistes Henné", name_ar: "فنانون حناء", icon: "Paintbrush", count: 0 },
  { slug: "patisserie", name_fr: "Pâtisseries & Cake", name_ar: "حلويات وكيك", icon: "CakeSlice", count: 0 },
  { slug: "voiture-luxe", name_fr: "Voitures de luxe", name_ar: "سيارات فاخرة", icon: "Car", count: 0 },
  { slug: "bijouterie", name_fr: "Bijouterie & Accessoires", name_ar: "مجوهرات", icon: "Gem", count: 0 },
  { slug: "faire-part", name_fr: "Faire-part & Papeterie", name_ar: "بطاقات ودعوات", icon: "Mail", count: 0 },
  { slug: "wedding-planner", name_fr: "Wedding Planners", name_ar: "منظمي حفلات", icon: "CalendarCheck", count: 0 },
] as const;

export const WILAYAS = [
  { code: 16, name_fr: "Alger", name_ar: "الجزائر" },
  { code: 31, name_fr: "Oran", name_ar: "وهران" },
  { code: 25, name_fr: "Constantine", name_ar: "قسنطينة" },
  { code: 13, name_fr: "Tlemcen", name_ar: "تلمسان" },
  { code: 6, name_fr: "Béjaïa", name_ar: "بجاية" },
  { code: 23, name_fr: "Annaba", name_ar: "عنابة" },
  { code: 19, name_fr: "Sétif", name_ar: "سطيف" },
  { code: 15, name_fr: "Tizi Ouzou", name_ar: "تيزي وزو" },
  { code: 9, name_fr: "Blida", name_ar: "البليدة" },
  { code: 27, name_fr: "Mostaganem", name_ar: "مستغانم" },
  { code: 35, name_fr: "Boumerdès", name_ar: "بومرداس" },
  { code: 47, name_fr: "Ghardaïa", name_ar: "غرداية" },
] as const;

export const CHECKLIST_CATEGORIES = [
  { slug: "khotba", name_fr: "Khotba — Demande en mariage", name_ar: "الخطبة", icon: "Heart" },
  { slug: "fatiha", name_fr: "Fatiha — Fiançailles", name_ar: "الفاتحة", icon: "BookOpen" },
  { slug: "kitab", name_fr: "Kitab — Acte de mariage", name_ar: "الكتاب", icon: "FileText" },
  { slug: "chouar", name_fr: "Chouar — Trousseau", name_ar: "الشوار", icon: "Luggage" },
  { slug: "henne", name_fr: "Hannouna — Nuit du Henné", name_ar: "الحنة", icon: "Palette" },
  { slug: "jour-j", name_fr: "Jour J — La fête", name_ar: "يوم الزفاف", icon: "PartyPopper" },
  { slug: "sebiaa", name_fr: "Sebiaa — Le lendemain", name_ar: "السبوع", icon: "Sun" },
] as const;

export const SITE_CONFIG = {
  name: "LELLA",
  tagline: "La plateforme des événements familiaux en Algérie",
  email: "contact@lella.dz",
  social: {
    instagram: "https://instagram.com/lella.dz",
    facebook: "https://facebook.com/lella.dz",
    tiktok: "https://tiktok.com/@lella.dz",
  },
} as const;
