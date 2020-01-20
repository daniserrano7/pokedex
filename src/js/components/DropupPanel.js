import React, {Component} from 'react';
import {observer} from 'mobx-react';
import '../../styles/DropupPanel.scss';
import Type from './Type';

class DropupPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({visible: nextProps.visible});  
    }

    toggleModal = () => {
        this.setState({visible: false});
    }

    selectOption = (option) => {
        console.log(option.id);
        this.props.store.setType(option.id);
        this.toggleModal();
    }

    render() {
        return (
            <div className={`dropup-panel-modal ${this.state.visible && 'show-modal'}`} onClick={this.toggleModal}>
                <div className="dropup-panel" onClick={e => e.stopPropagation()}>
                    {this.props.elements.map(element => {
                        return (
                            <div key={element.id} onClick={() => this.selectOption(element)}>
                                <Type type={element}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default observer(DropupPanel);