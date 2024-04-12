import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <div className="container pt-3">
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <img
            src={Logo}
            alt="logo web site"
            style={{ width: "50px", marginLeft: "10px" }}
            className="rounded-5"
          />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="me-3 py-2 link-body-emphasis text-decoration-none"
            to={"/register"}
          >
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
