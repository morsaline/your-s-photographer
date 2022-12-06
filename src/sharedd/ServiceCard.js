import React from "react";
import { Link } from "react-router-dom";
import "./serCard.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ serCard }) => {
  const { img, servicId, description, title, price, _id, date } = serCard;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt={`${title}photo`} className="w-full h-25 img" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <p>{description.slice(0, 100) + "..."}</p>

        <div className="card-actions flex justify-start">
          <p>price: ${price}</p>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
