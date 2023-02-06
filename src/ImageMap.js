import React from 'react';
import { useState, useEffect } from 'react';
import uniqid from "uniqid";

function ImageMap(props){
    const [isClicked, setisClicked] = useState(false)
    const [position, setPosition] = useState([0,0])
    const [id, setID] = useState(uniqid())

    function makeSelection(event){
        setisClicked(current => !current)
        setPosition([event.clientX, event.clientY])
    }


    useEffect(() =>{
        console.log(`this is id: ${id}`)
    })

    return(
        <div id = {id} onClick={makeSelection}>
            {isClicked && (
                <div style={{
                    position:"absolute",
                    left: position[0] + 'px',
                    top: position[1] + 'px',
                    transform: "translateX(-50%)",
                    transform: "translateY(-50%)",
                    zIndex: 1000,


                }}>
                    <ul>
                        <li onClick={function(){console.log('waldo!')}}>Waldo</li>
                        <li onClick={function(){console.log('bumble!')}}>bumble bee guy</li>
                    </ul>

                </div>
            )}
            <img src={props.image}></img>
        </div>
    )



}

export default ImageMap;