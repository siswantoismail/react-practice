const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="form">
      <h2>{title}</h2>
      <p>Welcome, Please enter your details</p>
      {children}
    </div>
  );
};

export default AuthLayouts;
