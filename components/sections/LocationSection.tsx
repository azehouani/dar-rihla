import { MapPin, PlaneTakeoff } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

/**
 * Presents the hotel's location with a map embed area and quick facts.
 * Uses an iframe embed (no API key / billing required) as a lightweight
 * "map placeholder" per the project's no-backend constraint.
 */
export function LocationSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Localisation"
            title="Au cœur des Habous"
            description="Un quartier historique, entre artisanat, patrimoine et vie de quartier — à deux pas des principaux sites de Casablanca."
          />

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                <MapPin size={20} aria-hidden />
              </span>
              <div>
                <p className="font-medium text-charcoal">Adresse</p>
                <p className="mt-1 text-sm text-ink/75">
                  {siteConfig.address.street}, {siteConfig.address.district}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                <PlaneTakeoff size={20} aria-hidden />
              </span>
              <div>
                <p className="font-medium text-charcoal">Aéroport le plus proche</p>
                <p className="mt-1 text-sm text-ink/75">
                  {siteConfig.nearestAirport.name} — {siteConfig.nearestAirport.distanceKm} km
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-charcoal/10 lg:aspect-auto">
          <iframe
            title="Localisation de Riad Dar Rihla sur Google Maps"
            src={siteConfig.mapEmbedUrl}
            className="h-full min-h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
