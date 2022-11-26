import React from "react"
export default function Main(){
    return(
        <main>
            <div className="title">
                <h2 className="name">Iman Almarouk</h2>
                <h4 className="job">Web Developer</h4>
                <h6 className="website">iman.almarouk.com</h6>
                <button className="btn-white"><img src="./images/Icon.png"/ >Email</button>
                
                <button className="btn-blue"><img src="./images/linkedin.png"/>Linkedin</button>
            </div>
            <div className="description">
                <h3 className="about">About</h3>
                <p className="description-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
                <h3 className="interests">Interests</h3>
                <p className="description-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
            </div>
        </main>
    )
}