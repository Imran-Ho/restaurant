import { useForm } from "react-hook-form";
import SectionTitles from "../../components/SectionTitles/SectionTitles";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
// imagebb api key from Env file.
const imagebb_api_key = import.meta.env.VITE_imagebb_key;
const imagebb_upload_key = `https://api.imgbb.com/1/upload?key=${imagebb_api_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // image upload into imagebb and get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imagebb_upload_key, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send data to database with image url.
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuResponse = await axiosSecure.post("/menu", menuItem);
      console.log(menuResponse.data);
      if (menuResponse.data.insertedId) {
        // show pop up
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <>
      <div>
        <SectionTitles
          subHeading="Add Item"
          heading="Category wise."
        ></SectionTitles>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          {/* category and price */}
          <div className="flex gap-6 mb-6">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select one category.
                </option>
                <option value="soup">Soup</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div>
            <input {...register("image")} type="file" className="file-input" />
          </div>
          <button className="btn btn-neutral my-6" type="submit">
            Add Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
