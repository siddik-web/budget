import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "./entrySlice";
import { useForm } from "react-hook-form";

function Entry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ source: "", type: "", amount: "", entryDate: "" });
    }
  });

  const handleSubmitData = (data) => {
    dispatch(addEntry(data));
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit(handleSubmitData)}
          >
            <div className="col">
              <label className="form-label">Source</label>
              <input
                {...register("source", {
                  required: "This field is required!",
                })}
                type="text"
                className="form-control"
                placeholder="Enter the income source name"
              />
              <div className="error">{errors.source?.message}</div>
            </div>
            <div className="col">
              <label className="form-label">Type</label>
              <select
                className="form-control"
                {...register("type", { required: "Please select a type." })}
              >
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expanse">Expanse</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">Amount</label>
              <input
                {...register("amount", {
                  required: "This field is required!",
                })}
                type="number"
                step="any"
                className="form-control"
                placeholder="Enter the income amount"
              />
              <div>{errors.amount?.message}</div>
            </div>
            <div className="col">
              <label className="form-label">Amount</label>
              <input
                {...register("entryDate", {
                  required: "This field is required!",
                })}
                type="date"
                className="form-control"
                placeholder="Enter the income amount"
              />
              <div>{errors.entryDate?.message}</div>
            </div>
            <div className="col">
              <button className="btn btn-primary mt-2 mb-2" type="submit">
                Add Income
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Entry;
