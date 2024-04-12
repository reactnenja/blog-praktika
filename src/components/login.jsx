import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Input } from "./ui";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <main className="form-signin w-25 m-auto">
        <form>
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
          <button className="btn btn-dark w-100 py-3 my-2" type="submit">
            Login
          </button>
          <p className="mt-5 mb-3 text-body-secondary">©2024</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
