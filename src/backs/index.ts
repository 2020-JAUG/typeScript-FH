import { getPokemn } from "../generics/getPoke";



getPokemn(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(err => console.log(err))
    .finally(() => console.log('Fin de getPokemon'));