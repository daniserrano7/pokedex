import React, {Component} from 'react';
import '../styles/Card.scss';
import Type from './Type';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.pokemon.name.toUpperCase(),
            url: props.pokemon.url,
            id: props.pokemon.url.split('/').slice(-2, -1)[0]
        }

        this.state.sprite = require(`../img/sprites/${props.gen.gen}/main-sprites/${props.gen.version}/${this.state.id}.png`);
    }

    changeSprite = (e) => {
        if (this.props.gen.gen !== 'gen-2') {return}

        const sprite = e.type === 'mouseover' ? 
        require(`../img/sprites/gen-2/main-sprites/crystal/animated/${this.state.id}.gif`) :
        require(`../img/sprites/gen-2/main-sprites/crystal/${this.state.id}.png`);

        this.setState({sprite,});
    }

    selectPokemon = () => {
    }

    render() {
        return (
            <div className="card" 
                onMouseOver={this.changeSprite} 
                onMouseLeave={this.changeSprite}
                onClick={this.props.handler}>
                <div className="card-body">
                    <img src={this.state.sprite} alt={this.state.name}/>
                    <div className="card-body-info">
                        <div className="card-body-types">
                            {this.props.pokemon.types.map(type => <Type type={type} key={type}/>)}
                        </div>
                        <div className="card-body-number">
                            <span>{`N. ${('00' + this.state.id.toString()).slice(-3. -0)}`}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <span>
                        {`${this.state.name}`}
                    </span>
                </div>
            </div>
        )
    }
}

export default Card;