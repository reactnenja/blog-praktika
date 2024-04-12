import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { Input } from "./ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "./slice/auth";
import AuthService from "../service/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const distpach = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerButton = async (e) => {
    e.preventDefault();
    distpach(registerUserStart());

    const user = {
      username: name,
      email,
      password,
    };
    try {
      const response = await AuthService.UseRegister(user);
      console.log(response);

      distpach(registerUserSuccess());
    } catch (error) {
      console.error(error); // Errorni consolega chiqaring
      distpach(registerUserFailure());
    }
  };

  return (
    <div className="container">
      <main className="form-signin w-25 m-auto">
        <form style={{ marginTop: "100px" }} className="rounded border p-4">
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
          <h1 className="h3 mb-3 fw-normal text-center">Sign up</h1>

          <Input label="Username" state={name} setState={setName} />
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
            className="btn btn-primary w-100 py-3 my-2"
            type="submit"
            onClick={registerButton}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
