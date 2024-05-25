import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const userNameId = useId();
  const userNumberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => toast.success("Save contact!"))
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again");
      });
    actions.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.container}>
        <h3>Add contact!</h3>
        <label htmlFor={userNameId}>
          Name
          <Field name="name" id={userNameId} />
          <ErrorMessage name="name" component="span" />
        </label>

        <label htmlFor={userNumberId}>
          Number
          <Field name="number" id={userNumberId} />
          <ErrorMessage name="number" component="span" />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
