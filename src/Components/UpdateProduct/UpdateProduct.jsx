import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const UpdateProduct = () => {
  const productData = useLoaderData();
  const {
    _id,
    photo,
    productName,
    brandName,
    type,
    price,
    description,
    rating,
  } = productData;
  const { id } = useParams();
  console.log(id);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const UpdateProduct = {
      photo,
      productName,
      brandName,
      type,
      price,
      description,
      rating,
    };
    console.log(UpdateProduct);

    fetch(`https://server-site-taupe.vercel.app/products/${_id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Product Updated Successfully!", "success");
          window.history.go(-1);
        }
      });
  };

  return (
    <div>
      <div className="max-w-7xl p-5 mx-auto">
        <div>
          <h3 className="text-center text-4xl font-bold mb-10">
            Update Product
          </h3>
        </div>
        <form onSubmit={handleUpdateProduct}>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">Image:</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="photo"
                    placeholder="Image URL"
                    defaultValue={photo}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">
                    Product Name:
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="productName"
                    placeholder="Product Name"
                    defaultValue={productName}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">
                    Brand Name:
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="brandName"
                    placeholder="Brand Name"
                    defaultValue={brandName}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">Type:</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Product Type"
                    defaultValue={type}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">Price:</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="Product Price"
                    defaultValue={price}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">
                    Short Description:
                  </span>
                </label>
                <label className="input-group">
                  <textarea
                    placeholder="Product Description"
                    defaultValue={description}
                    required
                    name="description"
                    className="w-full input input-bordered"
                  ></textarea>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl font-bold ">
                    Rating:
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="rating"
                    placeholder="Product Rating"
                    defaultValue={rating}
                    className="w-full input input-bordered"
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className="w-full btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white my-5 text-3xl font-bold "
            type="submit"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
