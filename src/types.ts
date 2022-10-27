export interface Montre {
  design?: string;
  boitier?: string;
  bracelets?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#A8B7B2": "BleuCactus",
  "#0B052C": "BleuNuit",
  "#E2D8CF": "Creme",
  "#F9DDDA": "Rose",
  "#B5B5B5": "GrisSideral",
};

export const materiaux = [
  {
    value: "863fb6e0-ccb3-444b-b04e-4223fa0627bc",
    img: "/images/matieres/cuir.png",
    label: "Cuir",
  },
  {
    value: "dd72311f-2a4f-4ca3-8b97-37d9ec384256",
    img: "/images/matieres/caoutchouc.png",
    label: "Caoutchouc",
  },
  {
    value: "7a2cf29a-7816-4201-a9c3-3293e9f72441",
    img: "/images/matieres/acier.png",
    label: "Acier",
  },
];
