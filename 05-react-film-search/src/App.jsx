import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import './App.css'
import { Movies } from './components/Movies'

import { useMovie } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {

  
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovie({ search, sort })


  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  /// funcion que retrasa la optencion de arrays obtenidos de la appi por 300 mili para prevenir fallos
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  // Al hacer  submit obtienes las peliculas
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  //inidca si esta ordenado o no

  const handleSort = () => {
    setSort(!sort)
  }

  //recoge cada cambio en el input y los va guardando como nueva busqueda cada vez 
// aparte llama a la funcion debuncedGetmovies para pasarle los nuevos parametros del search
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <div className="page">

        <header><h1>Film search</h1>
          <div>
            <form className='form'  onSubmit={handleSubmit}>
              <label style={{ margin: '2%' }} htmlFor="">Search your favourites films</label>
              <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, matrix...' />
              <input type='checkbox' onChange={handleSort} checked={sort} />
              <button type='submit'>Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </header>
        <main>
          {
            loading ? <p>Cargando...</p>:   <Movies movies={movies} />
          }
       
        </main>
      </div >
    </>
  )
}

export default App
