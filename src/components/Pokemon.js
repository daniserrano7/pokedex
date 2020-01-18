import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pokemon">
                POKEMON
                <button onClick={this.props.handler}>Back</button>
            </div>
        )
    }
}

export default Pokemon