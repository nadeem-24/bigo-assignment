import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FamilyDetails = ({ savedData, setSavedData, setStep }) => {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          append({ });
        }}
      >
        Add more Family member
      </button>
      {fields.map((fields, index) => (
        <div className="grid gap-6 mb-6 md:grid-cols-2" key={fields.id}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Member Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Relation"
              {...register(`family_details.${index}.member_name`, {
                maxLength: {
                  value: 50,
                  message: "Cannot be more than 50 characters.",
                },
              })}
            />
            {/* {errors.first_name ? (
                <CustomErrorSpan>{errors.first_name.message}</CustomErrorSpan>
              ) : (
                <br></br>
              )} */}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Relation
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              {...register(`family_details.${index}.relation`, {
                maxLength: {
                  value: 50,
                  message: "Cannot be more than 50 characters.",
                },
              })}
            />
            {/* {errors.last_name ? (
              <CustomErrorSpan>{errors.last_name.message}</CustomErrorSpan>
            ) : (
              <br></br>
            )} */}
          </div>
          {index > 0 ? (
            <div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  remove(index);
                }}
              >
                Remove Member
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
      <div>
        <div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setStep(1);
            }}
          >
            Previous
          </button>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FamilyDetails;
