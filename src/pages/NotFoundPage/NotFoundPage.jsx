import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Opps! Page not found! Sorry!</h2>
      <p>
        <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
