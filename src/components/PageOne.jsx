import React from "react"
import GabiImage from "../images/GabiImage.jpeg"


export function PageOne() {
    return (
        
        <div className="container-profile">
            <div className="text-box-profile">
                <div className="header-profile">
                    <h1>Quem sou eu?</h1>
                </div>
                
                <div className="text-profile">
                    <p>MUDA AQUI </p> <br />
                    <p>MUDA AQUI </p>
                </div>
                    
            </div>
            <img src={GabiImage} className="gabi-image" />
        </div>
        
    )
}