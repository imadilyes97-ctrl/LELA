// Types générés par Supabase CLI
// Commande : npx supabase gen types typescript --project-id <id> > src/lib/types.ts

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: "client" | "vendor" | "admin" | "moderator";
          email: string;
          phone: string | null;
          first_name_fr: string | null;
          last_name_fr: string | null;
          first_name_ar: string | null;
          last_name_ar: string | null;
          avatar_url: string | null;
          wilaya_code: number | null;
          locale: string;
          is_active: boolean;
          last_login_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
      };
      vendor_categories: {
        Row: {
          id: number;
          slug: string;
          name_fr: string;
          name_ar: string;
          description_fr: string | null;
          description_ar: string | null;
          icon: string | null;
          image_url: string | null;
          parent_id: number | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["vendor_categories"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["vendor_categories"]["Row"]>;
      };
      vendor_profiles: {
        Row: {
          id: string;
          profile_id: string;
          business_name_fr: string;
          business_name_ar: string;
          business_slug: string;
          tagline_fr: string | null;
          tagline_ar: string | null;
          description_fr: string | null;
          description_ar: string | null;
          wilaya_code: number;
          phone_primary: string;
          logo_url: string | null;
          cover_image_url: string | null;
          status: string;
          is_verified: boolean;
          avg_rating: number;
          review_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["vendor_profiles"]["Row"]>;
        Update: Partial<Database["public"]["Tables"]["vendor_profiles"]["Row"]>;
      };
      // Additional tables to be added after supabase gen types
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
