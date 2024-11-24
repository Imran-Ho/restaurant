import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const CategoryItem = ({ item, title, img }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-10">
        {item.map((singleItem) => (
          <MenuItem key={singleItem._id} singleItem={singleItem}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-8   mt-10">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default CategoryItem;
