import React from "react";

const Artist = ({song, index}) => {
    return(
        <li>
            <h3>Artist: {song["im:artist"].label}</h3>
            <p>Song: {song["im:name"].label} </p>
            <p>Chart position: {index}</p>
        </li>
    )
}

export default Artist;

// working: <h3> Artist: {song["im:artist"].label} </h3>
