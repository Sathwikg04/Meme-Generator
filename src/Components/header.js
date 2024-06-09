import React from "react";
import img from "../Images/TrollFace.png"

export default function Header(){
    return(
        <header className="header">
            <img src={img} className="header-image" alt="Meme"></img>
            <h1 className="header-title">Meme Generator</h1>
        </header>
    )
}