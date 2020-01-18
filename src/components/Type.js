import React, {Component} from 'react';
import '../styles/Type.scss';

class Type extends Component {
    constructor(props) {
        super(props);

        const typeSchema = require('../data/types_schema.json');

        this.state = {
            type: typeSchema[props.type],
            style: {
                backgroundColor: typeSchema[props.type].color
            }
        }
    }

    render() {
        return (
            <span className="type" style={this.state.style}>
                {this.state.type.es.toUpperCase()}
            </span>
        )
    }
}

export default Type;