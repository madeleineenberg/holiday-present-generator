import React, {useContext, useEffect} from 'react'
import { PersonContext } from '../contexts/PersonContext'
import {useHistory} from 'react-router-dom'

export default function ResultPage() {
    const {personList, setPersonList, correctStarted} = useContext(PersonContext)
     const history = useHistory();

    useEffect(() => {
        if(!correctStarted){
            history.push("/") 
        }
    },[])

    const giftDict = {
        "aaa": "Cool T-Shirt",
        "baa": "Cool Hoody",
        "caa": "Warm Socks",
        "aba": "Star Wars figure",
        "bba": "Marvel T-Shirt",
        "cba": "Smart Home Component",
        "aca": "Coloring Book",
        "bca": "Screwdriver",
        "cca": "Knitting Kit",
        "aab": "Fashionable Clothing",
        "bab": "Branded Jewellry",
        "cab": "Nice Hat",
        "abb": "Something from Teknikmagasinet",
        "bbb": "Something from Webhallen",
        "cbb": "Something from Mediamarkt",
        "acb": "Something from Panduro",
        "bcb": "Something from a store located in Södermalm",
        "ccb": "Crafts Table",
        "aac": "Something from Glitter",
        "bac": "Something from Rituals",
        "cac": "Something from Guldfynd",
        "abc": "RC Car",
        "bbc": "Smart Home Sockets",
        "cbc": "Wifi Lamps",
        "acc": "Get started with Molding Kit",
        "bcc": "Sewing Kit",
        "ccc": "A bag of cement"
      }

 
  

    return (
        <div className="app-wrapper">
            <h2>Result:</h2>
            <h3>{giftDict[personList]}</h3>
            <h3>🎉</h3> 
        </div>
    )
}
