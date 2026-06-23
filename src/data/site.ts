export const siteConfig = {
  name: "CNN 2026",
  title: "CNN 2026 — Creator Economy West Africa",
  description: "Un camp immersif pour structurer la Creator Economy en Afrique de l’Ouest.",
  draftDeadline: "2026-09-30T23:59:00+00:00",
  isAfterEvent: false,
  logoDark: "/images/Logo_noir.png",
  logoLight: "/images/Logo_blanc.png",
  logoNormal: "/images/Logo_normal.png",
};

export const documents = {
  candidature: "/documents/FORMULAIRE%20DE%20CANDIDATURE%20CNN%202026.pdf",
};

export const images = {
  hero: "/images/illustrations/page-landing/image-accueil.jpg",
  ambassadeur: "/images/illustrations/page-landing/ambassadeur.jpg",
  presse: "/images/illustrations/page-landing/presse.jpg",
  programme1: "/images/illustrations/page-landing/programme1.jpg",
  programme2: "/images/illustrations/page-landing/programme2.jpg",
  women: "/images/illustrations/page-landing/women.jpg",
  background1: "/images/backgrounds/bakcground1.jpg",
  background2: "/images/backgrounds/background2.jpg",
};

export const sponsors = [
  "/images/illustrations/page-landing/sponsor1.png",
  "/images/illustrations/page-landing/sponsor2.png",
  "/images/illustrations/page-landing/sponsor3.png",
  "/images/illustrations/page-landing/sponsor4.png",
  "/images/illustrations/page-landing/sponsor5.png",
  "/images/illustrations/page-landing/sponsor6.png",
];

export const pillars = [
  {
    title: "Création de contenu & plaidoyer",
    text: "Transformer des créateurs en voix stratégiques capables de porter des récits utiles, responsables et influents.",
    outcome: "Production de campagnes, messages de plaidoyer et formats éditoriaux à fort impact.",
    image: "/images/illustrations/page-landing/creationdecontenu.jpg",
  },
  {
    title: "Intelligence artificielle",
    text: "Accélérer les workflows créatifs grâce aux outils d’IA, sans sacrifier l’éthique, l’originalité et la qualité.",
    outcome: "Méthodes, prompts, prototypes et cas d’usage applicables aux réalités locales.",
    image: "/images/illustrations/page-landing/IA.jpg",
  },
  {
    title: "Réseaux sociaux & monétisation",
    text: "Structurer la croissance, l’audience, la distribution et les modèles économiques des talents sélectionnés.",
    outcome: "Stratégies de plateforme, offres commerciales et feuille de route de monétisation.",
    image: "/images/illustrations/page-landing/reseauxsociaux.jpg",
  },
];

export const keyNumbers = [
  ["30", "Ambassadeurs"],
  ["4", "Jours d’immersion"],
  ["1", "Livre blanc national"],
  ["6", "Squads élites"],
];

export const partners = ["Meta", "Agence Digitale", "Studio IA", "Media Lab", "Brand Council", "Creator Fund"];

export const mentors = [
  ["Aïcha Koné", "Représentante Meta", "/images/illustrations/page-landing/women.jpg"],
  ["Moussa Traoré", "Directeur d’agence", "/images/illustrations/page-landing/men1.jpg"],
  ["Nadia Bamba", "Experte IA créative", "/images/illustrations/page-landing/image_content_1.jpg"],
  ["Jean Kouamé", "Stratège monétisation", "/images/illustrations/page-landing/men2.jpg"],
  ["Fatou Diallo", "Productrice éditoriale", "/images/illustrations/page-landing/image_content_2.jpg"],
  ["Chris Mensah", "Analyste social media", "/images/illustrations/page-landing/image_content_3.jpg"],
];

export const cohortImages = [
  "/images/illustrations/page-landing/men1.jpg",
  "/images/illustrations/page-landing/women.jpg",
  "/images/illustrations/page-landing/men2.jpg",
  "/images/illustrations/page-landing/image_content_1.jpg",
  "/images/illustrations/page-landing/image_content_2.jpg",
  "/images/illustrations/page-landing/image_content_3.jpg",
  "/images/illustrations/page-landing/ambassadeur.jpg",
  "/images/illustrations/page-landing/creationdecontenu.jpg",
  "/images/illustrations/page-landing/reseauxsociaux.jpg",
];

export const talents = Array.from({ length: 30 }, (_, index) => ({
  name: `Talent ${String(index + 1).padStart(2, "0")}`,
  role: index % 3 === 0 ? "Création" : index % 3 === 1 ? "IA" : "Monétisation",
}));

export const squads = ["Advocacy Lab", "AI Studio", "Monetization Room", "Social Growth", "Brand Content", "Impact Media"];
