import React, {Component} from 'react';
import '../styles/App.scss';
import PokemonList from './PokemonList';
import Pokemon from './Pokemon';
import InfoPanel from './InfoPanel';
import Card from './Card';
import Store from '../store/store';

const headerLogo = require('../img/logo_transparent.svg');
//const pokedexHeader2 = require('../img/dibujo-recto.svg');
const yellowArrow = require('../img/yellow-arrow.svg');
//const pokemonsFullList = require('../data/pokemons.json');

class App extends Component {
  constructor(props) {
    super(props);

    const store = new Store();
    this.state = {
      pokemons: store.pokemons
    }

    console.log(this.state.pokemons);
  }

  addPokemon = () => {
    this.state.pokemons.push('Charizard');
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <img src={headerLogo} alt="pokedex-header"/>
          {/* <div className="header-fake-panel"></div> */}
        </div>
        <div className="body">
          <div className="search-panel">
            <button className="left-arrow-button" onClick={this.toggleInfoPanel}>
              <img src={yellowArrow} alt="left-panel-arrow"/>
            </button>
          </div>
          <div className="main">
          <button onClick={this.addPokemon}>Add pokemon!</button>
            <PokemonList store={this.state.pokemons}/>
          </div>
          <div className="right-border"></div>
        </div>
        <div className="bottom-border"></div>
      </div>
    )
  }
}

export default App;
