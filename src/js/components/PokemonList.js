import React, {Component} from 'react';
import {observer} from 'mobx-react';
import '../../styles/PokemonList.scss';

//Components
import Card from './Card';
import DropupPanel from './DropupPanel';

//Store
import PokemonStore from '../store/PokemonStore';

//Api
import APIConfig from '../APIConfig';

const store = new PokemonStore();
const api = APIConfig();

class PokemonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'all',
            panel: false
        }
    }
    componentDidMount() {
        this.renderTypes();
        this.renderVersions();
        this.renderPokemons();
    }

    renderTypes() {
        fetch(`${api}/types?lang=${store.lang}`, 
        {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {store.types = data; console.log(data)});
    }

    renderVersions() {
        fetch(`${api}/versions?lang=${store.lang}`, 
        {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    renderPokemons() {
        fetch(`${api}/pokemons?lang=${store.lang}&version=${store.version}`, 
        {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {store.pokemons = data; console.log(data)});
    }

    togglePanel = () => {
        this.setState({panel: true});
    }

    render() {
        return (
            <div className="pokemon-list">
                <div className="pokemon-list-filter">
                    <button onClick={this.togglePanel}>Show Types</button>
                </div>
                <div className="pokemon-list-content">
                    {store.pokemons.length > 0 && store.getPokemons.map(pokemon => {
                        return (<Card 
                            key={`pokemon-${pokemon.id}`} 
                            pokemon={pokemon} 
                            gen={store.gen} 
                            version={store.version}
                        />)
                    })}
                </div>
                {<DropupPanel elements={store.types} store={store} visible={this.state.panel}/>}
            </div>
        )
    }
};

export default observer(PokemonList);