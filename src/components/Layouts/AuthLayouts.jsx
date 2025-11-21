import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="container">
      <div className="form">
        <h2>{title}</h2>
        <p>Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
        {/* <p>
          {type === "login" ? "Don't have an account?" : "Have an account?"}

          {type === "login" && <Link to="/register">Sign up</Link>}
          {type === "register" && <Link to="/login">Sign in</Link>}
        </p> */}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    );
  } else {
    return (
      <p>
        Don't have an account? <Link to="/login">Sign in</Link>
      </p>
    );
  }
};

export default AuthLayouts;
