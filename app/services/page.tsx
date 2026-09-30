import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wi-Fi, petit-déjeuner à la carte, restaurant, prêt de vélos, navette aéroport — découvrez tous les services de Riad Dar Rihla.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Facilités"
        title="Un confort pensé dans les moindres détails"
        description="De la réception à la table, chaque service de Dar Rihla est conçu pour que vous vous sentiez chez vous, dès votre arrivée."
        image={{
          src: "/images/hotel/restaurant.jpeg",
          alt: "Salle de restaurant de Riad Dar Rihla",
        }}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
