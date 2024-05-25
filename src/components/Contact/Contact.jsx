import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Delete!"))
      .catch(() => {
        toast.error("Oops, something went wrong!!!");
      });

  return (
    <div className={css.container}>
      <div>
        <h3>
          <FaUser />
          {name}
        </h3>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
