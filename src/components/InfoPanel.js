import React, {Component} from 'react';
import '../styles/InfoPanel.scss';

class InfoPanel extends Component {
    constructor(props) {
        super(props);

        console.log('Info Panel visibility:', props.visible);

        const botPosition = props.visible ? '10px' : '-100%';
        this.state = {
            style: {
                bottom: botPosition
            }
        }
    }

    render() {
        return (
            <div className="browser-panel">
                {this.props.visible}
            </div>
        )
    }
}

export default InfoPanel;