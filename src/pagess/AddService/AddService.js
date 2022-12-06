import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { dynamicTitle } from "../../DynamicTitle/DynamicTitle";
const AddService = () => {
  const { logout } = useContext();
  const [newService, setNewService] = useState(1);
  useEffect(() => {
    fetch("https://youteber-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        const desending = data.sort((a, b) => {
          return b.date - a.date;
        });
        setNewService(desending);
      });
  }, [newService]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.serviceName.value;
    const price = form.price.value;
    const description = form.description.value;
    const img = form.photoURL.value;
    const date = Date.now().toString();
    const service = {
      title,
      price,
      description,
      img,
      date,
    };
    fetch("https://youteber-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("photographer-token")}`,
      },
      body: JSON.stringify(service),
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
      .then((data) => {
        if (data.acknowledged) {
          // alert("aded service");
          form.reset();
          setNewService((prev) => prev + 1);
          toast.success("added service successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  dynamicTitle("AddService");
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-6"> Add Service</h1>
      <div className="w-4/5 mx-auto my-10 border border-black rounded-xl p-20">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1">
            <input
              type="text"
              className="input input-ghost w-full input-bordered my-4"
              placeholder="write the Service Name"
              name="serviceName"
              required
            />
            <input
              type="text"
              c
              className="input input-ghost w-full input-bordered my-4"
              placeholder="Put service image URL"
              name="photoURL"
              required
            />

            <input
              type="text"
              placeholder=" Write the price of this service"
              name="price"
              className="input input-ghost w-full input-bordered my-4"
              required
            />
            <textarea
              className="textarea textarea-bordered h-25 w-full my-4"
              placeholder="add A Review"
              name="description"
              required
            ></textarea>
          </div>
          <input className="btn w-full" type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
