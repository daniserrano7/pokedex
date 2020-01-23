import {decorate, observable, computed, action} from 'mobx';

class PokemonStore {
    pokemons = []
    gen = 'gen-1'
    version = 'yellow'
    types = []
    type = ''
    lang = 'es'
    dropupPanel = false
    get getPokemons() {
        return this.pokemons.filter(pokemon => pokemon.types.find(type => type.id === this.type || this.type === ''))
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
    toggleDropupPanel: action,
    filterByType: action,
    getPokemons: computed,
    setType: action
});

export default PokemonStore;