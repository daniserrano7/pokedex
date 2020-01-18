import React, {Component} from 'react';
import '../styles/PokemonList.scss';
import Card from './Card';
import {observer} from 'mobx-react';
import { observable } from 'mobx';

const PokemonList = observer((props) => {
    console.log(props.store);
    //console.log(props.store.pokemonList());
    //props.store.pokemons.forEach(pokemon => console.log(pokemon));

    return (
        <div className="pokemon-list">
            <ul>
                {props.store.map((pokemon, i) => (
                    <li key={'pokemon' + i}>{pokemon}</li>
                ))}
            </ul>
        </div>
    )
});

export default PokemonList;