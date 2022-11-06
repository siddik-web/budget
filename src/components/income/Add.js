import React from "react";
import { useForm } from "react-hook-form";
function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitData = (data) => {
    let income = JSON.parse(localStorage.getItem("income"));
    if (income == null) {
      localStorage.setItem("income", JSON.stringify([data]));
    } else {
      localStorage.setItem(
        "income",
        JSON.stringify([
          ...income,
          {
            source: data.source,
            amount: data.amount,
            entryDate: data.entryDate,
          },
        ])
      );
    }
  };

  return (
    <>
      <h3>Add Income</h3>
      <form
        className="needs-validation"
        noValidate
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="col-auto">
          <label className="form-label">Source</label>
          <input
            {...register("source", { required: "This field is required!" })}
            type="text"
            className="form-control"
            placeholder="Enter the income source name"
          />
          <div>{errors.source?.message}</div>
        </div>
        <div className="col-auto">
          <label className="form-label">Amount</label>
          <input
            {...register("amount", { required: "This field is required!" })}
            type="number"
            step="any"
            className="form-control"
            placeholder="Enter the income amount"
          />
          <div>{errors.amount?.message}</div>
        </div>
        <div className="col-auto">
          <label className="form-label">Amount</label>
          <input
            {...register("entryDate", { required: "This field is required!" })}
            type="date"
            className="form-control"
            placeholder="Enter the income amount"
          />
          <div>{errors.entryDate?.message}</div>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" type="submit">
            Add Income
          </button>
        </div>
      </form>
    </>
  );
}

export default Add;
