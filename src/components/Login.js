import axios from 'axios';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();
    let location = useLocation();

    function validateForm() {
        return uname.length > 0 && pass.length > 0;
    }

    function loginButton_click() {

        const queryString = location.search; // returns the query string from the current url      
      let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      if(strReturnUrl == null)
      {
        strReturnUrl = "/";
      }

        if (!validateForm()) {
            setError("Please enter both username and password.");
            return;
        }
        
        setError("");

        axios.get("http://localhost:3500/users/")
            .then((res) => {
                const response = res.data;
                let foundUser = false;

                for (let i = 0; i < response.length; i++) {
                    if (response[i].username === uname && response[i].password === pass) {
                        foundUser = true;
                        

                        if (response[i].role === "admin") {
                            console.log("route to admin page");
                            let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
                            sessionStorage.setItem('admin-token', token);
                            navigate('/BoatCrud');
                        } else {
                            console.log("route to client page");
                            let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
                            sessionStorage.setItem('user-token', token);
                            sessionStorage.setItem('user-name', uname);
                            navigate(strReturnUrl);
                        }
                        setUname("");
                        setPass("");
                        break;
                    }
                }

                if (!foundUser) {
                    setError("Login failed: Invalid username or password.");
                }
            })
            .catch((error) => {
                setError("An error occurred while trying to log in.");
                console.error("Login error:", error);
            });
    }

    return (
        <>
            <video autoPlay muted loop className="bg-video">
                <source src=".\Images\BoatVideoAd.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="login-container">
                <legend>User Login</legend>
                <div className="error-message">{error}</div>
                <label htmlFor="userId">User ID:</label>
                <input type="text" id="userId" value={uname} onChange={(event) => setUname(event.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={pass} onChange={(event) => setPass(event.target.value)} />
                <input type="button" onClick={loginButton_click} value="Login" />
            </div>
        </>
    );
}

export default Login;