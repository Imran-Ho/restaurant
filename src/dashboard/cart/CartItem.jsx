import { FaTrash } from "react-icons/fa";
import useCart from "../../hook/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
const CartItem = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure(); // extract base url.
  // extract total price from the array of object.
  const totalPrice = cart.reduce(
    (total, currentPrice) => total + currentPrice.price,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        //
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h1>Total Items: {cart.length}</h1>

        <h1>Total Prices: {totalPrice}</h1>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((singleItem, index) => (
              <tr key={singleItem._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={singleItem.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{singleItem.name}</td>
                <td>{singleItem.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(singleItem._id)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
