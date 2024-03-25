import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'; // Make sure this points to the correct CSS file

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");
    const [registerError, setRegisterError] = useState("");
    let navigate = useNavigate();

    function validateForm() {
        if (!username || !password || !firstname || !lastname || !gender) {
            setRegisterError("All fields are required");
            return false;
        }

        const nameRegex = /^[a-zA-Z]+$/;
        if (!firstname.match(nameRegex) || !lastname.match(nameRegex)) {
            setRegisterError("First and last names must contain only letters");
            return false;
        }

        if (password.length < 8) {
            setRegisterError("Password must be at least 8 characters long");
            return false;
        }

        return true;
    }

    function handleRegister() {
        if (!validateForm()) {
            return;
        }

        axios.get("http://localhost:3500/users/").then((res) => {
            const users = res.data;
            const newUser = { username, password, firstname, lastname, gender };

            const exists = users.some(user => user.username === username);
            if (exists) {
                setRegisterError("Username already exists");
                return;
            }

            axios.post("http://localhost:3500/users/", newUser)
                .then(() => {
                    alert("User registered successfully");
                    navigate("/login");
                })
                .catch((error) => {
                    setRegisterError("An error occurred during registration");
                    console.error("There was an error registering the user:", error);
                });
        });
    }

    return (
        <div className="register-container">
            <fieldset>
                <legend>Register</legend>
                <label>Firstname:</label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <label>Lastname:</label>
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <div className="gender-options">
    <div className="gender-label">
        <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>
    </div>
      <div className="gender-label">
        <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>

                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="button" onClick={handleRegister} value="Register" />
                {registerError && <div className="error">{registerError}</div>}
            </fieldset>
        </div>
    );
}

export default Register;
