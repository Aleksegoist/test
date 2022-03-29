import { Login } from "../components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Enter your login:</h1>
      <Login />
      <p>
        Or you could <Link to='/register'>register</Link>
      </p>
    </div>
  )
}

export {LoginPage}