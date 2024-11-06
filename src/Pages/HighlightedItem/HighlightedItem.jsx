import SectionTitles from "../../components/SectionTitles/SectionTitles";
import featuredImg from "../../assets/pictures/featured.jpg";
import "./HighlightedItem.css";
const HighlightedItem = () => {
  return (
    <div className="highlighted-item bg-fixed text-white pt-8 my-20 ">
      <SectionTitles
        subHeading="Check it Out"
        heading="Highlighted Item"
      ></SectionTitles>
      <div className=" md:flex justify-center items-center pb-20 pt-16 px-36 bg-slate-500 bg-opacity-40">
        <dir>
          <img src={featuredImg} alt="" />
        </dir>
        <div className="md:ml-10 ">
          <p className="text-2xl">November 2024</p>
          <p className=" uppercase text-2xl">where can i get this item</p>
          <p className="text-1xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            cumque eos quaerat, labore atque voluptatum quos vero minima
            necessitatibus unde asperiores obcaecati! Beatae sapiente ut quis
            rem sunt autem eum, soluta ipsam. Sint amet recusandae, officiis hic
            possimus est odit optio et saepe earum at illo magni. Sed, animi
            itaque?
          </p>
          <button className="btn btn-outline border-0 border-b-8 text-white  mt-10">
            Order Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightedItem;
