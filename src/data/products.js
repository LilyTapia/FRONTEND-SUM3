import adviento2 from "../assets/adviento2.png";
import cactus from "../assets/cactus.jpeg";
import elsa from "../assets/Elsa.jpeg";
import pascua from "../assets/pascua.jpeg";
import bebe_lloron from "../assets/bebe_lloron.jpeg";
import gabby from "../assets/gabby.jpeg";
import virgo from "../assets/virgo.jpeg";
import onepiece from "../assets/onepiece.jpeg";
import Breaking from "../assets/Breaking.png";

const products = [
    // GALLETAS GLASEADAS
    {
      id: 1,
      name: "Galletón Glaseado VIRGO",
      category: "Galletas glaseadas",
      price: 3500,
      offerPrice: 3500,
      description: "Sabor Doble choco moca",
      image: virgo
    },
    {
      id: 2,
      name: "Galletas ONCE PIECE",
      category: "Galletas glaseadas",
      price: 7990,
      offerPrice: 7990,
      description: "Galletas de Vainilla, con personajes a elección (Luffy & Dracule Mihawk)",
      image: onepiece
    },
    {
      id: 3,
      name: "Galletas BREAKING BAD",
      category: "Galletas glaseadas",
      price: 12000,
      offerPrice: 12000,
      description: "Mantequilla, glaseado multicolor.",
      image: Breaking
    },
  
    // TORTAS
    {
      id: 4,
      name: "Torta Elsa FROZEN",
      category: "Tortas",
      price: 58000,
      offerPrice: 58000,
      description: "Personalizada",
      image: elsa
    },
    {
      id: 5,
      name: "Torta Bebé llorones",
      category: "Tortas",
      price: 54000,
      offerPrice: 54000,
      description: "Personalizada",
      image: bebe_lloron
    },
    {
      id: 6,
      name: "Torta La Casa de Muñecas de Gabby",
      category: "Tortas",
      price: 56000,
      offerPrice: 56000,
      description: "Personalizada",
      image: gabby
    },
  
    // Propuestas festivos
    {
      id: 7,
      name: "NAVIDAD",
      category: "Propuestas festivos",
      price: 19500,
      offerPrice: 17500,
      description: "Cajita calendario de adviento (24 días) .",
      image: adviento2  
    },
    {
      id: 8,
      name: "SAN VALENTÍN",
      category: "Propuestas festivos",
      price: 9000,
      offerPrice: 7500,
      description: "Galletón cactus con mensaje",
      image: cactus
    },
    {
      id: 9,
      name: "PASCUA",
      category: "Propuestas festivos",
      price: 9000,
      offerPrice: 7500,
      description: "Huevitos de chocolate de 270 gr (14cm), con minichubis, sorpresa, rolls y marshmallow.",
      image:pascua }
  ];
  
  export const categories = ["Todas", "Galletas glaseadas", "Tortas", "Propuestas festivos"];
  export default products;
  