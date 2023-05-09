import { useState, useEffect } from "react"

import { geRandomImage } from "../services/facts"

//CUSTOM HOOK
// se delcara el use state
// Este hook recibe el parametro fact por el que le extrae las 3 primeras palabras
// las cuales las utiliza para sacar la imagen random enviandoselas a la funcion de que extrae info de la api
// y setea el url con la info obtenida
// retorna el estado del url actual


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (!fact) return //return si no exite fact renderizado 
        const firstWord = fact.split(' ', 3).join(' ')
        geRandomImage(firstWord).then(setImageUrl)

    }, [fact])

    return { imageUrl }
}