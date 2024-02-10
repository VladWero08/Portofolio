import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useCookie } from '../Cookie';

import "./LogRegister.scss";

function LogIn() {
    const navigate = useNavigate();
    const { cookie, setCookieValue } = useCookie();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiURL = `http://127.0.0.1:8000/users/login?username=${username}&password=${password}`

        fetch(apiURL, { method: "POST" })
            .then(response => {
                if (!response.ok) {
                    alert("Log in failed. Please try again.");
                    setPassword(null);

                    throw new Error("HTTP error!");
                }

                return response.json();
            })
            .then(response => {
                setCookieValue(response.cookie);
                navigate("/projects");
            }).catch(error => {
                console.error('Error occurred during API request:', error.message);
            });
    }

    return (
        <div className="log-register__wrapper">
            <div className='log-register__wrapper-inner'>
                <div className="log-register__title">Log in:</div>

                <form action="POST" className="log-register__form" onSubmit={handleSubmit}>
                    <TextField 
                        id="username" 
                        label="Username" 
                        variant="outlined" 
                        onChange={handleUserNameChange}
                    />
                    
                    <TextField 
                        id="password" 
                        type="password"
                        label="Password" 
                        variant="outlined"
                        onChange={handlePasswordChange}
                    />  

                    <Button 
                        variant="contained"
                        type="submit"
                        style={{
                            fontFamily: 'Raleway',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            width: "5vw",
                            backgroundColor: "rgba(146, 180, 167, 1)",
                        }}
                    >
                        Submit
                    </Button>
                </form>

                <Link to="/register" className="log-register__link">Not having an account? Register.</Link>
            </div>
        </div>
    )
};

export default LogIn;