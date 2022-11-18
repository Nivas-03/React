import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>
                        Welcome Back !
                    </h1>
                    <p>
                       Please login here, if already have an account
                    </p>
                    <Link to= "/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>
                        Register
                    </h1>
                    <form action="">
                    <input type="text" placeholder="Email" />
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>Regsiter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
