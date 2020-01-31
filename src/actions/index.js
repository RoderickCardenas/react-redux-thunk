// import API file from API.js
import API from '../API'

export const getPokemon = () => {
  return dispatch =>
    API.getFirstTwentyPokemon()
      .then(resp => resp.json())
      .then(pokemon =>
        dispatch({ type: 'GET_POKEMON', payload: pokemon.results })
      )
}
