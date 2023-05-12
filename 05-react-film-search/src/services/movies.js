const API_KEY ='bb8caaea'

export const searchMovies = async({search})=>{
    // si la busqueda esta vacia no tira la peticion
    if (search==='') return null

    // si no esta vacia procede hacer la peticion a la api para obtener toda la informacion con los parametros que le hemos enviado
    // realiza peticion sync await 
    // parsea toda la info en un json
    // esta info la guardas en un array el cual retornas directamente para cuando sea llamada la funcion searchMovies

    // es importante guardarlo en un nuevo array de esta forma si algo cambiase en la api y todo nuestro codigo se basara en ella tendriamos que cambiar muchas mas cosas
    // de esta forma solo tendriamos que cambiarlo aqui
    
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

       return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
    
        }))
    }catch(e){
        throw new Error('Error searching movies')
    }
    

}