import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Explorez la galerie photo de Riad Dar Rihla : salons marocains, chambres, jardin et terrasse au cœur des Habous.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="La maison en images"
        description="Un aperçu des salons marocains, des chambres et du jardin de Riad Dar Rihla. Cliquez sur une photo pour l'agrandir."
        image={{
          src: "/images/gallery/vue-de-lensemble.jpeg",
          alt: "Vue d'ensemble de Riad Dar Rihla",
        }}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
