import React from "react";

const HireMe = () => {
  return (
    <div className="my-5">
      <h1 className="text-5xl text-center font-bold my-10">Price Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        <div className="p-5 border border-black rounded-xl">
          <h2 className="text-3xl font-bold my-4">Normal</h2>
          <p>1 Day Payments</p>
          <p>1.For 6 Hours service .</p>
          <p>2.Anywhere to Go.</p>
          <p>3.ALL photos are album.</p>
          <button className="btn my-4">Hire/$100</button>
        </div>
        <div className="p-5 border border-black rounded-xl">
          <h2 className="text-3xl font-bold my-4">Medium</h2>
          <p>1 Day Payments</p>
          <p>1.For 8 Hours service .</p>
          <p>2.Anywhere to Go.</p>
          <p>3.ALL photos are album.</p>
          <button className="btn my-4">Hire/$200</button>
        </div>
        <div className="p-5 border border-black rounded-xl">
          <h2 className="text-3xl font-bold my-4">Premium</h2>
          <p>1 Day Payments</p>
          <p>1.For 12 Hours service .</p>
          <p>2.Best camera for service.</p>
          <p>3.ALL photos are online album.</p>
          <button className="btn my-4">Hire/$300</button>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
