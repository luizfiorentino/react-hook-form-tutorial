import React from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "all",
  });
  return (
    <div className="App">
      <h1 className="font-black text-2xl">React Hook Form</h1>
      <form
        onSubmit={handleSubmit((values) => {
          alert(JSON.stringify(values, null, 2));
        })}
        className="p-4 shadow-lg flex flex-col space-y-4"
      >
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="First name"
            {...register("firstName", {
              required: { value: true, message: "First name is required" },
              minLength: {
                value: 2,
                message: "must contain at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "must contain at most 20 characters",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 inline-flex">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="Last name"
            {...register("lastName", {
              required: { value: true, message: "Last name is required" },
              minLength: {
                value: 2,
                message: "must contain at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "must contain at most 20 characters",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500 inline-flex">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Plaease provide email" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please provide a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 inline-flex">{errors.email.message}</p>
          )}
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase">
          submit
        </button>
      </form>
      <div className="my-4 p-4 bg-gray-300">
        <h3 className="font-bold">Form values:</h3>
        <pre className="">{JSON.stringify({}, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
