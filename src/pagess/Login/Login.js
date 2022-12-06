import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contextss/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { setAuthToken } from "../../servicessApi/auth";
const Login = () => {
  const { login, setLoading, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        setAuthToken(result);

        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
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
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg&ga=GA1.2.1007841267.1667897751"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2 py-9">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login!!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Your's Photographer{" "}
            <Link className="font-bold text-primary" to="/signUp">
              Sign Up
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

export default Login;
