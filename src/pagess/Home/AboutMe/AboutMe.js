import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">About Me</h1>
      <div className="hero p-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media.istockphoto.com/photos/in-the-photo-studio-with-professional-equipment-portrait-of-the-picture-id1196172395?s=612x612"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Morsaline Patwary</h1>
            <p className="py-6">
              My profession is a photographer .that's Why I study about
              photography . I affort best to satiesfied my customer who hire me.
            </p>
            <button className="btn btn-primary">Hire me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
