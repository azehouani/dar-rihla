import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { Highlights } from "@/components/sections/Highlights";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotelHighlights, hotelStory, neighborhood } from "@/data/hotel";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "L'hôtel",
  description:
    "Découvrez l'histoire, l'architecture et l'atmosphère de Riad Dar Rihla, maison centenaire du quartier des Habous à Casablanca.",
  alternates: { canonical: "/hotel" },
};

export default function HotelPage() {
  return (
    <>
      <PageHero
        eyebrow="L'hôtel"
        title="Une maison, un voyage"
        description={siteConfig.description}
        image={{
          src: "/images/hotel/salon-marocain-restaurant.jpeg",
          alt: "Salon marocain de Riad Dar Rihla",
        }}
      />

      <EditorialSection
        eyebrow={hotelStory.history.eyebrow}
        title={hotelStory.history.title}
        paragraphs={hotelStory.history.paragraphs}
        image={hotelStory.history.image}
      />

      <EditorialSection
        eyebrow={hotelStory.architecture.eyebrow}
        title={hotelStory.architecture.title}
        paragraphs={hotelStory.architecture.paragraphs}
        image={hotelStory.architecture.image}
        reverse
        tone="sand"
      />

      <EditorialSection
        eyebrow={hotelStory.atmosphere.eyebrow}
        title={hotelStory.atmosphere.title}
        paragraphs={hotelStory.atmosphere.paragraphs}
        image={hotelStory.atmosphere.image}
      />

      <Highlights items={hotelHighlights} />

      <section className="bg-cream py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow={neighborhood.eyebrow}
            title={neighborhood.title}
            align="center"
          />
          <div className="mx-auto mt-6 max-w-2xl space-y-4">
            {neighborhood.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
