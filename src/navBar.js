import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function NavBar(props){

    return(
        <div id='navBar'>
            <ul className='links'>
                <li>Where's Waldo?</li>
                <li><Link to='/waldo'>Maps</Link></li>
                <li> <Link to='/highscores'>High Scores</Link></li>
            </ul>
        </div>
    )

}