import React from 'react';
import '../css/seasonDisplay.css'


const seasonConfig = {
    summer : {
        text:"oops it's summer",
        icon: "sun"
    },
    winter : {
        text: "wow it's winter",
        icon: "snowflake"
    }

}

const findSeason = (latitude, month) => {
    if(month > 2 && month <9){
        return latitude > 0 ? "summer" : "winter"
    }
    else{
        return latitude > 0 ? "summer" : "winter"
    }
}


const SeasonDisplay = (props) => {

    const season = findSeason(props.lat,new Date().getMonth)
    const {text, icon} = seasonConfig[season]

    return (
        <div className={`seasonDisplay ${season}`}>
            <i className={`icon-left massive ${icon} icon`}></i>
            <h1 className="season-text">{text}</h1>
            <i className={`icon-right massive ${icon} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;