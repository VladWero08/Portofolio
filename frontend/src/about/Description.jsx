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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti fugiat quam laborum, libero facere hic rem assumenda, consectetur sapiente rerum ad! Accusamus perspiciatis numquam facilis doloribus, dolores obcaecati? Veniam!<br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a quis, accusantium quod ratione vero?
                </p>
            </div>
        </div>
    );
}

export default Description;