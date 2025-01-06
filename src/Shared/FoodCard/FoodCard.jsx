import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure(); // this is used for bringing BaseURL.
  const [, refetch] = useCart();
  const handlerAddToCart = () => {
    if (user && user.email) {
      // console.log(user.email);
      // send data to cart
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // axios.post("https://fake-restaurent-server.vercel.app/carts", cartItem).then((res) => {
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been saved`,
            showConfirmButton: false,
            timer: 2000,
          });
          // refetch data from the database to cart.
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Do you log in?",
        text: "You should log in before add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I do.",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className=" absolute right-0 mr-4 mt-4 px-4 bg-black text-white">
          {price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handlerAddToCart(item);
              }}
              className="btn btn-primary"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
