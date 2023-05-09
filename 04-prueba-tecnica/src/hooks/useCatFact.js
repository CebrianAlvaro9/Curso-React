import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"


//custom hook

//Primero que se declara una constante la cual recoge la informacion de la api con la funcion getRandomFact
//Esta constante se ejecuta en un useEffect 
// por ultimo se devuelve el fact ya seteado y la funcion refreshFact para poder usarla en otros componentes como el boton


export function useCatFact(){
    const [fact, setFact] = useState()

    const refreshFact =()=>{
        getRandomFact().then(setFact)
    }
    useEffect(refreshFact, [])

    return {fact, refreshFact}
}