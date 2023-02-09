import React, { useLayoutEffect, useRef } from 'react';
import { useState, useEffect, createRef } from 'react';
import uniqid from "uniqid";
import ImageMagnifier from './imagemagnifyer';
import updateCoords from './firebase'

const useContainerDimensions = myRef => {
    const [dimensions, setDimensions] = useState({width: 0, height: 0})

    useEffect(() => {
        const getDimensions = () => ({
            width: myRef.current.offsetWidth,
            height: myRef.current.offsetHeight
        })

        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current){
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [myRef])
    return dimensions
}


function ImageMap(props){
    const divRef = useRef()
    

    const [isClicked, setisClicked] = useState(false)
    const [position, setPosition] = useState([0,0])
    const [id, setID] = useState(uniqid())
    const {width, height} = useContainerDimensions(divRef)
    
   
    function makeSelection(event){
        setisClicked(current => !current)
        setPosition([event.clientX, event.clientY])
        if (isClicked == true){
            let xRatio = position[0]/width;
            let yRatio = position[1]/height;
            let ratio = [xRatio,yRatio]

            console.log(`ratio: ${ratio}`)

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
                         console.log(position)
                        }}>Waldo</li>
                        <li onClick={function(){
                            console.log(position)
                        }}>bumble bee guy</li>
                        <li>
                            {width}w
                        </li>
                        <li>
                            {height}h
                        </li>


                    </ul>

                </div>
            )}
            <div ref={divRef} className={'waldoImage'}
>
                <ImageMagnifier></ImageMagnifier>

            </div>
        </div>
    )



}

export default ImageMap;