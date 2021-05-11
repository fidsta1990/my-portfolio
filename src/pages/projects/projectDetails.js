import cryptoVerse from '../../img/crypto-verse.png'
import bayresort from "../../img/bayresort.png";
import flicker from "../../img/flicker.png";
import fitRep from "../../img/fitRep.png";
import soon from "../../img/soon.png";

export const portfolio = [
  {
    id: 1,
    image: `${cryptoVerse}`,
    langOne: "react",
    langTwo: "styled-components",
    langThree: "framer-motion",
    name: "Crypto-Verse",
    info: "Cryptocurrency coin tracker app",
    url: `https://crypto-verse.netlify.app/`,
    codeUrl: `https://github.com/fidsta1990/crypto-verse`,
  },
  {
    id: 2,
    image: `${bayresort}`,
    langOne: "react",
    langTwo: "styled-components",
    langThree: "aos",
    name: "BayResort",
    info: "A travel resort website to book rooms and events.",
    url: `https://bayresort.netlify.app/`,
    codeUrl: `https://github.com/fidsta1990/bayresort`,
  },
  {
    id: 3,
    image: `${flicker}`,
    langOne: "react",
    langTwo: "sass",
    langThree: "",
    name: "FlixScraper",
    info: "A movie library created using OMDB's api to showcase movies.",
    url: `https://flickermove.netlify.app/`,
    codeUrl: `https://github.com/fidsta1990/flick-scraper`,
  },
  {
    id: 4,
    image: `${fitRep}`,
    langOne: "html",
    langTwo: "sass",
    langThree: "javascript",
    name: "FitRep",
    info:
      "Fitrep is a gym which provides hands on support to getting clients in to shape.",
    url: `https://fitrep.netlify.app/`,
    codeUrl: `https://github.com/fidsta1990/fit-rep`,
  },
  {
    id: 5,
    image: `${soon}`,
    langOne: "html",
    langTwo: "css",
    langThree: "javascript",
    name: "coming soon",
    info: "coming soon",
    url: `N/A`,
    codeUrl: ``,
  },
];
