import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const ProductData = useLoaderData();
  const { user } = useContext(AuthContext);
  const cartUser = user.email;
  console.log(cartUser);
  const { photo, productName, price, description } = ProductData;
  const cart = { photo, productName, price, description, cartUser };

  // const {_id, photo, productName, brandName, type, price, description, rating} = ProductData;
  // const { id } = useParams();

  const handleAddToCart = () => {
    console.log("product added to cart");
    console.log(ProductData);
    fetch("https://server-site-taupe.vercel.app/mycart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Product Added Successfully to your cart!",
            "success"
          );
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <div className=" max-w-7xl mx-auto lg:w-[90%]  my-10 card lg:card-side bg-base-100 shadow-lg shadow-slate-700 hover:shadow-2xl hover:shadow-black">
        <figure className="lg:w-1/2">
          <img
            className="lg:w-full h-full object-cover"
            src={photo}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:w-3/4 dark:bg-slate-100 rounded-b-3xl lg:rounded-tr-3xl lg:rounded-br-3xl">
          <h2 className="card-title text-3xl md:text-5xl font-extrabold mb-3">
            {productName}
          </h2>
          <p className="md:text-3xl text-xl  font-medium">{description}</p>
          <p className="text-3xl md:text-5xl  font-extrabold">
            Price: ${price}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
