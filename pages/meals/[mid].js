import { useRouter } from "next/router";
import BannerSection from "../components/BannerSection";
import Banner from "../images/banner-story.jpg";
import RecipeId from "../components/RecipeId";
import { MealProvider } from "../store/providers/MealProvider";
import useCategory from "../store/hooks/useCategory";

const HomeMeals = () => {
  const router = useRouter();
  const { mid } = router.query;
  const {recipe} = useCategory;  
  console.log(recipe)
  return (
    <MealProvider>
      <BannerSection banner={Banner} title={`Meals ${mid}`} />
      <h1>Meals {mid}</h1>
      <RecipeId />
    </MealProvider>
  );
};

export default HomeMeals;
