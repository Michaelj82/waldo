import React from 'react';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid'
import {Link} from 'react-router-dom'
import waldoFight from './images/waldoFight.png'
export default function SelectionPage(props){

    
    return(
        <div id='mainPage'>

            <div class='fancyIntro'>
                    <h1 className='lean1'>Where's</h1>
                    <h1 className='lean2'>Waldo?</h1>
                <div className='frontText'>
                    Your goal is to find Waldo, Odlaw, and the Wizard on these "Where's Waldo?" maps! If you don't know what they look like, don't worry. There will be images of the characters above the map, so you can use that as a guide! Happy finding!
                </div>
                <img className='introImage' src={waldoFight}></img>


            </div>


            <div className='waldoSelection'>

            <div>
                {props.maps.map(item => (
                    <div className='selectionSpecifics' key={uniqid()}>
                        {item.title}
                        <img className={'selectionDisplay'} src={item.image}></img>
                        <Link className = {'reactLink'} to={item.link}>Click to play this map</Link>
                    </div>
                ))}
            </div>

            </div>


        </div>
        

    )



}

