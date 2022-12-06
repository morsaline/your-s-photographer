import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../sharedd/ServiceCard";
import { dynamicTitle } from "../../DynamicTitle/DynamicTitle";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
const Service = () => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://youteber-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, []);

  dynamicTitle("services");
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">Our Services</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {service.map((serCard) => (
            <ServiceCard key={serCard._id} serCard={serCard}></ServiceCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Service;
