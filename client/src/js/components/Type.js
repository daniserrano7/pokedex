import React from 'react';
import '../../styles/Type.scss';

const Type = ({type: {id, name}}) => {
    const typeSchema = require('../../data/types_schema.json');
    const style = {
        backgroundColor: typeSchema[id].color
    }

    return (
        <span className="type" style={style}>
            {name}
        </span>
    )
}

export default Type;