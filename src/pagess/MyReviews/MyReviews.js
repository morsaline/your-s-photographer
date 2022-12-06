import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contextss/AuthProvider";
import Review from "../Servicee/Review";
import { dynamicTitle } from "../../DynamicTitle/DynamicTitle";
import toast from "react-hot-toast";
const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  dynamicTitle("MyReviews");
  useEffect(() => {
    fetch(`https://youteber-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photographer-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error("permission forbidded");
          logout();
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => setMyReviews(data))
      .catc((err) => console.log(err));
  }, [user?.email]);
  const handleDelete = (id) => {
    const procced = window.confirm("are sure delte");
    if (procced) {
      fetch(`https://youteber-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myReviews.filter((reviw) => reviw._id !== id);
            setMyReviews(remaining);
          }
          console.log(data);
        });
    }
  };
  console.log(myReviews);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-6"> My Reviews</h1>
      <div>
        <div>
          {myReviews.length === 0 ? (
            <>
              <div className="min-h-full flex justify-center items-center">
                <h1 className="text-4xl">You do not add review yet.</h1>
              </div>
            </>
          ) : (
            <>
              <div>
                {myReviews.map((reviw) => (
                  <Review
                    key={reviw._id}
                    reviw={reviw}
                    handleDelete={handleDelete}
                  ></Review>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
