const MenuItem = ({ singleItem }) => {
  const { name, image, price, recipe } = singleItem;
  return (
    <>
      <div className="flex space-x-2">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />
        <div>
          <h1 className="uppercase">{name}-----</h1>
          <p>{recipe.slice(0, 50)}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
