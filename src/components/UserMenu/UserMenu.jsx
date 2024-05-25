import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.btn} onClick={handleLogOut} type="button">
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
