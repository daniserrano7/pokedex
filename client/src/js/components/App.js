import React, {Component} from 'react';
import '../../styles/App.scss';

// Components
import PokemonList from './PokemonList';

const headerLogo = require('../../img/logo_transparent.svg');
//const yellowArrow = require('../img/yellow-arrow.svg');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    }
  }

  toggleMenu = () => {
    this.setState(state => (
      {menu: !state.menu}
    ));
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <img src={headerLogo} alt="pokedex-header"/>
        </div>
        <div className="body">
          <div className="main">
            <PokemonList/>
          </div>
          <div className="menu-button-container">
            <button className="menu-button" onClick={this.toggleMenu}>Menu</button>
          </div>
          <div className={`menu ${this.state.menu && 'show-menu'}`}>
            <ul>
              <li>Option 1</li>
              <li>Option 1</li>
              <li>Option 1</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
