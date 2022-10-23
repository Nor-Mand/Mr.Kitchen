import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);
  const [allMeals, setAllMeals] = useState([]);

  const getCategory = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const { data } = await axios(url);
      setCategories(data.categories);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getMeal = async (datos) => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${datos.meal}&c=${datos.category}`;
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMealRandom = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
      const { data } = await axios(url);
      setRandomMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllMeals = async () => {
    try {
      const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      const { data } = await axios(url);
      setAllMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
    getMeal();
    getMealRandom();
    getAllMeals();
  }, []);
  return (
    <MealContext.Provider
      value={{ categories, meals, getMeal, randomMeals, allMeals }}
    >
      {children}
    </MealContext.Provider>
  );
};

export { MealProvider };

export default MealContext;
