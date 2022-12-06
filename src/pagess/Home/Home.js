import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../../sharedd/ServiceCard";
import { dynamicTitle } from "../../DynamicTitle/DynamicTitle";
import AboutMe from "./AboutMe/AboutMe";
import HireMe from "./HireMe/HireMe";
const Home = () => {
  const services = useLoaderData();
  dynamicTitle("Your's Photographer");
  return (
    <div className="my-6 ">
      <div>
        <div>
          <h1 className="text-5xl text-center font-bold my-10">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {services.map((serCard) => (
              <ServiceCard key={serCard._id} serCard={serCard}></ServiceCard>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link to="/service">
            <button className="btn btn-primary text-center mx-auto">
              See All
            </button>
          </Link>
        </div>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
      <div>
        <HireMe></HireMe>
      </div>
    </div>
  );
};

export default Home;
