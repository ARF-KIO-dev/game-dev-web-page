import React from "react";

/*

Main play space for current game!

*/

export default function GameScreen() {
    return (
        
        <div className="game-screen">
            <h1>Game name here</h1>
            <iframe frameborder="0" 
                    src="https://itch.io/embed-upload/8352091?color=000000" 
                    allowfullscreen="" 
                    width="640" 
                    height="512">
                    <a href="https://dukkio.itch.io/bnnuydeathpit">Play BnnuyDeathPit on itch.io</a>
            </iframe>
        </div>
    )
}