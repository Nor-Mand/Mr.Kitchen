import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  const getCategory = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const { data } = await axios(url);
      setCategories(data.categories);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getMeal = async () => {
    try {
      const url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCategory();
    getMeal();
  }, []);
  return (
    <MealContext.Provider value={{ categories, meals }}>
      {children}
    </MealContext.Provider>
  );
};

export { MealProvider };

export default MealContext;
