import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
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

        const apiURL = `http://127.0.0.1:8000/users/create?username=${username}&password=${password}`

        fetch(apiURL, { method: "POST" })
            .then(response => {
                // if it was succesfully created, go to the log in page
                if (response.ok) {
                    navigate("/log-in");
                }
                // otherwise, let the user know an error occured
                else {
                    alert("Register failed. Please try again.");
                    setPassword(null);
                }
            }).catch(error => {
                console.error('Error occurred during API request:', error.message);
            });
    }

    return (
        <div className="log-register__wrapper">
            <div className='log-register__wrapper-inner'>
                <div className="log-register__title">Register:</div>
                <div className="log-register__description">
                By creating an account, you've unlocked a portal to discover the intricacies of our exciting project! 🚀 <br/>
                Dive into the depths of project details, explore its features, and embark on a journey filled with innovation and possibilities.
                </div>

                <form action="POST" className="log-register__form" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined" 
                        onChange={handleUserNameChange}
                    />
                    
                    <TextField 
                        id="outlined-basic" 
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

                <Link to="/log-in" className="log-register__link">Already having an account? Log in.</Link>
            </div>
        </div>
    )
}

export default Register;