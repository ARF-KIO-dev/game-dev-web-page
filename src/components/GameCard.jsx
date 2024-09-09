import React from "react"

/*

Small Panels / Cards 
- displays a small tidbit about game name, info
- game splash images
- play button!
- link to itch.io / github

*/

export default function GameCard(props) {

    // LOGIC

    // JSX

    return (
        <div className="card">

            <div className="card-titles">
                <h1>{props.game_title}</h1>
                <h2>{props.game_sub_title}</h2>
            </div>

            <img src = {props.img}/>
            <div className="card-sub">
                <button className="card-button">Play!</button>
            </div>
        </div>
    )


}