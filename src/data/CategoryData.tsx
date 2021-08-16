import categorySucculent from "../img/categorySucculent.jpg";
import categoryPot from "../img/categoryPot.jpg";
import categoryOther from "../img/categoryOther.jpg";

type CategoryProps = {
  categoryName: string;
  image: string;
  description: string;
};

export const CategoryData: CategoryProps[] = [
  {
    categoryName: "Succulents",
    image: categorySucculent,
    description: "Some description for succulents",
  },
  {
    categoryName: "Pots",
    image: categoryPot,
    description: "Some description for pots",
  },
  {
    categoryName: "Other",
    image: categoryOther,
    description: "Some description for other items",
  },
];
