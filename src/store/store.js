import {decorate, observable, computed, action} from 'mobx';

export class PokemonStore {
    pokemons = ['fuck']
    test = 'This is a test'
    setPokemons(pokemonsList) {
        this.pokemons = pokemonsList
    }
}

decorate(PokemonStore, {
    pokemons: observable,
    test: observable,
    setPokemons: action
});

export default PokemonStore;