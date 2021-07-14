import succulent1 from "./img/succulent1.jpg";
import succulent2 from "./img/succulent2.jpg";
import succulent3 from "./img/succulent3.jpg";
import succulent4 from "./img/succulent4.jpg";
import succulent5 from "./img/succulent5.jpg";
import pot1 from "./img/pot1.jpg";
import pot2 from "./img/pot2.jpg";
import pot3 from "./img/pot3.jpg";
import pot4 from "./img/pot4.jpg";
import other1 from "./img/other1.jpg";
import other2 from "./img/other2.jpg";
import succulent1Big from "./img/succulent1-big.jpg";
import succulent2Big from "./img/succulent2-big.jpg";
import succulent3Big from "./img/succulent3-big.jpg";
import succulent4Big from "./img/succulent4-big.jpg";
import succulent5Big from "./img/succulent5-big.jpg";
import pot1Big from "./img/pot1-big.jpg";
import pot2Big from "./img/pot2-big.jpg";
import pot3Big from "./img/pot3-big.jpg";
import pot4Big from "./img/pot4-big.jpg";
import other1Big from "./img/other1-big.jpg";
import other2Big from "./img/other2-big.jpg";

export type ProductProps = {
  category: string;
  image: string;
  imageBig: string;
  name: string;
  price: number;
  sold: number;
  id: string;
  description: string;
  quantity: number;
};

export const ProductData: ProductProps[] = [
  {
    category: "Succulents",
    image: succulent1,
    imageBig: succulent1Big,
    name: "Mixed",
    price: 1,
    sold: 22,
    id: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Succulents",
    image: succulent2,
    imageBig: succulent2Big,
    name: "Graptosedum",
    price: 2,
    sold: 35,
    id: "2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Succulents",
    image: succulent3,
    imageBig: succulent3Big,
    name: "Agave",
    price: 3,
    sold: 17,
    id: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Succulents",
    image: succulent4,
    imageBig: succulent4Big,
    name: "Haworthiopsis",
    price: 4,
    sold: 5,
    id: "4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Succulents",
    image: succulent5,
    imageBig: succulent5Big,
    name: "Haworthia Turgida",
    price: 5,
    sold: 13,
    id: "5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Pots",
    image: pot1,
    imageBig: pot1Big,
    name: "Matte Gray",
    price: 1,
    sold: 22,
    id: "7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Pots",
    image: pot2,
    imageBig: pot2Big,
    name: "Round Bowl",
    price: 2,
    sold: 35,
    id: "8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Pots",
    image: pot3,
    imageBig: pot3Big,
    name: "Creemy Gray",
    price: 3,
    sold: 17,
    id: "9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Pots",
    image: pot4,
    imageBig: pot4Big,
    name: "Pot with Foot",
    price: 4,
    sold: 5,
    id: "10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Other",
    image: other1,
    imageBig: other1Big,
    name: "Soil",
    price: 1,
    sold: 17,
    id: "11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
  {
    category: "Other",
    image: other2,
    imageBig: other2Big,
    name: "Shovel",
    price: 2,
    sold: 5,
    id: "12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
    quantity: 1,
  },
];
