import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useCookie } from '../Cookie';
import "./LogRegister.scss";

function LogIn() {
    const navigate = useNavigate();
    const { cookie, setCookieValue } = useCookie();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);

    // function to handle the change in the user input
    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    // function to handle the change in the password input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // functio to handle when an alert is closed
    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const handleSubmit = async (event) => {
        // do not let the page reload when the user
        // presses the submit button
        event.preventDefault();

        if (username === null || password === null) {
            setOpenAlert(true);
            return;
        }

        const apiURL = `http://127.0.0.1:8000/users/login?username=${username}&password=${password}`

        fetch(apiURL, { method: "POST" })
            .then(response => {
                // if the log in failed, reset the password input
                // and alert a message to the user
                if (!response.ok) {
                    setOpenAlert(true);
                    throw new Error("HTTP error!");
                }
                return response.json();
            })
            .then(response => {
                // set the cookie and redirect to the 
                // page with projects
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

                <Snackbar
                    open={openAlert}
                    autoHideDuration={5000} 
                    onClose={handleCloseAlert}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        severity="error" 
                    >
                        <AlertTitle>Log in failed. Please try again.</AlertTitle>
                    </Alert>
                </Snackbar>

                <form action="POST" className="log-register__form" onSubmit={handleSubmit}>
                    <TextField 
                        id="username" 
                        label="Username" 
                        variant="outlined" 
                        onChange={handleUserNameChange}
                        InputLabelProps={{
                            style: {
                                color: "rgba(240, 239, 244, 1)",
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "rgba(240, 239, 244, 1)",
                            }
                        }}
                    />
                    
                    <TextField 
                        id="password" 
                        type="password"
                        label="Password" 
                        variant="outlined"
                        onChange={handlePasswordChange}
                        InputLabelProps={{
                            style: {
                                color: "rgba(240, 239, 244, 1)",
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "rgba(240, 239, 244, 1)",
                            }
                        }}
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
                    >Submit</Button>
                </form>

                <Link to="/register" className="log-register__link">Not having an account? Register.</Link>
            </div>
        </div>
    )
};

export default LogIn;