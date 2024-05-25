import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo="/"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
};

export default App;
