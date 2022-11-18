import { Link } from "react-router-dom"
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const Login = () => {
    const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>
                        Welcome
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Alias dolor asperiores impedit nulla quasi esse repellendus nam, blanditiis, 
                         numquam dolorem doloremque architecto culpa. 
                         Cum voluptas voluptatem, nisi facilis magni corrupti.
                    </p>
                    <Link to= "/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>
                        Login
                    </h1>
                    <form action="">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
