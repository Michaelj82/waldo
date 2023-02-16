import React, { useLayoutEffect, useRef } from 'react';
import { useState, useEffect, createRef } from 'react';
import uniqid from "uniqid";
import ImageMagnifier from './imagemagnifyer';
import updateCoords from './firebase.js'
import ScorePopUp from './ScorePopUp';

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

// see if works when it isnt the main thing in the page, but something loaded in.
function ImageMap(props){
    const divRef = useRef()


    const [isClicked, setisClicked] = useState(false)
    const [position, setPosition] = useState([0,0])
    const [id, setID] = useState(uniqid())
    const {width, height} = useContainerDimensions(divRef)
    const [found, setFound] = useState([...props.findable])
    const [counter, setCounter] = useState(props.start);


    function makeSelection(event){
        setisClicked(current => !current)
        //need ot change this so instead of taking client x y click
        //it takes the div's x y of click

        let rect = event.target.getBoundingClientRect();
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top;
        setPosition([x, y])

    }


    function callback(item, target){
        if (item === true){
            if (found.includes(target)){
                let temp = found.filter(item => item !== target)
                setFound(temp)
                console.log(`Found ${target}`)
            }

        }
    }

    useEffect(() => {
        if (found.length !== 0){
            if (counter < props.max){
                setTimeout(()=> setCounter(counter+1), 1000);
            }else{
            }
        }else{

        }

        
    }, [counter]);

    // useEffect(() =>{
    //     if (found.length === 0){
    //         let num = counter
    //         console.log(num)
    //         alert(`you found them all! with a time of ${num} seconds`)
    //     }
    // }, [found])
    return(

        <div>
            <div id='findableProfilePics'>
                {found.map(item => (
                        <img className='findableProfile' src={props.profilePics[item]} key={uniqid()}></img>
                ))}
            </div>

            <div id = {id} className ={'waldoMap'} onClick={makeSelection}>
                {isClicked && (
                    <div id='selectionPopUp' style={{
                        left: position[0] + 'px',
                        top: position[1] + 'px',



                    }}>
                        <ul style={{
                            listStyle: "none",
                            marginLeft: "-1em",
                        }}>
                            <li onClick={function(){
                                let xRatio = position[0]/width;
                                let yRatio = position[1]/height;
                                let ratio = [xRatio,yRatio]
                                console.log(position)
                                console.log(ratio)
                                updateCoords(props.findable[0], ratio, props.map, callback)

                            }}><img className='findableProfileSelect' src={props.profilePics[props.findable[0]]}></img></li>
                            <li onClick={function(){
                                let xRatio = position[0]/width;
                                let yRatio = position[1]/height;
                                let ratio = [xRatio,yRatio]
                                console.log(position)
                                console.log(ratio)
                                updateCoords(props.findable[1], ratio, props.map, callback)

                            }}><img className='findableProfileSelect' src={props.profilePics[props.findable[1]]}></img></li>
                            <li onClick={function(){
                                let xRatio = position[0]/width;
                                let yRatio = position[1]/height;
                                let ratio = [xRatio,yRatio]
                                console.log(position)
                                console.log(ratio)
                                updateCoords(props.findable[2], ratio, props.map, callback)

                            }}><img className='findableProfileSelect' src={props.profilePics[props.findable[2]]}></img></li>
                            <li>
                                {width}w
                            </li>
                            <li>
                                {height}h
                            </li>


                        </ul>

                    </div>
                )}
                <div ref={divRef} className={'waldoImage'}>
                    <ImageMagnifier image={props.image}></ImageMagnifier>
                </div>
            </div>
            {(found.length === 0) &&
                <ScorePopUp time={(counter-1)} map={props.map}></ScorePopUp>

            }

        </div>
        
    )



}

export default ImageMap;