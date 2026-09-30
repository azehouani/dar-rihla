import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { AmenitiesPreview } from "@/components/sections/AmenitiesPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { hotelStory } from "@/data/hotel";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />

      <EditorialSection
        eyebrow={hotelStory.intro.eyebrow}
        title={hotelStory.intro.title}
        paragraphs={hotelStory.intro.paragraphs}
        image={{
          src: "/images/hotel/porte-dentree-marocaine.jpeg",
          alt: "Porte d'entrée marocaine sculptée de Riad Dar Rihla",
        }}
      />

      <FeaturedRooms />
      <AmenitiesPreview />
      <GalleryPreview />
      <LocationSection />
      <ContactCTA />
    </>
  );
}
