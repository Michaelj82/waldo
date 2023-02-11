import React, { useLayoutEffect, useRef } from 'react';
import { useState, useEffect, createRef } from 'react';
import uniqid from "uniqid";
import ImageMagnifier from './imagemagnifyer';
import updateCoords from './firebase.js'



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
    const [found, setFound] = useState([...props.findable])
   
    function makeSelection(event){
        setisClicked(current => !current)
        setPosition([event.clientX, event.clientY])
        if (isClicked == true){



        }
    }


    function callback(item, target){
        console.log(found)
        if (item === true){
            if (found.includes(target)){
                let temp = found.filter(item => item !== target)
                setFound(temp)
                console.log(`Found ${target}`)
            }

        }
    }

    useEffect(() =>{
        if (found.length === 0){
            alert('you found them all!')
        }
    }, [found])
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
                            let xRatio = position[0]/width;
                            let yRatio = position[1]/height;
                            let ratio = [xRatio,yRatio]
                            // console.log(position)
                            // console.log(ratio)
                            updateCoords(props.findable[0], ratio, props.map, callback)

                        }}>{props.findable[0]}</li>
                        <li onClick={function(){
                            let xRatio = position[0]/width;
                            let yRatio = position[1]/height;
                            let ratio = [xRatio,yRatio]
                            updateCoords(props.findable[1], ratio, props.map, callback)

                        }}>{props.findable[1]}</li>
                        <li onClick={function(){
                            let xRatio = position[0]/width;
                            let yRatio = position[1]/height;
                            let ratio = [xRatio,yRatio]
                            updateCoords(props.findable[2], ratio, props.map, callback)

                        }}>{props.findable[2]}</li>
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
                <ImageMagnifier image={props.image}></ImageMagnifier>

            </div>
        </div>
    )



}

export default ImageMap;