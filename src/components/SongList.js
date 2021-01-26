import React from "react";
import Artist from "./SongDetail";

const SongList = ({songs, loaded}) => {

    if(!loaded){
        return<p>loading...</p>
    }

    const songItems = songs.feed.entry.map((song)=> {
        const index = songs.feed.entry.indexOf(song) +1;
        return (
            <Artist song={song} keys={song.id.attributes["im:id"]} index={index}/>
        )
    });

    return (
        <ul>
            {songItems}
        </ul>
    )
}

export default SongList;