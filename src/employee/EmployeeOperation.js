import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const EmployeeOperation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://lpback.onrender.com/employee")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("no data found");
      });
  });
  const deleteData = (eid) => {
    axios
      .delete(`https://lpback.onrender.com/employee/${eid}`)
      .then((res) => {
        alert("data deleted succ...");
      })
      .catch((err) => {
        alert("unable to delete the data");
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_main}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Student Operation</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Student Operation
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="clearfix"></div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((emp) => {
                      return (
                        <tr>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.phone}</td>
                          <td>{emp.salary}</td>
                          <td>{emp.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-4"
                              onClick={() => deleteData(emp._id)}
                            >
                              Delete
                            </button>

                            <NavLink to={`/editstudent/${emp._id}`}>
                              <button className="btn btn-warning">Edit</button>
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployeeOperation;
