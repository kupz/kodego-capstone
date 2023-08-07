import logo from "../../assets/m1-logo.png";
import someImage from "../../assets/bg.svg";

export default function Login() {
  return (
    <div className="login">
      <div className="login-left-section">
        <img src={someImage} alt="image" />
      </div>
      <div className="login-form-container">
        {/* logo here */}
        <img src={logo} alt="logo" className="logo" />
        <h1>Hi, Welcome!</h1>
        <p>Take charge. Be your Own Money Manager! </p>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <p>Forgot your passwod ?</p>
          <button>Sign in</button>
        </form>
        <div>
          <p>
            don't have an account ? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
