-- ============================================
-- LELLA — Schéma de Base de Données Supabase
-- Version: 1.0.0
-- Date: 2026-07-10
-- ============================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- ============================================
-- ENUMS
-- ============================================
CREATE TYPE user_role AS ENUM ('client', 'vendor', 'admin', 'moderator');
CREATE TYPE vendor_status AS ENUM ('pending', 'active', 'suspended', 'rejected', 'onboarding');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled_by_client', 'cancelled_by_vendor', 'disputed', 'refunded');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'partial', 'refunded', 'failed');
CREATE TYPE inquiry_status AS ENUM ('new', 'read', 'replied', 'quoted', 'booked', 'declined', 'archived');
CREATE TYPE notification_type AS ENUM ('booking_request', 'booking_confirmed', 'booking_cancelled', 'new_message', 'new_review', 'payment_received', 'vendor_verified', 'system_alert');

-- ============================================
-- WILAYAS (Algérie — 58)
-- ============================================
CREATE TABLE wilayas (
    code        SMALLINT PRIMARY KEY,
    name_fr     VARCHAR(100) NOT NULL,
    name_ar     VARCHAR(100) NOT NULL,
    region      VARCHAR(50),
    is_coastal  BOOLEAN DEFAULT FALSE
);

INSERT INTO wilayas (code, name_fr, name_ar, region, is_coastal) VALUES
(1, 'Adrar', 'أدرار', 'Sud', FALSE),
(2, 'Chlef', 'الشلف', 'Nord', TRUE),
(3, 'Laghouat', 'الأغواط', 'Hauts-Plateaux', FALSE),
(4, 'Oum El Bouaghi', 'أم البواقي', 'Nord-Est', FALSE),
(5, 'Batna', 'باتنة', 'Nord-Est', FALSE),
(6, 'Béjaïa', 'بجاية', 'Nord', TRUE),
(7, 'Biskra', 'بسكرة', 'Sud-Est', FALSE),
(8, 'Béchar', 'بشار', 'Sud-Ouest', FALSE),
(9, 'Blida', 'البليدة', 'Nord', FALSE),
(10, 'Bouira', 'البويرة', 'Nord', FALSE),
(11, 'Tamanrasset', 'تمنراست', 'Sud', FALSE),
(12, 'Tébessa', 'تبسة', 'Nord-Est', FALSE),
(13, 'Tlemcen', 'تلمسان', 'Nord-Ouest', TRUE),
(14, 'Tiaret', 'تيارت', 'Hauts-Plateaux', FALSE),
(15, 'Tizi Ouzou', 'تيزي وزو', 'Nord', TRUE),
(16, 'Alger', 'الجزائر', 'Nord', TRUE),
(17, 'Djelfa', 'الجلفة', 'Hauts-Plateaux', FALSE),
(18, 'Jijel', 'جيجل', 'Nord', TRUE),
(19, 'Sétif', 'سطيف', 'Nord-Est', FALSE),
(20, 'Saïda', 'سعيدة', 'Hauts-Plateaux', FALSE),
(21, 'Skikda', 'سكيكدة', 'Nord', TRUE),
(22, 'Sidi Bel Abbès', 'سيدي بلعباس', 'Nord-Ouest', FALSE),
(23, 'Annaba', 'عنابة', 'Nord-Est', TRUE),
(24, 'Guelma', 'قالمة', 'Nord-Est', FALSE),
(25, 'Constantine', 'قسنطينة', 'Nord-Est', FALSE),
(26, 'Médéa', 'المدية', 'Nord', FALSE),
(27, 'Mostaganem', 'مستغانم', 'Nord', TRUE),
(28, 'M''Sila', 'المسيلة', 'Hauts-Plateaux', FALSE),
(29, 'Mascara', 'معسكر', 'Nord-Ouest', FALSE),
(30, 'Ouargla', 'ورقلة', 'Sud', FALSE),
(31, 'Oran', 'وهران', 'Nord-Ouest', TRUE),
(32, 'El Bayadh', 'البيض', 'Hauts-Plateaux', FALSE),
(33, 'Illizi', 'إيليزي', 'Sud', FALSE),
(34, 'Bordj Bou Arréridj', 'برج بوعريريج', 'Nord-Est', FALSE),
(35, 'Boumerdès', 'بومرداس', 'Nord', TRUE),
(36, 'El Tarf', 'الطارف', 'Nord-Est', TRUE),
(37, 'Tindouf', 'تندوف', 'Sud', FALSE),
(38, 'Tissemsilt', 'تيسمسيلت', 'Hauts-Plateaux', FALSE),
(39, 'El Oued', 'الوادي', 'Sud-Est', FALSE),
(40, 'Khenchela', 'خنشلة', 'Nord-Est', FALSE),
(41, 'Souk Ahras', 'سوق أهراس', 'Nord-Est', FALSE),
(42, 'Tipaza', 'تيبازة', 'Nord', TRUE),
(43, 'Mila', 'ميلة', 'Nord-Est', FALSE),
(44, 'Aïn Defla', 'عين الدفلى', 'Nord', FALSE),
(45, 'Naâma', 'النعامة', 'Sud-Ouest', FALSE),
(46, 'Aïn Témouchent', 'عين تموشنت', 'Nord-Ouest', TRUE),
(47, 'Ghardaïa', 'غرداية', 'Sud', FALSE),
(48, 'Relizane', 'غليزان', 'Nord-Ouest', FALSE),
(49, 'El M''Ghair', 'المغير', 'Sud-Est', FALSE),
(50, 'El Menia', 'المنيعة', 'Sud', FALSE),
(51, 'Ouled Djellal', 'أولاد جلال', 'Sud-Est', FALSE),
(52, 'Bordj Badji Mokhtar', 'برج باجي مختار', 'Sud', FALSE),
(53, 'Béni Abbès', 'بني عباس', 'Sud-Ouest', FALSE),
(54, 'Timimoun', 'تيميمون', 'Sud', FALSE),
(55, 'Touggourt', 'تقرت', 'Sud-Est', FALSE),
(56, 'Djanet', 'جانت', 'Sud', FALSE),
(57, 'In Salah', 'عين صالح', 'Sud', FALSE),
(58, 'In Guezzam', 'عين قزام', 'Sud', FALSE);

-- ============================================
-- PROFILS
-- ============================================
CREATE TABLE profiles (
    id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role            user_role NOT NULL DEFAULT 'client',
    email           VARCHAR(255) NOT NULL,
    phone           VARCHAR(20),
    first_name_fr   VARCHAR(100),
    last_name_fr    VARCHAR(100),
    first_name_ar   VARCHAR(100),
    last_name_ar    VARCHAR(100),
    avatar_url      TEXT,
    wilaya_code     SMALLINT REFERENCES wilayas(code),
    locale          VARCHAR(5) DEFAULT 'fr',
    is_active       BOOLEAN DEFAULT TRUE,
    last_login_at   TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- VENDOR CATEGORIES
-- ============================================
CREATE TABLE vendor_categories (
    id              BIGSERIAL PRIMARY KEY,
    slug            VARCHAR(100) UNIQUE NOT NULL,
    name_fr         VARCHAR(150) NOT NULL,
    name_ar         VARCHAR(150) NOT NULL,
    description_fr  TEXT,
    description_ar  TEXT,
    icon            VARCHAR(100),
    image_url       TEXT,
    parent_id       BIGINT REFERENCES vendor_categories(id),
    sort_order      INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO vendor_categories (slug, name_fr, name_ar, icon, sort_order) VALUES
('salle-des-fetes', 'Salles des fêtes', 'قاعات الحفلات', 'Building2', 1),
('traiteur', 'Traiteurs', 'مطاعم ومأكولات', 'UtensilsCrossed', 2),
('photographe', 'Photographes', 'مصورون', 'Camera', 3),
('videaste', 'Vidéastes', 'مصورو فيديو', 'Video', 4),
('orchestre-dj', 'Orchestres & DJ', 'أوركسترا ودي جي', 'Music', 5),
('decoration', 'Décoration & Fleuristes', 'ديكور وورود', 'Flower2', 6),
('couturier', 'Couturiers & Tenues traditionnelles', 'خياطون وأزياء تقليدية', 'Shirt', 7),
('henne', 'Artistes Henné', 'فنانون حناء', 'Paintbrush', 8),
('patisserie', 'Pâtisseries & Wedding Cake', 'حلويات وكيك الزفاف', 'CakeSlice', 9),
('voiture-luxe', 'Location voitures de luxe', 'تأجير سيارات فاخرة', 'Car', 10),
('bijouterie', 'Bijouterie & Accessoires', 'مجوهرات وإكسسوارات', 'Gem', 11),
('faire-part', 'Faire-part & Papeterie', 'بطاقات ودعوات', 'Mail', 12),
('wedding-planner', 'Wedding Planners', 'منظمي حفلات الزفاف', 'CalendarCheck', 13);

-- ============================================
-- VENDOR PROFILES
-- ============================================
CREATE TABLE vendor_profiles (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id          UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    business_name_fr    VARCHAR(200) NOT NULL,
    business_name_ar    VARCHAR(200) NOT NULL,
    business_slug       VARCHAR(250) UNIQUE NOT NULL,
    tagline_fr          VARCHAR(300),
    tagline_ar          VARCHAR(300),
    description_fr      TEXT,
    description_ar      TEXT,
    story_fr            TEXT,
    story_ar            TEXT,
    rc_number           VARCHAR(50),
    nif_number          VARCHAR(50),
    wilaya_code         SMALLINT NOT NULL REFERENCES wilayas(code),
    address_fr          TEXT,
    address_ar          TEXT,
    latitude            NUMERIC(10,7),
    longitude           NUMERIC(10,7),
    phone_primary       VARCHAR(20) NOT NULL,
    phone_secondary     VARCHAR(20),
    email_pro           VARCHAR(255),
    website_url         TEXT,
    instagram_url       TEXT,
    facebook_url        TEXT,
    tiktok_url          TEXT,
    logo_url            TEXT,
    cover_image_url     TEXT,
    gallery_images      JSONB DEFAULT '[]',
    price_range_min     NUMERIC(12,2),
    price_range_max     NUMERIC(12,2),
    max_capacity        INT,
    languages           TEXT[] DEFAULT ARRAY['fr', 'ar'],
    status              vendor_status DEFAULT 'onboarding',
    is_verified         BOOLEAN DEFAULT FALSE,
    featured_until      TIMESTAMPTZ,
    subscription_tier   VARCHAR(20) DEFAULT 'free',
    avg_rating          NUMERIC(3,2) DEFAULT 0,
    review_count        INT DEFAULT 0,
    completed_bookings  INT DEFAULT 0,
    response_rate       NUMERIC(5,2) DEFAULT 0,
    response_time_min   INT DEFAULT 0,
    accept_instant_book BOOLEAN DEFAULT FALSE,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Vendor-Category relationship
CREATE TABLE vendor_category_links (
    vendor_id   UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    category_id BIGINT NOT NULL REFERENCES vendor_categories(id) ON DELETE CASCADE,
    is_primary  BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (vendor_id, category_id)
);

-- Vendor media
CREATE TABLE vendor_media (
    id          BIGSERIAL PRIMARY KEY,
    vendor_id   UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    url         TEXT NOT NULL,
    type        VARCHAR(10) CHECK (type IN ('image', 'video')),
    caption_fr  TEXT,
    caption_ar  TEXT,
    is_cover    BOOLEAN DEFAULT FALSE,
    sort_order  INT DEFAULT 0,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Availability calendar
CREATE TABLE vendor_availability (
    id              BIGSERIAL PRIMARY KEY,
    vendor_id       UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    date            DATE NOT NULL,
    is_available    BOOLEAN DEFAULT TRUE,
    price_override  NUMERIC(12,2),
    UNIQUE(vendor_id, date)
);

-- Services
CREATE TABLE vendor_services (
    id                BIGSERIAL PRIMARY KEY,
    vendor_id         UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    category_id       BIGINT NOT NULL REFERENCES vendor_categories(id),
    name_fr           VARCHAR(250) NOT NULL,
    name_ar           VARCHAR(250) NOT NULL,
    description_fr    TEXT,
    description_ar    TEXT,
    price_type        VARCHAR(20) DEFAULT 'fixed',
    base_price        NUMERIC(12,2),
    currency          CHAR(3) DEFAULT 'DZD',
    min_guests        INT,
    max_guests        INT,
    duration_hours    NUMERIC(4,1),
    includes_fr       JSONB DEFAULT '[]',
    includes_ar       JSONB DEFAULT '[]',
    is_active         BOOLEAN DEFAULT TRUE,
    is_featured       BOOLEAN DEFAULT FALSE,
    sort_order        INT DEFAULT 0,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CLIENT PROFILES
-- ============================================
CREATE TABLE client_profiles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id      UUID UNIQUE NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    event_type      VARCHAR(50) DEFAULT 'mariage',
    wedding_date    DATE,
    partner_name    VARCHAR(200),
    budget_global   NUMERIC(12,2),
    wilaya_code     SMALLINT REFERENCES wilayas(code),
    guest_count     INT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CHECKLIST (Mariage algérien)
-- ============================================
CREATE TABLE checklist_items (
    id              BIGSERIAL PRIMARY KEY,
    client_id       UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    category        VARCHAR(50) NOT NULL,
    title_fr        TEXT NOT NULL,
    title_ar        TEXT,
    description_fr  TEXT,
    description_ar  TEXT,
    is_completed    BOOLEAN DEFAULT FALSE,
    due_date        DATE,
    sort_order      INT DEFAULT 0,
    assigned_to     VARCHAR(50) DEFAULT 'me',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BUDGET
-- ============================================
CREATE TABLE budget_items (
    id              BIGSERIAL PRIMARY KEY,
    client_id       UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    category_slug   VARCHAR(100) NOT NULL,
    vendor_id       UUID REFERENCES vendor_profiles(id),
    description_fr  TEXT,
    description_ar  TEXT,
    estimated_amount NUMERIC(12,2) NOT NULL,
    actual_amount   NUMERIC(12,2),
    is_paid         BOOLEAN DEFAULT FALSE,
    due_date        DATE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INQUIRIES (Demandes de devis)
-- ============================================
CREATE TABLE inquiries (
    id              BIGSERIAL PRIMARY KEY,
    client_id       UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    vendor_id       UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    service_id      BIGINT REFERENCES vendor_services(id),
    status          inquiry_status DEFAULT 'new',
    event_date      DATE,
    guest_count     INT,
    message_fr      TEXT,
    message_ar      TEXT,
    budget_min      NUMERIC(12,2),
    budget_max      NUMERIC(12,2),
    quoted_price    NUMERIC(12,2),
    vendor_response TEXT,
    responded_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BOOKINGS (Réservations)
-- ============================================
CREATE SEQUENCE booking_number_seq START 100000;

CREATE TABLE bookings (
    id                  BIGSERIAL PRIMARY KEY,
    booking_number      VARCHAR(30) UNIQUE NOT NULL DEFAULT ('LEL-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('booking_number_seq')::TEXT, 6, '0')),
    inquiry_id          BIGINT REFERENCES inquiries(id),
    vendor_id           UUID NOT NULL REFERENCES vendor_profiles(id),
    client_id           UUID NOT NULL REFERENCES client_profiles(id),
    service_id          BIGINT REFERENCES vendor_services(id),
    event_date          DATE NOT NULL,
    guest_count         INT,
    total_amount        NUMERIC(12,2) NOT NULL,
    deposit_required    BOOLEAN DEFAULT TRUE,
    deposit_amount      NUMERIC(12,2),
    deposit_paid        BOOLEAN DEFAULT FALSE,
    balance_due_date    DATE,
    payment_status      payment_status DEFAULT 'pending',
    status              booking_status DEFAULT 'pending',
    confirmed_at        TIMESTAMPTZ,
    completed_at        TIMESTAMPTZ,
    cancelled_at        TIMESTAMPTZ,
    cancellation_reason TEXT,
    notes_fr            TEXT,
    notes_ar            TEXT,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- REVIEWS (Avis vérifiés)
-- ============================================
CREATE TABLE reviews (
    id                  BIGSERIAL PRIMARY KEY,
    booking_id          BIGINT UNIQUE NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    vendor_id           UUID NOT NULL REFERENCES vendor_profiles(id),
    client_id           UUID NOT NULL REFERENCES client_profiles(id),
    rating              SMALLINT CHECK (rating BETWEEN 1 AND 5) NOT NULL,
    title_fr            VARCHAR(300),
    title_ar            VARCHAR(300),
    comment_fr          TEXT NOT NULL,
    comment_ar          TEXT,
    photos              JSONB DEFAULT '[]',
    is_verified         BOOLEAN DEFAULT FALSE,
    is_published        BOOLEAN DEFAULT TRUE,
    vendor_response_fr  TEXT,
    vendor_response_ar  TEXT,
    vendor_responded_at TIMESTAMPTZ,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- MESSAGERIE (Realtime)
-- ============================================
CREATE TABLE conversations (
    id              BIGSERIAL PRIMARY KEY,
    client_id       UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    vendor_id       UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    inquiry_id      BIGINT REFERENCES inquiries(id),
    last_message_at TIMESTAMPTZ DEFAULT NOW(),
    unread_client   INT DEFAULT 0,
    unread_vendor   INT DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(client_id, vendor_id)
);

CREATE TABLE messages (
    id              BIGSERIAL PRIMARY KEY,
    conversation_id BIGINT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    sender_id       UUID NOT NULL REFERENCES profiles(id),
    content_fr      TEXT,
    content_ar      TEXT,
    message_type    VARCHAR(20) DEFAULT 'text',
    metadata        JSONB DEFAULT '{}',
    is_read         BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- FAVORITES
-- ============================================
CREATE TABLE favorites (
    id          BIGSERIAL PRIMARY KEY,
    client_id   UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    vendor_id   UUID NOT NULL REFERENCES vendor_profiles(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(client_id, vendor_id)
);

-- ============================================
-- FAMILY SHARING
-- ============================================
CREATE TABLE family_shares (
    id          BIGSERIAL PRIMARY KEY,
    client_id   UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
    email       TEXT NOT NULL,
    name        VARCHAR(200),
    role        VARCHAR(20) DEFAULT 'viewer',
    token       TEXT UNIQUE DEFAULT gen_random_uuid()::TEXT,
    is_active   BOOLEAN DEFAULT TRUE,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- NOTIFICATIONS
-- ============================================
CREATE TABLE notifications (
    id          BIGSERIAL PRIMARY KEY,
    profile_id  UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    type        notification_type NOT NULL,
    title_fr    TEXT NOT NULL,
    title_ar    TEXT,
    body_fr     TEXT,
    body_ar     TEXT,
    data        JSONB DEFAULT '{}',
    is_read     BOOLEAN DEFAULT FALSE,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BLOG / ARTICLES
-- ============================================
CREATE TABLE articles (
    id              BIGSERIAL PRIMARY KEY,
    title_fr        TEXT NOT NULL,
    title_ar        TEXT,
    slug            VARCHAR(250) UNIQUE NOT NULL,
    excerpt_fr      TEXT,
    excerpt_ar      TEXT,
    content_fr      TEXT NOT NULL,
    content_ar      TEXT,
    cover_image     TEXT,
    author_id       UUID REFERENCES profiles(id),
    category        VARCHAR(100),
    tags            TEXT[],
    is_published    BOOLEAN DEFAULT FALSE,
    published_at    TIMESTAMPTZ,
    seo_title_fr    VARCHAR(200),
    seo_desc_fr     TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_vendor_profiles_status ON vendor_profiles(status) WHERE status = 'active';
CREATE INDEX idx_vendor_profiles_wilaya ON vendor_profiles(wilaya_code);
CREATE INDEX idx_vendor_profiles_slug ON vendor_profiles(business_slug);
CREATE INDEX idx_vendor_profiles_category ON vendor_category_links(category_id);
CREATE INDEX idx_inquiries_vendor ON inquiries(vendor_id, status);
CREATE INDEX idx_inquiries_client ON inquiries(client_id);
CREATE INDEX idx_bookings_vendor ON bookings(vendor_id, status);
CREATE INDEX idx_bookings_client ON bookings(client_id, status);
CREATE INDEX idx_bookings_date ON bookings(event_date);
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at);
CREATE INDEX idx_reviews_vendor ON reviews(vendor_id, is_published);
CREATE INDEX idx_notifications_profile ON notifications(profile_id, is_read);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(is_published, published_at);
CREATE INDEX idx_messages_realtime ON messages(conversation_id, created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Profiles: own profile only
CREATE POLICY "Profiles own" ON profiles
    FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Profiles update own" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Vendors: public read, owner write
CREATE POLICY "Vendors public read" ON vendor_profiles
    FOR SELECT USING (status = 'active' OR status = 'onboarding');
CREATE POLICY "Vendors owner" ON vendor_profiles
    FOR ALL USING (profile_id = auth.uid());

-- Client profiles: owner only
CREATE POLICY "Client profiles own" ON client_profiles
    FOR ALL USING (profile_id = auth.uid());

-- Inquiries: participants + admin
CREATE POLICY "Inquiries participants" ON inquiries
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM client_profiles cp WHERE cp.id = inquiries.client_id AND cp.profile_id = auth.uid())
        OR EXISTS (SELECT 1 FROM vendor_profiles vp WHERE vp.id = inquiries.vendor_id AND vp.profile_id = auth.uid())
        OR EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin')
    );

-- Messages: conversation participants
CREATE POLICY "Messages participants" ON messages
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM conversations c
            WHERE c.id = messages.conversation_id
            AND (
                EXISTS (SELECT 1 FROM client_profiles cp WHERE cp.id = c.client_id AND cp.profile_id = auth.uid())
                OR EXISTS (SELECT 1 FROM vendor_profiles vp WHERE vp.id = c.vendor_id AND vp.profile_id = auth.uid())
            )
        )
    );

-- Reviews: public read, verified write
CREATE POLICY "Reviews public read" ON reviews
    FOR SELECT USING (is_published = true);
CREATE POLICY "Reviews own" ON reviews
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM client_profiles cp WHERE cp.id = reviews.client_id AND cp.profile_id = auth.uid())
    );

-- Triggers
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
