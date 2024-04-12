import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Input } from "./ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "./slice/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const distpach = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    distpach(loginUserStart());
  };
  return (
    <div className="container">
      <main className="form-signin w-50  m-auto" style={{ marginTop: "100px" }}>
        <form className="text-center border p-4 mt-5 rounded">
          <Link
            to={"/"}
            className="d-flex justify-content-center align-items-center link-body-emphasis text-decoration-none"
          >
            {" "}
            <img
              className="mb-4 "
              style={{ borderRadius: "220px" }}
              src={Logo}
              alt="logo"
              width="72"
              height="72"
            />
          </Link>
          <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
          <Input
            label="Email address"
            type="email"
            state={email}
            setState={setEmail}
          />
          <Input
            label="Password"
            type="password"
            state={password}
            setState={setPassword}
          />
          <button
            className="btn btn-dark w-100 py-3 my-2"
            type="submit"
            disabled={isLoading}
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
