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

        console.log(this.props.store.dropupPanel)
    }

    componentWillReceiveProps(nextProps) {
    }

    closeModal = () => {
        this.props.parentCallback(false)
    }

    selectOption = (option) => {
        this.props.store.setType(option.id);
        this.closeModal();
    }

    render() {
        return (
            <div className={`dropup-panel-modal ${this.props.visible && 'show-modal'}`} onClick={this.closeModal}>
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