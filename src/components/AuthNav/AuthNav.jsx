import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={css.container}>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </nav>
  );
};

export default AuthNav;
