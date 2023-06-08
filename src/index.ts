import { Pokemon } from "./decorators/pokemon";


const charmander = new Pokemon('Charmander');


// (Pokemon.prototype.customName as any) = 'Pikachu';

// console.log(charmander);


// console.log(charmander.savePokemon(50));
// charmander.savePokemon(0);

charmander.PokeApi = new Pokemon('https://localhost:9090');
console.log(charmander);


