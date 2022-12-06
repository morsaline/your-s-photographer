import React from "react";
// import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-20 bg-base-200 text-base-content bg-black text-white">
      <div>
        <img alt="" />
        <p>
          Your's Photographer
          <br />
          Providing service since 2019
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          wild PhotoGrapher
        </a>
        <a href="/" className="link link-hover">
          Birthday PhotoGrapher
        </a>
        <a href="/" className="link link-hover">
          Sports PhotoGrapher
        </a>
        <a href="/" className="link link-hover">
          wedding PhotoGrapher
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
