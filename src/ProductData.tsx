import succulent1 from "./img/succulent1.jpg";
import succulent2 from "./img/succulent2.jpg";
import succulent3 from "./img/succulent3.jpg";
import succulent4 from "./img/succulent4.jpg";
import succulent5 from "./img/succulent5.jpg";
import succulent6 from "./img/succulent6.jpg";
import pot1 from "./img/pot1.jpg";
import pot2 from "./img/pot2.jpg";
import pot3 from "./img/pot3.jpg";
import pot4 from "./img/pot4.jpg";
import other1 from "./img/other1.jpg";
import other2 from "./img/other2.jpg";

type ProductProps = {
  category: string;
  image: string;
  name: string;
  price: number;
  sold: number;
  id: string;
};

export const ProductData: ProductProps[] = [
  {
    category: "Succulents",
    image: succulent1,
    name: "Zebra Plant",
    price: 1,
    sold: 22,
    id: "1",
  },
  {
    category: "Succulents",
    image: succulent2,
    name: "Graptosedum",
    price: 2,
    sold: 35,
    id: "2",
  },
  {
    category: "Succulents",
    image: succulent3,
    name: "Sedum clavatum",
    price: 3,
    sold: 17,
    id: "3",
  },
  {
    category: "Succulents",
    image: succulent4,
    name: "Agave",
    price: 4,
    sold: 5,
    id: "4",
  },
  {
    category: "Succulents",
    image: succulent5,
    name: "Haworthiopsis",
    price: 5,
    sold: 13,
    id: "5",
  },
  {
    category: "Succulents",
    image: succulent6,
    name: "Haworthia turgida",
    price: 6,
    sold: 8,
    id: "6",
  },
  {
    category: "Pots",
    image: pot1,
    name: "Matte gray",
    price: 1,
    sold: 22,
    id: "7",
  },
  {
    category: "Pots",
    image: pot2,
    name: "Sad owl",
    price: 2,
    sold: 35,
    id: "8",
  },
  {
    category: "Pots",
    image: pot3,
    name: "Creemy gray",
    price: 3,
    sold: 17,
    id: "9",
  },
  {
    category: "Pots",
    image: pot4,
    name: "Pot with foot",
    price: 4,
    sold: 5,
    id: "10",
  },
  {
    category: "Other",
    image: other1,
    name: "Soil",
    price: 1,
    sold: 17,
    id: "11",
  },
  {
    category: "Other",
    image: other2,
    name: "shovel",
    price: 2,
    sold: 5,
    id: "12",
  },
];