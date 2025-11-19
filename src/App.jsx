import Button from "./components/Elements/Button";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="form">
          <h2>Login</h2>
          <p>Please, enter your detail</p>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
