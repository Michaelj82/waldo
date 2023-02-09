import React, { useLayoutEffect } from 'react';
import { useState, useEffect, createRef } from 'react';
import uniqid from "uniqid";
import ImageMagnifier from './imagemagnifyer';
import updateCoords from './firebase'

//thsi will work if it doesnt go infinite,
//find way to stop infinite
const useRefDimensions = (ref) => {
    const [dimensions, setDimensions] = useState({width: 1, height: 2})
    useEffect(() => {
      if (ref.current){
        const boundingRect = ref.current.getBoundingClientRect()
        const {width, height} = boundingRect
        console.log(width, height)
        setDimensions({width: width, height: height})
        console.log(dimensions)

        // updateCoords(Math.round(width), Math.round(height), 'bumblebee')
      }
    }, [])
    return dimensions

  }

function ImageMap(props){
    const divRef = createRef(null)
    const dimensions = useRefDimensions(divRef)
    

    const [isClicked, setisClicked] = useState(false)
    const [position, setPosition] = useState([0,0])
    const [id, setID] = useState(uniqid())
    
    useEffect(() =>{
    }, [dimensions])



    function makeSelection(event){
        setisClicked(current => !current)
        setPosition([event.clientX, event.clientY])
        if (isClicked == true){
            // console.log(`position: ${position}`)

        }
    }


    return(
        <div id = {id} className ={'waldoMap'} onClick={makeSelection}>
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
                        <li onClick={function(){
                            console.log(dimensions.width)
                            console.log(dimensions.height)
                        }}>Waldo</li>
                        <li onClick={function(){
                            console.log(position)
                        }}>bumble bee guy</li>
                       

                    </ul>

                </div>
            )}
            <div ref={divRef}>
                <ImageMagnifier></ImageMagnifier>

            </div>
        </div>
    )



}

export default ImageMap;