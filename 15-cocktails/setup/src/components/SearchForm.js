import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')
  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  };
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktails} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
