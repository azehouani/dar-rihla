import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { LocationSection } from "@/components/sections/LocationSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Riad Dar Rihla : adresse aux Habous, téléphone, email, horaires de réception et réseaux sociaux.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre séjour"
        description="Une question, une demande particulière ? Notre équipe vous répond avec plaisir."
        image={{
          src: "/images/hotel/jardin-salon-de-the.jpeg",
          alt: "Jardin et salon de thé de Riad Dar Rihla",
        }}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nos coordonnées"
              title="Venez nous rencontrer"
              description="La maison se trouve au cœur des Habous, à quelques minutes du centre de Casablanca."
            />

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <MapPin size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Adresse</p>
                  <p className="mt-1 text-sm text-ink/75">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district}, {siteConfig.address.city}, {siteConfig.address.country}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Phone size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-sm text-ink/75 hover:text-clay"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Mail size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-ink/75 hover:text-clay"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-clay">
                  <Clock size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Horaires</p>
                  <ul className="mt-1 space-y-1 text-sm text-ink/75">
                    {siteConfig.hours.map((hour) => (
                      <li key={hour.label}>
                        <span className="font-medium text-ink">{hour.label} : </span>
                        {hour.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-sm font-medium text-charcoal">Suivez-nous</p>
              <ul className="mt-3 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-dark/60 text-ink/70 transition-colors hover:border-clay hover:text-clay"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-sand-dark/40 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-charcoal">Envoyez-nous un message</h2>
            <p className="mt-2 text-sm text-ink/70">
              Formulaire à titre indicatif — aucune donnée n&apos;est envoyée pour le moment.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <LocationSection />
    </>
  );
}
