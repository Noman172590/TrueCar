/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StarRating = ({ rating }) => {
  const sanitizedRating = Math.min(5, Math.max(1, rating));

  const filledStars = Math.floor(sanitizedRating);
  const remainingFraction = sanitizedRating - filledStars;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star checked">
        &#9733;
      </span>
    );
  }
  if (remainingFraction >= 0.25 && remainingFraction < 0.75) {
    stars.push(
      <span key="half" className="star checked">
        &#9733.5;
      </span>
    );
  } else if (remainingFraction >= 0.75) {
    stars.push(
      <span key="filled" className="star checked">
        &#9733;
      </span>
    );
  }
  for (let i = stars.length + 1; i < 5; i++) {
    stars.push(
      <span key={i} className="star">
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

const BrandProduct = () => {
  const data = useLoaderData();
  const { name } = useParams();
  // console.log(name);
  // console.log(data);
  const filteredData = data.filter((item) => item.brandName === name);
  console.log(filteredData);

  return (
    <div className="mb-20 ">
      <div className="mb-8">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/pKLZDC6/joey-banks-YApi-Wyp0lqo-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-xl lg:text-5xl font-bold">
                    Unbeatable Savings: Get Your Discount Now!
                  </h1>

                  <button className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/bs0RQ9w/lance-asper-p-SOAtd-MVlk-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-xl lg:text-5xl font-bold">
                    Unlock the Road to Savings! Discover Quality Cars and
                    Incredible Deals on TrueCar
                  </h1>

                  <button className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/Gczn1CX/rick-gebhardt-Bb-FBVUGIO74-unsplash.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-xl lg:text-5xl font-bold">
                    Shift Gears Towards Savings! Find the Perfect Ride. Your
                    Next Adventure Begins Here!
                  </h1>

                  <button className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/r6Kkj76/pexels-pixabay-164634.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-2/3">
                  <h1 className="mb-5 text-xl lg:text-5xl font-bold">
                    Revolutionize Your Wheels! Explore Premium Car Listings.
                    Start Your Automotive Journey Today!"
                  </h1>

                  <button className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <h3 className="flex  justify-center items-center my-12 text center text-4xl font-extrabold">
        Your favorite Brand Products
      </h3>
      {filteredData.length === 0 ? (
        <div>
          <div>
            <figure className="flex justify-center items-center">
              <img
                src="https://i.ibb.co/T4FS2DS/360-F-101894688-RVSZUt-Df-PR6-Cr5e-BDQI7-Qo5p-Z01jmy-K3.jpg"
                alt=""
              />
            </figure>
            <p className="text-2xl  font-bold text-center">
              Sorry, there are currently no products available for this brand.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredData.map((data) => {
            console.log(data.productName);
            return (
              <div>
                <div className="card  bg-base-100 shadow-xl">
                  <figure>
                    <img className="h-60 w-full" src={data.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body rounded-b-3xl dark:bg-slate-100 light:bg-zinc-300 shadow-2xl shadow-slate-400">
                    <h2 className="card-title text-3xl font-bold mb-2">
                      {data.productName}
                    </h2>
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        Brand: {data.brandName}
                      </h3>
                      <h3 className="text-lg font-medium">Type: {data.type}</h3>
                    </div>
                    <div className="flex flex-col justify-between my-2">
                      <h3 className="md:text-3xl text-2xl  font-bold mb-2 ">
                        Price: ${data.price}
                      </h3>
                      <h3 className="text-orange-400 text-4xl">
                        <StarRating rating={data.rating} />
                      </h3>
                    </div>

                    <div className="card-actions flex justify-between ">
                      <Link to={`/productDetails/${data._id}`}>
                        {" "}
                        <button className=" text-white normal-case bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn ">
                          Details
                        </button>{" "}
                      </Link>
                      <Link to={`/update/${data._id}`}>
                        {" "}
                        <button className="text-white normal-case bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 btn">
                          Update
                        </button>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BrandProduct;
