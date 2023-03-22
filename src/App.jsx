import React, { useState, useEffect } from "react";
import axios from "axios";
import { get, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, z } from "zod";

import "./App.css";

function App() {
  const [media, setMedia] = useState("");
  const knowUs = ["", "friend", "coworker", "internet", "tiktok"];
  const [postCodeValidation, setPostCodeValidation] = useState(false);
  const [infos, setInfos] = useState({ postCode: "", number: "" });

  console.log("postCodeValidation", postCodeValidation);
  console.log("media", media);

  const formSchema = z
    .object({
      firstName: z
        .string()
        .min(2, "First name should contain ate least 2 characters")
        .max(20, "too long name provided"),
      lastName: z
        .string()
        .min(2, "Last name should have ate least 2 characters")
        .max(20, "Too long name provided"),
      email: z.string().email(),
      address: z.string().min(4, "invalid address").max(255, "invalid address"),
      number: z.string().min(1, "invalid house number"),
      postCode: z
        .string()
        .regex(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i, "invalid post code"),
      birthDate: z
        .string()
        .transform((a) => new Date(a))
        .refine((date) => {
          return date < new Date(Date.now());
        }, "Please provide a valid date"),
      password: z
        .string()
        .min(4, "your password must have at least 4 characters"),
      confirmPassword: z.string(),
      knowMedia: z.string().nonempty("choose a media"),
      postCodeValidator: z.literal(true),
    })

    .refine((value) => value.password === value.confirmPassword, {
      message: "passwords don't match",
      path: ["confirmPassword"],
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

  //console.log("addressInfos", addressInfos);
  console.log("getValues()", getValues());

  async function postCodeCheck() {
    try {
      const values = getValues();
      const addressInfos = {
        postCode: values.postCode,
        number: values.number,
      };
      // const apiUrl = `https://postcode-nl.onrender.com/validate/postcode?postcode=${addressInfos.postCode}&number=${addressInfos.number}`;
      const apiUrl = `https://postcode-nl.onrender.com/validate/postcode?postcode=${addressInfos.postCode}&number=${addressInfos.number}`;
      const response = await axios.get(apiUrl);
      console.log("URL", apiUrl, "hey some data here!");
      console.log("response", response);
      setInfos({
        postCode: getValues().postCode,
        number: getValues().number,
      });
      setPostCodeValidation(response.data.valid);
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log("postCodeValid?", postCodeValidation, "infos:", infos);

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
            type="text"
            className="min-w-full"
            placeholder="address"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-red-500 inline-flex">{errors.address.message}</p>
          )}
        </div>

        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="number"
            {...register("number")}
          />
          {errors.number && (
            <p className="text-red-500 inline-flex">{errors.number.message}</p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="post code"
            {...register("postCode")}
          />
          {errors.postCode && (
            <p className="text-red-500 inline-flex">
              {errors.postCode.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <button
            type="text"
            className="min-w-full"
            placeholder="post code"
            // {...register("postCodeValidator")}
            onClick={postCodeCheck}
          >
            Check post code
          </button>
          {postCodeValidation === false ? (
            <p>enter a valid post code</p>
          ) : (
            <p>Good post code</p>
          )}
          {errors.postCodeValidator && (
            <p className="text-red-500 inline-flex">
              {/* {errors.postCodeValidator.message} */}
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
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="password"
            className="min-w-full"
            placeholder="choose a password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 inline-flex">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="password"
            className="min-w-full"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 inline-flex">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <label>How did you hear about us?</label>
          <select
            {...register("knowMedia")}
            value={media}
            onChange={(e) => setMedia(e.target.value)}
          >
            {knowUs.map((media) => {
              return (
                <option key={media} value={media}>
                  {media}
                </option>
              );
            })}
          </select>

          {errors.knowMedia && (
            <p className="text-red-500 inline-flex">
              {errors.knowMedia.message}
            </p>
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
