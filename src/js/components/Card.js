import React from 'react';
import '../../styles/Card.scss';
import Type from './Type';

const Card = ({pokemon: {id, name, types}, gen, version,}) => {
    const getSprite = (e = null) => {
        
        let sprite;
        let version_sprites = ['red', 'blue'].includes(version) ? 'red-blue' : version;
        if (e === null || e.type === 'mouseleave' || gen === 'gen-1') {
            sprite = require(`../../data/sprites/${gen}/main-sprites/${version_sprites}/${id}.png`);
        } else {
            sprite = require(`../../data/sprites/${gen}/main-sprites/${version_sprites}/animated/${id}.gif`);
        }

        return sprite;
    }
    return (
        <div className="card"
            onMouseOver={getSprite} 
            onMouseLeave={getSprite}
        >
            <div className="card-body">
                <img src={getSprite()} alt={name}/>
                <div className="card-body-info">
                    <div className="card-body-types">
                        {types.map(type => <Type key={type.name} type={type}/>)}
                    </div>
                    <div className="card-body-number">
                        <span>{`N. ${('00' + id.toString()).slice(-3. -0)}`}</span>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span>
                    {`${name.toUpperCase()}`}
                </span>
            </div>
        </div>
    )
}

export default Card;