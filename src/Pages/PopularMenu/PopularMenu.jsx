import SectionTitles from "../../components/SectionTitles/SectionTitles";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../hook/useMenu";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PopularMenu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
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
      <motion.div
        className="grid md:grid-cols-2 gap-4"
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 1, transition: { delay: 0.5 } }
            : { opacity: 0, x: -400 }
        }
      >
        {popularItems.map((singleItem) => (
          <MenuItem key={singleItem._id} singleItem={singleItem}></MenuItem>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularMenu;
