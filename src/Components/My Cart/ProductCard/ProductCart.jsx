/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ProductCart = ({ product, products, setProducts }) => {
  console.log(product);
  const { _id, photo, productName, price } = product;

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
        fetch(`https://server-site-taupe.vercel.app/mycart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The Car has been deleted.", "success");
            }
            const remainingProducts = products.filter((data) => data._id != id);
            console.log(remainingProducts._id);
            setProducts(remainingProducts);
          });
      }
    });
  };

  return (
    <div>
      <div className="card md:card-side md:h-[200px] bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img className="h-52 w-full" src={photo} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2 rounded-r-3xl bg-teal-100">
          <h2 className="card-title dark:text-white text-2xl font-extrabold mb-2">{productName}</h2>
          <p className="text-2xl font-bold text-red-500 ">Price: ${price}</p>
          <div className="card-actions my-5 justify-end">
            <button className="btn btn-outline btn-success">Buy Now</button>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
