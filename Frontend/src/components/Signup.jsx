import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <div className="pt-20 dark:bg-slate-900 dark:text-white">
        <div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-teal-500 dark:bg-slate-900 dark:text-white">
                Create Account
              </h2>
              <hr />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm dark:bg-slate-900 dark:text-white">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 dark:bg-slate-900 dark:text-white"
                action="#"
                method="POST"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className=" dark:bg-slate-900 dark:text-white"
                  >
                    Name
                  </label>
                  <div className=" dark:bg-slate-900 dark:text-white">
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white p-2"
                      {...register("name", { required: true })}
                    />
                    <br />
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <hr />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className=" dark:bg-slate-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className=" dark:bg-slate-900 dark:text-white">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white p-2"
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
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password "
                    className=" dark:bg-slate-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="">
                    <input
                      type="password"
                      id=" password"
                      placeholder="Enter the password"
                      className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white p-2"
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
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="btn btn-secondary flex w-full justify-center rounded-md  px-3 py-1.5  leading-6  shadow-sm  text-white  bg-teal-500 border-teal-500 hover:bg-white hover:border-teal-500 hover:text-teal-500 text-lg"
                  >
                    Register
                  </button>
                  
                  <p className=" text-center mt-2">
                  Already Registered?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
