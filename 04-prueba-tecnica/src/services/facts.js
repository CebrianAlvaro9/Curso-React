const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

//funciones para extraer la informacion directamente de las apis de forma asincrona
// devolvemos la informacion en el return
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

export const geRandomImage = async (firstWord) => {

    const res = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    const data = await res.json()
    return (`https://cataas.com${data.url}`)

}

// fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
// .then(res => res.json())
// .then(response => {
//     console.log(response)
//     const { url } = response
//     setImageUrl(`https://cataas.com${url}`)
//     console.log(imageUrl)

// })