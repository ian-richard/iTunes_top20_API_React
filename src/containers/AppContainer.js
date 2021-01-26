import React, {useState, useEffect} from "react";
import ArtistList from "../components/SongList";

const AppContainer = () => {

    const [songs, setChart] = useState({});
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        getSongs();
    }, [])
    
    const getSongs = () => {
        console.log("getting chart info");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setChart(data))
        .then(() => setLoaded(true))

    }

    return (
        <>
        <h1>Top 20 in the charts</h1>
        <ArtistList songs={songs} loaded={loaded}/>
        </>
    )

}

export default AppContainer;