import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../hook/useMenu";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu] = useMenu();
  const axiosSecure = useAxiosSecure();
  //   console.log(menu);
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is deleted successfully.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <>
      <SectionTitles
        subHeading="All Categories"
        heading="Manage All Items"
      ></SectionTitles>
      <div>
        <div className="overflow-x-auto">
          <table className="lg:table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>price</th>
                <th>Category</th>
                <th>Update</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg text-red-600">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item)}
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
    </>
  );
};

export default ManageItem;
