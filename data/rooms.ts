import type { Room } from "@/types";

/**
 * Realistic placeholder room data for Riad Dar Rihla.
 * Images map to the files available in public/images/rooms.
 * Add new rooms here — RoomCard renders any entry in this array.
 */
export const rooms: Room[] = [
  {
    slug: "chambre-de-luxe-101",
    name: "Chambre de Luxe 101",
    shortDescription:
      "Notre chambre signature, généreuse en espace et en lumière, au rez-de-chaussée du patio.",
    description:
      "La Chambre de Luxe 101 ouvre sur le patio historique de la maison. Zelliges, plafond sculpté et mobilier chiné composent une atmosphère intime et raffinée, pensée pour un séjour ressourçant.",
    capacity: 2,
    bedType: "Lit double king size",
    sizeSqm: 28,
    view: "Vue sur le patio",
    facilities: ["Wi-Fi gratuit", "Salle de bain privative", "Climatisation", "Coffre-fort"],
    images: [
      { src: "/images/rooms/chambre-de-luxe-101.jpeg", alt: "Chambre de Luxe 101 à Riad Dar Rihla" },
      { src: "/images/rooms/chambre-double-de-luxe-101.jpeg", alt: "Lit double de la Chambre de Luxe 101" },
    ],
  },
  {
    slug: "chambre-102-vue-sur-ville",
    name: "Chambre 102 — Vue sur Ville",
    shortDescription:
      "Une chambre lumineuse offrant une vue dégagée sur les toits du quartier des Habous.",
    description:
      "Située à l'étage, la Chambre 102 profite d'une belle luminosité naturelle et d'une vue sur la ville. Son décor épuré aux accents marocains en fait un cocon paisible après une journée d'exploration.",
    capacity: 2,
    bedType: "Lit double queen size",
    sizeSqm: 22,
    view: "Vue sur la ville",
    facilities: ["Wi-Fi gratuit", "Salle de bain privative", "Bureau", "Climatisation"],
    images: [
      { src: "/images/rooms/chambre-102.jpeg", alt: "Chambre 102 à Riad Dar Rihla" },
      { src: "/images/rooms/chambre-102-vue-sur-ville.jpeg", alt: "Vue sur la ville depuis la Chambre 102" },
    ],
  },
  {
    slug: "chambre-double-103-vue-sur-ville",
    name: "Chambre Double 103 — Vue sur Ville",
    shortDescription:
      "Chambre double confortable, idéale pour un séjour à deux au cœur de la médina.",
    description:
      "La Chambre 103 associe confort moderne et détails artisanaux traditionnels. Ses fenêtres donnent sur l'animation feutrée du quartier des Habous, à quelques pas des souks et des places historiques.",
    capacity: 2,
    bedType: "Deux lits jumeaux ou lit double",
    sizeSqm: 20,
    view: "Vue sur la ville",
    facilities: ["Wi-Fi gratuit", "Salle de bain privative", "Climatisation", "Rangements"],
    images: [
      { src: "/images/rooms/chambre-103.jpeg", alt: "Chambre Double 103 à Riad Dar Rihla" },
      { src: "/images/rooms/chambre-double-103-vue-sur-ville.jpeg", alt: "Vue sur la ville depuis la Chambre 103" },
    ],
  },
  {
    slug: "chambre-105-vue-sur-jardin",
    name: "Chambre 105 — Vue sur Jardin",
    shortDescription:
      "Un havre de calme donnant directement sur le jardin et l'olivier centenaire.",
    description:
      "La Chambre 105 s'ouvre sur le jardin de la maison, où il fait bon prendre son petit-déjeuner au chant des oiseaux. Une chambre apaisante, pensée pour se reconnecter au rythme de la maison.",
    capacity: 2,
    bedType: "Lit double queen size",
    sizeSqm: 24,
    view: "Vue sur le jardin",
    facilities: ["Wi-Fi gratuit", "Salle de bain privative", "Climatisation", "Vue jardin"],
    images: [
      { src: "/images/rooms/chambre-105-vue-sur-jardin.jpeg", alt: "Chambre 105 avec vue sur le jardin" },
    ],
  },
  {
    slug: "chambre-de-luxe-104-balcon-jardin",
    name: "Chambre de Luxe 104 — Balcon & Jardin",
    shortDescription:
      "Notre plus belle chambre : un balcon privé suspendu au-dessus du jardin.",
    description:
      "La suite de la maison. La Chambre de Luxe 104 dispose d'un balcon privé surplombant le jardin, parfait pour un café au lever du jour ou un thé à la menthe au coucher du soleil.",
    capacity: 3,
    bedType: "Lit double king size + canapé",
    sizeSqm: 32,
    view: "Balcon privé, vue sur le jardin",
    facilities: ["Wi-Fi gratuit", "Balcon privé", "Salle de bain privative", "Climatisation", "Coffre-fort"],
    images: [
      {
        src: "/images/rooms/chambre-de-luxe-104-avec-balcon-vue-sur-jardin.jpeg",
        alt: "Chambre de Luxe 104 avec balcon et vue sur le jardin",
      },
      {
        src: "/images/rooms/chambre-double-de-luxe-avec-balcon-vue-sur-jardin.jpeg",
        alt: "Lit double de la Chambre de Luxe 104",
      },
    ],
  },
];
