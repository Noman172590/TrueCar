import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const googleBtn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        fetch("https://server-site-taupe.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.user),
        });
        Swal.fire("Good job!", "Log in Successfully!", "success");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password",
        });
      });
  };

  const githubBtn = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        fetch("https://server-site-taupe.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.user),
        });
        Swal.fire("Good job!", "Log in Successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Log in Successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please check your email and password",
        });
      });
  };

  return (
    <div>
      <div className="flex flex-col mt-10 justify-center items-center"></div>
      <div className="p-4 my-10 flex md:flex-row flex-col">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <h1 className=" text-gray-800 dark:bg-white font-bold text-2xl mb-5 text-center">
              Log in!
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                required
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                required
                id=""
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Log in
            </button>
            <a
              href="#!"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Forgot password?
            </a>

            <p className="mt-5 ">
              Don't have any account? please{" "}
              <Link
                className="text-2xl font-semibold hover:underline hover:text-accent"
                to={"/register"}
              >
                Register
              </Link>{" "}
            </p>
          </form>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <div>
            <button
              onClick={googleBtn}
              className="flex justify-center items-center block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
            >
              <FcGoogle className="mr-5 text-2xl"></FcGoogle>Sign in with google
            </button>
            <button
              onClick={githubBtn}
              className="flex justify-center items-center block w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 "
            >
              <FaGithub className="mr-5 text-2xl"></FaGithub>Sign in with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
