import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="dark:bg-slate-900 dark:text-white"
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            {/* Email */}
            <h3 className="dark:bg-slate-900 dark:text-white font-bold    text-center text-2xl text-teal-500   ">
              Login
            </h3>
            <hr />
            <br />
            <div className="mt-4 space-y-2 ">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <hr />
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <hr />
            {/* Button */}
            <div className="flex justify-between items-center mt-4">
              <button className="btn btn-secondary bg-teal-500 border-teal-500 hover:bg-white hover:border-teal-500 hover:text-teal-500">
                Login
              </button>

              <p>
                Not Registered?{" "}
                <Link to={"/signup"}>
                  <span className="underline text-blue-500 cursor-pointer">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
