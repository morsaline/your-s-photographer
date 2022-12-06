import React from "react";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contextss/AuthProvider";

const Review = ({ reviw, handleDelete }) => {
  const { serviceName, author, review, photoURL, email, _id, date } = reviw;
  const { user } = useContext(AuthContext);
  const reviewDate = new Date(date);
  const formatedDate = reviewDate.toDateString();
  return (
    <div className="overflow-x-auto w-full">
      <Toaster></Toaster>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>Date:{formatedDate}</label>
            </th>
            <th>Author Detail</th>
            <th>Review</th>
            <th>Service Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="p-6">
            <th>
              <label>
                <button onClick={() => handleDelete(_id)}>X</button>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{author}</div>
                  <div className="text-sm opacity-50">{email}</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{review}</span>
            </td>
            <td>{serviceName}</td>
            <th>
              {user?.email === email ? (
                <>
                  <Link to={`/update/${_id}`}>
                    {" "}
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <p>Login to update</p>
                  </Link>
                </>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Review;
