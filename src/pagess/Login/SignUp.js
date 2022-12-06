import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contextss/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { setAuthToken } from "../../servicessApi/auth";
const SignUp = () => {
  const { createuser, updateUserProfile, providerLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createuser(email, password)
      .then((result) => {
        setAuthToken(result);
        form.reset();
        handleUpdateUserProfile(name);
        navigate("/login");
      })
      .then((err) => console.error(err));
  };
  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const gogleAuthProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(gogleAuthProvider)
      .then((result) => {
        setAuthToken(result);
        navigate(from, { replace: true });
      })
      .catch((eror) => console.error(eror));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img
            src="https://www.paidmembershipspro.com/wp-content/uploads/2016/06/signup.png"
            alt=""
            className="rounded-full h-full"
          />
        </div>
        <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2 py-9">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign UP!!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Write Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Have An Account{" "}
            <Link className="font-bold text-primary" to="/login">
              Log In
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="login-btn btn btn-primary font-bold text-white"
          >
            google SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
