import React, { Component } from 'react';
import BoxGrid from "./Components/BoxGrid";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            },
            currentPlayer: 'X',
            hasWon: false,
            hasDrawn: false
        };
    }

    changePlayer() {
        const previousPlayer = this.state.currentPlayer;
        if (previousPlayer === 'X')
            return 'O'
        else
            return 'X'
    }

    checkForWinner(first, second, third) {
        if (first === '' || second === '' || third === '')
            return false;

        if ((first === second) && (second === third))
            return true;
        else
            return false;
    }

    isThereAWinner(newGameState) {
        const board = newGameState;
        return this.checkForWinner(board.one, board.two, board.three)
            || this.checkForWinner(board.four, board.five, board.six)
            || this.checkForWinner(board.seven, board.eight, board.nine)
            || this.checkForWinner(board.one, board.four, board.seven)
            || this.checkForWinner(board.two, board.five, board.eight)
            || this.checkForWinner(board.three, board.six, board.nine)
            || this.checkForWinner(board.one, board.five, board.nine)
            || this.checkForWinner(board.three, board.five, board.seven);
    }

    isDrawn() {
        const board = this.state.gameState;
        for (let box in board) {
            if (board[box] === '')
                return false;
        }
        return true;
    }

    boxClicked(id) {
        const newGameState = this.state.gameState;
        if (newGameState[id] !== '')
            return;
        newGameState[id] = this.state.currentPlayer;
        if (this.isThereAWinner(newGameState))
            this.setState({hasWon:true});
        else if (this.isDrawn())
            this.setState({hasDrawn:true});
        else
            this.setState({gameState: newGameState, currentPlayer: this.changePlayer()});
    }

    render() {
        let content = null;
        if (this.state.hasWon)
            content = (<p id="message">Player {this.state.currentPlayer} has won</p>);
        else if (this.state.hasDrawn)
            content = (<p id="message">Match drawn</p>);
        else
            content = (<p>A simple game of tic tac toe to play against the computer. Start by choosing a square to play.</p>,
                       <BoxGrid gameState={this.state.gameState} onBoxClick={this.boxClicked.bind(this)}/>);
        return (<div className="container">
                <h2>Tic Tac Toe</h2>
                {content}
                </div>
        );
    }
}
