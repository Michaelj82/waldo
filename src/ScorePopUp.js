import React from "react";
import { useState } from "react";
import {Navigate} from 'react-router-dom';
import { writeData } from "./firebase";

function ScorePopUp(props){
    const [name, setName] = useState('');
    const [redirect, setRedirect]= useState(false)
    function handleChange(event){
        setName(event.target.value)
    }
    function handleSubmit(){
        writeData(name, props.time, props.map)
        setRedirect(true)
    }
    if (redirect === true){
        return(
            <Navigate to='/waldo/'></Navigate>
        )
    }else{
        return(
            <div id="popUp">
                <h3>You did it!</h3>
                <div className="popupElement">Submit your score to the leaderboard below!</div>
                <form onSubmit={handleSubmit}>
                    <input id="name" type='text' placeholder="Your Name" required onChange={handleChange}></input>
                    <div className="popupElement">Your time was: {props.time} seconds!</div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default ScorePopUp