import React, {useState, useEffect} from "react";
import Artist from "../components/Artist";

const AppContainer = () => {

    const [chart, setChart] = useState({});

    useEffect(()=>{
        getChart();
    })
    
    const getChart = () => {
        console.log("getting chart info");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setChart(data))

    }

    return (
        <>
        <h1>App Container</h1>
        <Artist chart={chart}/>
        </>
    )

}

export default AppContainer;