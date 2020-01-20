import {decorate, observable, computed, action} from 'mobx';

class PokemonStore {
    pokemons = []
    gen = 'gen-1'
    version = 'yellow'
    types = []
    type = ''
    lang = 'es'
    filterByType(typeFilter) {
        return this.pokemons.filter(pokemon => pokemon.types.find(type => type.name === 'fire'));
        //return this.pokemons[0]
    }
    get getPokemons() {
        return this.pokemons.filter(pokemon => pokemon.types.find(type => type.id === this.type || 1 === 1))
    }

    setType(typename) {
        this.type = typename;
    }
}

decorate(PokemonStore, {
    pokemons: observable,
    gen: observable,
    version: observable,
    types: observable,
    type: observable,
    lang: observable,
    filterByType: action,
    getPokemons: computed,
    setType: action
});

export default PokemonStore;