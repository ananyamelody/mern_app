
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [EmailID, setEmailID] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (EmailID === "admin@gmail.com" && Password === "admin") {
            setError("");
            navigate("/userhome");
        } else {
            setError("Invalid Email ID or Password");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={EmailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    placeholder="Enter Email ID"
                    required
                />
                <br />

                <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />
                <br />

                <button type="submit">Login</button>
            </form>

            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}
        </div>
    );
}

export default Login;
