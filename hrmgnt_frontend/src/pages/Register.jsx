
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
    let [Name, setName] = useState("")
    let [EmailID, setEmailID] = useState("")
    let [Password, setPassword] = useState("")
    let [Role, setRole] = useState("Employee")
    let navigate = useNavigate()

    let handleRegister = (event) => {
        event.preventDefault()

        console.log({ Name, EmailID, Password, Role })
        alert("Registered Successfully")
        navigate("/login")
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name" required />
                <br />

                <input type="email" value={EmailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    placeholder="Enter EmailID" required />
                <br />

                <input type="password" value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" required />
                <br />

                <select value={Role}
                    onChange={(e) => setRole(e.target.value)}>
                    <option value="Employee">Employee</option>
                    <option value="HR">HR</option>
                </select>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
