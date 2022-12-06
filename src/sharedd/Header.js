import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contextss/AuthProvider";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout().then().catch();
  };

  const menuItems = (
    <>
      <Link to="/" className="font-semibold mr-4">
        Home
      </Link>
      <Link to="/blog" className="font-semibold mr-4">
        Blog
      </Link>
      {user ? (
        <>
          <Link to="/myReviews" className="font-semibold mr-4">
            My Reviews
          </Link>
          <Link to="/addService" className="font-semibold mr-4">
            Add Service
          </Link>
          <Link onClick={handleLogOut} className="font-semibold mr-4">
            LogOut
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/login" className="font-semibold mr-4">
            Login
          </Link>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-20 mb-12">
        <div className="navbar-start">
          <h2 className="text-3xl font-bold">Your's PhotoGrapher</h2>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <small className="mr-5">{user?.displayName}</small>
          {user?.photoURL ? (
            <Link className="ms-3">
              <img
                style={{ height: "40px", width: "40px" }}
                title={user.displayName}
                src={user.photoURL}
                className="rounded-full"
              />
            </Link>
          ) : (
            <span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
          )}
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 p-8"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome!!</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/blog">
              {" "}
              <button className="btn btn-primary font-bold"> Blogs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
