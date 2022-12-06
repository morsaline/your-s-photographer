import React, { useContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contextss/AuthProvider";
import Review from "./Review";

const ServiceD = () => {
  // <Toaster></Toaster>;
  const { img, title, description, price, facility, _id } = useLoaderData();
  // const facilities = { facility };
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState(1);
  useEffect(() => {
    fetch("https://youteber-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        const desending = data.sort((a, b) => {
          return b.date - a.date;
        });
        setReviews(desending);
      });
  }, [reviews, newReview]);

  const handleDelete = (id) => {
    const procced = window.confirm("are sure delte");
    if (procced) {
      fetch(`https://youteber-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter((reviw) => reviw._id !== id);
            setReviews(remaining);
            toast.success("deleted succesfully");
          }
          console.log(data);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "unregidstrer";
    const massage = form.massage.value;
    const email = user?.email || "unregister";
    const photoURL = user?.photoURL || "photourl";
    const date = Date.now();
    const reviewDetail = {
      serviceName: title,
      price,
      author: name,
      email,
      review: massage,
      photoURL,
      date,
    };

    fetch("https://youteber-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          setNewReview((prev) => prev + 1);
          toast.success("added reviw sucessfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-5xl text-center font-bold my-10">Service</h1>
        <div className="flex">
          <div className="w-1/2 ">
            <div className="p-5">
              <img src={img} alt="" className="rounded-xl" />
            </div>
          </div>
          <div className="w-1/2 p-5">
            <h2 className="text-3xl text-primary font-bold my-4">{title}</h2>
            <p className="text-2xl font-bold my-4">Price: ${price}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-center font-bold my-10">Add Review</h1>
      <div className="grid grid-cols-1">
        {user ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="w-4/5 mx-auto my-10 border border-black rounded-xl p-28"
            >
              <input
                lassName="input input-ghost w-full input-bordered my-4"
                type="text"
                defaultValue={user?.displayName}
                readOnly
              />
              <input
                lassName="input input-ghost w-full input-bordered my-4"
                type="text"
                defaultValue={user?.email}
                readOnly
              />
              <textarea
                className="textarea textarea-bordered h-25 w-full my-4"
                name="massage"
              ></textarea>
              <input
                className="btn text-center w-full"
                type="submit"
                value="Add Review"
              />
            </form>
          </>
        ) : (
          <>
            <p className="text-3xl text-center my-16">
              Please Login to add review <br />
              <Link to="/login">
                <p className="text-4xl my-4 btn">LOGIN</p>
              </Link>
            </p>
          </>
        )}
      </div>
      <div>
        <h1 className="text-5xl text-center font-bold my-10">All Reviews</h1>
        <div>
          {reviews.map((reviw) => (
            <Review
              key={reviw._id}
              reviw={reviw}
              handleDelete={handleDelete}
            ></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceD;
