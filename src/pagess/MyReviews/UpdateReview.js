import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contextss/AuthProvider";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const reviewDet = useLoaderData();
  const [reviewDetl, setReviewDetl] = useState(reviewDet);

  const handleSubmit = (event) => {
    const form = event.tareget;
    event.preventDefault();
    fetch(`https://youteber-server.vercel.app/reviews/${reviewDet._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetl),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          toast.success("updated successfully");
        }
      });
  };
  const handleChange = (event) => {
    const fieldname = event.target.name;
    const revValue = event.target.value;
    const newRevDetail = { ...reviewDetl };
    newRevDetail[fieldname] = revValue;
    setReviewDetl(newRevDetail);
  };
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">Update Review</h1>
      <div className="w-4/5 mx-auto my-10 border border-black rounded-xl p-28">
        <form onSubmit={handleSubmit}>
          <input
            className="input input-ghost w-full input-bordered my-4"
            type="text"
            defaultValue={reviewDet?.author}
            readOnly
          />
          <input
            className="input input-ghost w-full input-bordered my-4"
            type="text"
            defaultValue={reviewDet?.serviceName}
            readOnly
          />
          <textarea
            className="textarea textarea-bordered h-25 w-full my-4"
            defaultValue={reviewDet?.review}
            name="review"
            onChange={handleChange}
          ></textarea>
          <input
            className="btn text-center w-full"
            type="submit"
            value="Update Review"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
