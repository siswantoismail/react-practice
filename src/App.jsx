import Button from "./components/Elements/Button";
import "./App.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <div className="container">
        {/* <LoginPage></LoginPage> */}
        <RegisterPage></RegisterPage>
      </div>
    </>
  );
}

export default App;
