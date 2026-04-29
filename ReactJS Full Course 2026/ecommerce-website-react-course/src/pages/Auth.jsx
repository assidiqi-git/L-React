import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const [isSignIn, setSignIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp, login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (isSignIn) {
      result = login(data.email, data.password);
    } else {
      result = signUp(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p>{error.error}</p>}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                {...register("email", { required: "This Field Is Required!" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                {...register("password", {
                  required: "This Field Is Required!",
                })}
              />

              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="auth-switch">
            {isSignIn ? (
              <p>
                Create new account{" "}
                <span className="auth-link" onClick={() => setSignIn(false)}>
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                Already have an account ?{" "}
                <span className="auth-link" onClick={() => setSignIn(true)}>
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
