const FoodCard = ({ item }) => {
  const { name, image, price } = item;
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
            <button className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
