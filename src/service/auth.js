import axios from "./api";
import { useRegister } from "../components/slice/auth";

const AuthService = {
  async UseRegister(user) {
    const response = await axios.post("/users", { user });
    return response;
  },
  async useLogin() {
    // const response = await axios.post("/users/login");
  },
  async getUser() {
    // const response = await axios.post("/user");
  },
};

export default AuthService;
