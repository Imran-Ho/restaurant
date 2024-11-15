import { Helmet } from "react-helmet-async";
import Bannar from "../Bannar/Bannar";
import Categories from "../Categories/Categories";
import HighlightedItem from "../HighlightedItem/HighlightedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fake Restaurent | Home</title>
      </Helmet>
      <Bannar></Bannar>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <HighlightedItem></HighlightedItem>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
