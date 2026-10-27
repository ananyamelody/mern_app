
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [EmailID, setEmailID] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();

        if (EmailID === "admin@gmail.com" && Password === "admin") {
            setError("");
            navigate("/adminhome");
        } else {
            let req=await fetch("http://localhost:2829/api/emp/login",
                {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({EmailID,Password})
                });
                let data=await req.json()
                console.log(data);
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
