import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const userNameId = useId();
  const userEmailId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success("Successful autorization!!!"))
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again");
      });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.container} autoComplete="off">
          <label htmlFor={userNameId}>
            Email
            <Field id={userNameId} type="email" name="email" />
          </label>
          <label htmlFor={userEmailId}>
            Password
            <Field id={userEmailId} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
};

export default LoginForm;
