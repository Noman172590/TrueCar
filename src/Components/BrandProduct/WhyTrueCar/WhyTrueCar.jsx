import { Link } from "react-router-dom";

const WhyTrueCar = () => {
  return (
    <div>
      <div className="bg-black dark:bg-white my-10">
        <div>
          <h3 className="py-10 text-2xl text-white  text-center lg:text-5xl font-bold">
            Why TrueCar?
          </h3>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 pb-5">
          <div>
            <div className="card bg-black shadow-xl">
              <figure className="">
                <img
                  src="https://consumer.tcimg.net/assets/_next/static/images/transparent-pricing-4d7899553551b3a2db95d346ac20062f.svg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-white text-center">
                <h2 className="card-title text-2xl font-semibold">
                  Transparent pricing
                </h2>
                <p className="text-xl">
                  No surprises here. See how much you'll pay on cars you like
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-black shadow-xl">
              <figure className="">
                <img
                  src="https://consumer.tcimg.net/assets/_next/static/images/minutes-not-hours-48afd64860a3e72b36d5986738c77eb4.svg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-white text-center">
                <h2 className="card-title text-2xl font-semibold">
                  Minutes, not hours
                </h2>
                <p className="text-xl">
                  Time saving tools to help you find the right car in a snap
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-black shadow-xl">
              <figure className="">
                <img
                  src="https://consumer.tcimg.net/assets/_next/static/images/shop-your-way-f575579b12ccf6daf39539dab242c0e2.svg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-white text-center">
                <h2 className="card-title text-2xl font-semibold">
                  Shop your way
                </h2>
                <p className="text-xl">
                  Your own pace, your own space. Shop online where and when it's
                  convenient for you.
                </p>
              </div>
            </div>
          </div>
         
        </div>

        <div className="flex justify-center items-center pb-10">
        <Link to={'/register'}> <button className="btn rounded-3xl w-60 text-2xl font-bold ">Sign Up</button></Link>
         </div>
        
        
      </div>
    </div>
  );
};

export default WhyTrueCar;
