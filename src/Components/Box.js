import React, {Component} from 'react';
import '../box.css';

export default class Box extends Component {
    static defaultProps = {
        symbol: null,
        boxId: null,
        onBoxClick: null
    }

    onClicked() {
        this.props.onBoxClick(this.props.boxId);
    }

    render() {
        return <div className="box" onClick={this.onClicked.bind(this)}>
            <p>{this.props.symbol}</p>
        </div>
    }
}