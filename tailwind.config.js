const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: "#000000",
        blanc: "#FFFFFF",
        bleuNuit: "#0B052C",
        rose: "#F9DDDA",
        bleuCactus: "#A8B7B2",
        creme: "#E2D8CF",
        grisSideral: "#B5B5B5",
        caoutchouc: "#404040",
        cuir: "#71472A",
        acier: "#C3C2C2",
        noirPages: "#212121",
        grisPages: "#E7E7E7",
      },
      fontSize: {
        base: "0.875rem",
        lg: "1.25rem",
      },
      fontFamily: {
        modern: "Modern No. 20",
        arial: "Arial",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
    require("daisyui"),
  ],
};

/* Text-size styles 
--footer: 16px;
--menu: 22px;
--noms-couleurs: 20px;
--menu_pers: 20px;
--pers_actuelle: 26px;
--liste: 22px;
--titre_page: 48px;
--réseaux¨: 20.498775482177734px;
--connexion: 20.498775482177734px;
--inscription: 20.498775482177734px;
--goo: 15.520503997802734px;
--toujours_pas: 15.520503044128418px;
--détails_clair: 19px;*/
