import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

/**
 * Highlights a subset of hotel services on the Home page.
 */
export function AmenitiesPreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="À votre service"
          title="Tout le confort d'une maison attentionnée"
          description="De la réception à la table, chaque service est pensé pour que vous puissiez vous concentrer sur l'essentiel : votre séjour."
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} light />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="outline">
            Tous les services
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
