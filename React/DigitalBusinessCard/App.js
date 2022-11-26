import React from "react"
import Main from "./components/Main.js"
import ProfilePicture from "./components/ProfilePicture.js"
import SocialIcons from "./components/SocialIcons.js"
export default function App(){
    return(
        <div className="container">
        <ProfilePicture/>
        <Main/>
        <SocialIcons />
        </div>
    )
}