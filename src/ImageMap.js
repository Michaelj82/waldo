import React, { useLayoutEffect } from 'react';
import { useState, useEffect, createRef } from 'react';
import uniqid from "uniqid";
import ImageMagnifier from './imagemagnifyer';
const useRefDimensions = (ref) => {
    const [dimensions, setDimensions] = useState({width: 1, height: 2})
    useEffect(() => {
      if (ref.current){
        const {current} = ref
        const boundingRect = current.getBoundingClientRect()
        const {width, height} = boundingRect
        setDimensions({width: Math.round(width), height: Math.round(height)})
      }
    }, [])
    return dimensions
  
  }

function ImageMap(props){
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    

    const [isClicked, setisClicked] = useState(false)
    const [position, setPosition] = useState([0,0])
    const [id, setID] = useState(uniqid())
    

    function makeSelection(event){
        setisClicked(current => !current)
        setPosition([event.clientX, event.clientY])
        if (isClicked == true){
            console.log(`position: ${position}`)

        }
    }


    return(
        <div id = {id} className ={'waldoMap'} onClick={makeSelection} ref={divRef}>
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
                        <li>width: {dimensions.width}</li>
                        <li>height: {dimensions.height}</li>


                    </ul>

                </div>
            )}
            <ImageMagnifier></ImageMagnifier>
        </div>
    )



}

export default ImageMap;