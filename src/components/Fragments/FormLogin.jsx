import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { useRef } from "react";
import { useEffect } from "react";
export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    console.log("login");
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button type="submit">Login</Button>
    </form>
  );
}
