import { useRouter } from "next/router";
import BannerSection from "../components/BannerSection";
import Banner from "../images/banner-story.jpg";

const HomeMeals = () => {
  const router = useRouter();
  const { mid } = router.query;
  return (
    <>
      <BannerSection banner={Banner} title={`Meals ${mid}`} />
      <h1>Meals {mid}</h1>
    </>
  );
};

export default HomeMeals;
