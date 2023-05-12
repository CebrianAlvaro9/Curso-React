import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
//useCallback y useMemo son iguales pero callback es para funciones


export function useMovie({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    // el error no se usa pero puedes implementarlo
    // si quieres:
    const [, setError] = useState(null)
    const previousSearch = useRef(search)
  
    //no se renderiza hasta que no cambie la info del search para evitar que no para de renderizarse
    //Si le llega el search empieza a tirar peticiones a la api con esos parametros en busca de resultados
    const getMovies = useCallback(async ({ search }) => {
      if (search === previousSearch.current) return
      // search es ''
  
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        // tanto en el try como en el catch
        setLoading(false)
      }
    }, [])

    //Se utiliza para ordenar las peliculas por orden alfabetico
    // el use memo es para que no se este ejecutando todo el rato
  
    const sortedMovies = useMemo(() => {
      return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies])
  
    return { movies: sortedMovies, getMovies, loading }
  }