
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [Name, setName] = useState("");
    const [EmailID, setEmailID] = useState("");
    const [Password, setPassword] = useState("");
    const [Role, setRole] = useState("EMPLOYEE");
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        if (Loading) return;

        setLoading(true);

        try {
            const res = await fetch(
                "http://localhost:2829/api/emp/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        Name,
                        EmailID,
                        Password,
                        Role
                    })
                }
            );

            // Read the response safely, even if the server returns HTML.
            const responseText = await res.text();

            let data;

            try {
                data = JSON.parse(responseText);
            } catch {
                console.error(
                    "Backend returned a non-JSON response:",
                    responseText
                );

                throw new Error(
                    `Server error (${res.status}). Check your backend terminal.`
                );
            }

            if (!res.ok) {
                console.error("Registration failed:", data);

                alert(
                    data.message ||
                    data.Message ||
                    `Registration failed (${res.status})`
                );

                return;
            }

            console.log("Registration successful:", data);

            alert("Registered Successfully! ");

            navigate("/login");

        } catch (error) {
            console.error("Registration error:", error);

            alert(
                error.message ||
                "Unable to connect to the server. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h2>Register</h2>

                <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                />
                <br /><br />

                <input
                    type="email"
                    value={EmailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    placeholder="Enter Email ID"
                    required
                />
                <br /><br />

                <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />
                <br /><br />

                <select
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="HR">HR</option>
                </select>
                <br /><br />

                <button type="submit" disabled={Loading}>
                    {Loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
}

export default Register;
