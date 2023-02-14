import React from 'react';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid'
import {Link} from 'react-router-dom'
export default function SelectionPage(props){

    
    return(

        <div className='waldoSelection'>
            <h2 id='waldoHeader'>Where's Waldo?</h2>

            <div>
                {props.maps.map(item => (
                    <div className='selectionSpecifics' key={uniqid()}>
                        {item.title}
                        <img className={'selectionDisplay'} src={item.image}></img>
                        <Link to={item.link}>Click to play this map</Link>
                    </div>
                ))}
            </div>

        </div>

    )



}

