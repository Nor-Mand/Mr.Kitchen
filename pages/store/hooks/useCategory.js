import { useContext } from "react";
import MealContext from "../providers/mealProvider";

const useCategory = () => {
  return useContext(MealContext);
};

export default useCategory;
