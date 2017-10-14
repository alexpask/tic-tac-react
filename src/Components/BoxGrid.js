import React, {Component} from 'react';
import Box from "./Box";

export default class BoxGrid extends Component {
    static defaultProps = {
        onBoxClick: null,
        gameState: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''
        }
    }

    render() {
        return (<div className="gird">
                <div className="row-one">
                    <Box id="one"   boxId="one"   onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.one}/>
                    <Box id="two"   boxId="two"   onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.two}/>
                    <Box id="three" boxId="three" onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.three}/>
                </div>
                <div className="row-one">
                    <Box id="four"  boxId="four"  onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.four}/>
                    <Box id="five"  boxId="five"  onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.five}/>
                    <Box id="six"   boxId="six"   onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.six}/>
                </div>
                <div className="row-one">
                    <Box id="seven" boxId="seven" onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.seven}/>
                    <Box id="eight" boxId="eight" onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.eight}/>
                    <Box id="nine"  boxId="nine"  onBoxClick={this.props.onBoxClick} symbol={this.props.gameState.nine}/>
                </div>
            </div>);
    }
}