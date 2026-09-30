import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { RoomCard } from "@/components/ui/RoomCard";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Chambres",
  description:
    "Découvrez les 5 chambres et suites de Riad Dar Rihla, entre vue sur jardin, balcon privé et vue sur la ville des Habous.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Chambres & Suites"
        title="Cinq chambres, un même art de recevoir"
        description="Chaque chambre de la maison a son propre caractère — zelliges, plafonds sculptés et vues sur le jardin ou la ville — pour un séjour à l'image de Casablanca."
        image={{
          src: "/images/rooms/chambre-de-luxe-104-avec-balcon-vue-sur-jardin.jpeg",
          alt: "Chambre de Luxe 104 avec balcon et vue sur le jardin",
        }}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <RoomCard key={room.slug} room={room} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
