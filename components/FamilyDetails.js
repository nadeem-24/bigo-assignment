import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FamilyDetails = ({ savedData, setSavedData, setStep }) => {
  const [showDetails, setShowDetails] = useState(false);
  const defaultValues = {
    family_details: [
      {
        member_name: "",
        relation: "",
      },
    ],
  };
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "family_details",
  });

  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      ...data,
      ...savedData,
    };
    setSavedData(newData);
    console.log("🚀 ~ onSubmit ~ newData:", newData);
    window.alert("Data saved Check Console")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex justify-center">
        <div className="w-9/12">
          <div className="w-full flex justify-end mb-4 mt-4">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                e.preventDefault();
                append({});
              }}
            >
              Add more family members
            </button>
          </div>
          {fields.map((fields, index) => (
            <div
              className="flex justify-between items-center mb-3"
              key={fields.id}
            >
              <div className="w-5/12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Member Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Family member name"
                  {...register(`family_details.${index}.member_name`, {
                    maxLength: {
                      value: 50,
                      message: "Cannot be more than 50 characters.",
                    },
                  })}
                />
              </div>
              <div className="w-5/12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Relation
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Specify your relation with member"
                  {...register(`family_details.${index}.relation`, {
                    maxLength: {
                      value: 50,
                      message: "Cannot be more than 50 characters.",
                    },
                  })}
                />
              </div>
              {index > 0 ? (
                <div className="w-1">
                  <button
                    type="button"
                    className=" hover:bg-blue-700 mt-5"
                    onClick={(e) => {
                      e.preventDefault();
                      remove(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="w-1"></div>
              )}
            </div>
          ))}
          <div className="w-full flex justify-between">
            <div>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(1);
                }}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FamilyDetails;
