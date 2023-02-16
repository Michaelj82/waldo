import React, { useEffect, useState } from "react";
import { getHighscore } from "./firebase";
import uniqid from 'uniqid'

export default function Highscore(props){
    const [desert, setDesert] = useState([])
    const [gladiator, setGladiator] = useState([])
    const [snow, setSnow] = useState([])
    
    function callback(item, map){

        if (map === 'desert'){
            setDesert(item)
        }else if (map === 'gladiator'){
            setGladiator(item)
        }else if (map === 'snow'){
            setSnow(item)
        }
    }

    useEffect(() => {
        props.maps.map(item => (
            getHighscore(item, callback)
        ))
    }, [])

    return(
        <div id="highscore">
            <div id="desertScores" className="mapScores">
                <h3 className="scoreHeader">Fastest Beach Map Scores</h3>
                {desert.map(item => (
                    <div className="scoreDisplay">
                        <div>{item.scoreName} - {item.scoreTime} seconds</div>

                    </div>
                ))}
            </div>

            <div id="gladiatorScores" className="mapScores">
                <h3 className="scoreHeader">Fastest Track Map Scores</h3>

                {gladiator.map(item => (
                        <div className="scoreDisplay">
                            <div>{item.scoreName} - {item.scoreTime} seconds</div>
                        </div>
                    ))}
            </div>

            <div id="snowScores" className="mapScores">
                <h3 className="scoreHeader">Fastest Ski Map Scores</h3>

                {snow.map(item => (
                    <div className="scoreDisplay">
                        <div>{item.scoreName} - {item.scoreTime} seconds</div>

                    </div>
                    ))}
            </div>

        </div>
    )
}