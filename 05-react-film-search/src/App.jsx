import { useRef } from 'react'

import './App.css'
import { Movies } from './components/Movies'

import { useMovie } from './hooks/useMovies'

function App() {

  const { movies } = useMovie()
  const inputRef = useRef()

  const HandleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    alert(value)
  }

  return (
    <>
      <div className="page">

        <header><h1>Film search</h1>
          <div>
            <form className='form' onSubmit={HandleSubmit}>
              <label style={{ margin: '2%' }} htmlFor="">Search your favourites films</label>
              <input ref={inputRef} type="text" placeholder='Avengers, matrix...' />
              <button  type='submit'>Search</button>
            </form>
          </div></header>
        <main>
          <Movies movies={movies} />
        </main>

      </div >
    </>
  )
}

export default App
