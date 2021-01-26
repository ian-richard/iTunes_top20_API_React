import React from "react";

const Artist = ({chart}) => {
    return(
        <h3> Artist: {chart.category.attributes["im:id"]}</h3>
    )
}

export default Artist;