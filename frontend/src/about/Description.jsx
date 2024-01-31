import "./Description.scss";

import programmer from "../assets/images/programmer.svg";

function Description() {
    return (
        <div className="descritpion__wrapper">
            <div className="description__text">
                <img src={programmer} alt="programmer" />
            </div>
            <div className="description__title">
                <h1>About me</h1>
                <div className="line"></div>
                <p>
                    Hello, my name is Olaeriu Vlad and I'm a final-year Computer Science student who's into coding, volleyball, and sports in general. 🏐 
                    I used to play volleyball during middle and high school, and I still love to do it. <br/><br></br>
                    Besides tech stuff, I love drawing and jamming to music. ✏️🎶 Because I love drawing, I have
                    a little passion for graphic design, I usually build logos or design small sections of websites.
                </p>
            </div>
        </div>
    );
}

export default Description;