import Button from '@mui/material/Button';

import "./Home.scss"
import profile_image from "../assets/images/villy-profile.jpg"

function HomeBanner(){
    return (
        <div className="home-banner">
            <div className="message">
                <div className="big-title">
                    Hello, I am <span className="message-pink">Vlad</span>. <br/> 
                </div>
                
                <br/>
                
                <div className="small-title">
                    D<span className="message-pink">i</span>ve deep<span className="message-pink">l</span>y 
                    int<span className="message-pink">o</span> <span className="message-pink">v</span>ividn<span className="message-pink">e</span>ss, <br/>
                    where <span className="message-pink">code</span> creates magic.
                </div>

                <br/>
                
                <div className='buttons'>
                    <Button 
                        variant="contained"
                        style={{
                            fontFamily: 'Raleway',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            marginRight: '8px',
                            backgroundColor: "rgba(146, 180, 167, 1)",
                        }}
                    >Projects</Button>
                    <Button 
                        variant="outlined"
                        className='btn-contact'
                        style={{
                            fontFamily: 'Raleway',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            color: "rgba(146, 180, 167, 1)",
                            border: "2px solid rgba(146, 180, 167, 1)"
                        }}
                    >Contact</Button>
                </div>

            </div>
            <div className="blobs">
                <div className="blob blob-dark"></div>
                <div className="blob blob-bright"></div>
                <div className="blob miniblob-purple"></div>
                <div className="blob miniblob-pink"></div>
                <img
                    className="home-profile-image" 
                    src={profile_image} 
                    alt="profile"/>
            </div>
        </div>
    );
}

export default HomeBanner;