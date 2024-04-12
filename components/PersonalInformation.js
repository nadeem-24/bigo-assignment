import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

export const CustomErrorSpan = styled("span")`
  color: red;
`;

const PersonalInformation = ({ savedData, setSavedData, step, setStep }) => {
  const defaultValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    father_name: "",
    mother_name: "",
    email: "",
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    if (savedData) {
      reset(savedData);
    }
  }, [savedData]);

  //*main function executed after successful form submission @param data hold object

  const onSubmit = (data) => {
    console.log(data);
    setSavedData(data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex justify-center">
        <div className="w-9/12">
          <div className=" w-full grid gap-6 mb-1 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                className=" required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter first name"
                {...register("first_name", {
                  maxLength: {
                    value: 50,
                    message: "Cannot be more than 50 characters.",
                  },
                })}
              />
              {errors.first_name ? (
                <CustomErrorSpan>{errors.first_name.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
            <div>
              <label
                for="last_name"
                className="required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter last name"
                {...register("last_name", {
                  maxLength: {
                    value: 50,
                    message: "Cannot be more than 50 characters.",
                  },
                })}
              />
              {errors.last_name ? (
                <CustomErrorSpan>{errors.last_name.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
            <div>
              <label
                for="father_name"
                className=" required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Father's name
              </label>
              <input
                type="text"
                id="father_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter father's name"
                {...register("father_name", {
                  maxLength: {
                    value: 50,
                    message: "Cannot be more than 50 characters.",
                  },
                })}
              />
              {errors.father_name ? (
                <CustomErrorSpan>{errors.father_name.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
            <div>
              <label
                for="mother_name"
                className="required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mother's name
              </label>
              <input
                type="text"
                id="mother_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter mother's name"
                {...register("mother_name", {
                  maxLength: {
                    value: 50,
                    message: "Cannot be more than 50 characters.",
                  },
                })}
              />
              {errors.mother_name ? (
                <CustomErrorSpan>{errors.mother_name.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
            <div>
              <label
                for="email"
                className=" required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email id"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required.",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email ? (
                <CustomErrorSpan>{errors.email.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
            <div>
              <label
                for="phone_number"
                className=" required block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="phone_number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your 10 digit phone number"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                {...register("phone_number", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone Number should be 10 digits.",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone Number should be 10 digits.",
                  },
                })}
              />
              {errors.phone_number ? (
                <CustomErrorSpan>{errors.phone_number.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
