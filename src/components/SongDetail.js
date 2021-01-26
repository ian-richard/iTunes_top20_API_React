import React from "react";

const SongDetail = ({song, index}) => {
    return(
        <div>
            <h3>No. {index}: {song["im:name"].label} </h3>
            <h5>by {song["im:artist"].label}</h5>
            
            
            
        </div>
    )
}

export default SongDetail;

// working: <h3> Artist: {song["im:artist"].label} </h3>
