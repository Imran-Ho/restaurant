import SectionTitles from "../../components/SectionTitles/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../hook/useMenu";

const PopularMenu = () => {
  // custom hook is used for loading data.
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="mb-10">
      <SectionTitles
        subHeading={"Popular Menu"}
        heading={"From Our Menu"}
      ></SectionTitles>
      <div className="grid md:grid-cols-2 gap-4">
        {popularItems.map((singleItem) => (
          <MenuItem key={singleItem._id} singleItem={singleItem}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
