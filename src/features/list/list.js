import React from "react";
import { useSelector } from "react-redux";
import Entry from "../entry/Entry";
function List() {
  const lists = useSelector((state) => state?.entry?.entry);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Entry />
        </div>
        <h2>List of entry</h2>
        <div className="col-12">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Source</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {lists?.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{data.source}</td>
                    <td>{data.type}</td>
                    <td>{data.amount}</td>
                    <td>{data.entryDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default List;
