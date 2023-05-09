import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"
const PREFIX_URL = 'https://catfact.com'

export function App() {

    //custom hooks los cuales son funciones en los que se puede usar useState 
    
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    const [factError, setFactError] = useState()

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <button onClick={handleClick}>get New Fact</button>
            <h1>cats</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={fact} />}

        </main>

    )
}