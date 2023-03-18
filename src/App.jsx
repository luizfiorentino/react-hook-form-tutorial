import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import "./App.css";

function App() {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, "First name should contain ate least 2 cahracters")
      .max(20, "too long name provided"),
    lastName: z
      .string()
      .min(2, "Last name should have ate least 2 cahracters")
      .max(20, "Too long name provided"),
    email: z.string().email(),
    birthDate: z
      .string()
      .transform((a) => new Date(a))
      .refine((date) => {
        return date < new Date(Date.now());
      }, "Please provide a valid date"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "all",
    resolver: zodResolver(formSchema),
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
            {...register("firstName")}
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
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 inline-flex">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="date"
            className="min-w-full"
            placeholder="Date of Birth"
            {...register("birthDate")}
          />
          {errors.birthDate && (
            <p className="text-red-500 inline-flex">
              {errors.birthDate.message}
            </p>
          )}
        </div>

        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 inline-flex">{errors.email.message}</p>
          )}
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase">
          submit
        </button>
      </form>
      <button
        onClick={() => setValue("firstName", "Julinho")}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 py-2 px-3 text-white uppercase"
      >
        Set Value First Name
      </button>
      <div className="my-4 p-4 bg-gray-300">
        <h3 className="font-bold">Form values:</h3>
        <pre className="">{JSON.stringify(getValues(), null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
