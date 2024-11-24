import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import coverImg from "../../assets/pictures/banner.jpg";
import soupImg from "../../assets/pictures/slide1.jpg";
import dessertImg from "../../assets/pictures/slide2.jpg";
import pizzaImg from "../../assets/pictures/slide3.jpg";
import saladImg from "../../assets/pictures/slide4.jpg";

import useMenu from "../../hook/useMenu";
import SectionTitles from "../../components/SectionTitles/SectionTitles";

import CategoryItem from "./CategoryItem";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Fake Restaurent | Menu</title>
      </Helmet>
      <Cover img={coverImg} title="Delicius Menu"></Cover>
      {/* main section */}
      <SectionTitles
        subHeading={"Don't miss the offer."}
        heading={"Today's Offer."}
      ></SectionTitles>
      {/* Offered Items */}
      <CategoryItem item={offered}></CategoryItem>
      {/* dessert items */}
      <CategoryItem
        item={desserts}
        img={dessertImg}
        title="Dessert"
      ></CategoryItem>
      {/* soup item */}
      <CategoryItem item={soup} img={soupImg} title="soup"></CategoryItem>
      {/* pizza item */}
      <CategoryItem item={pizza} img={pizzaImg} title="Pizza"></CategoryItem>
      {/* salad item */}
      <CategoryItem item={salad} img={saladImg} title="Salad"></CategoryItem>
    </>
  );
};

export default Menu;
