import { useContext } from "react";
import MealContext from "../providers/mealProvider";

const useMeal = () => {
  return useContext(MealContext);
};

export default useMeal;
