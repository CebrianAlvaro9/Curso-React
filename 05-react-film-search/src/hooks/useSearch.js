import { useEffect, useState,useRef } from 'react'

//funcion que actualiza el estado de la busqueda en el caso de que no haya erorres
export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
        // si el primer input vacio no muestra errores 

      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }
  
      if (search === '') {
        setError('you can not search and empty film')
        return
      }
  
      if (search.match(/^\d+$/)) {
        setError('you can not search only by numbers')
        return
      }
  
      if (search.length < 3) {
        setError('you need at least 3 characters')
        return
      }
  
      setError(null)
    }, [search])
  
    return { search, updateSearch, error }
  }