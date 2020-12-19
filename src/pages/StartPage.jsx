import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom';
import { PersonContext } from '../contexts/PersonContext';

export default function StartPage() {
    const {setCorrectStarted} = useContext(PersonContext)
    useEffect(()=> {
        setCorrectStarted(true);
    }, [])

    return (
        <div className="app-wrapper">
            <h1>Holiday Present Generator</h1>
            <img src="https://media.giphy.com/media/3o6fJ0mUt4WWF1qox2/giphy.gif" alt="gift"/>
            <Link to="/age"><button>Start</button></Link>
        </div>
    )
}
