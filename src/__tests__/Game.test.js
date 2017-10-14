import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from '../Game';

describe('<Game/>', () => {
    it('Renders without exploding', () => {
        expect(shallow(<Game/>));
    });

    it('Calling boxed clicked changes player', () => {
       const wrapper = shallow(<Game />);
       wrapper.instance().boxClicked("one");
       expect(wrapper.state().currentPlayer).toBe("O");
    });

    it('Calling boxed clicked updates gamestate', () => {
       const wrapper = shallow(<Game />);
       wrapper.instance().boxClicked("one");
       expect(wrapper.state().gameState["one"]).toBe("X");
    });

    it('Return true if a column, row or diagonal has three of the same', () => {
       const wrapper = shallow(<Game />);
       const isWin = wrapper.instance().checkForWinner('X', 'X', 'X');
       expect(isWin).toBeTruthy();
    });

    it('Return false if a column, row or diagonal are not the same', () => {
        const wrapper = shallow(<Game />);
        const isWin = wrapper.instance().checkForWinner('X', 'O', '');
        expect(isWin).toBeFalsy();
    });

    it('Should confirm a player has won', () => {
        const gameState = {
            one: 'X',
            two: 'O',
            three: 'X',
            four: 'X',
            five: '',
            six: '',
            seven: 'X',
            eight: '',
            nine: ''
        }
        const wrapper = shallow(<Game />);
        const isAWinner = wrapper.instance().isThereAWinner(gameState)
        expect(isAWinner).toBeTruthy();
    });

    it('Should confirm a player has not won', () => {
        const gameState = {
            one: 'X',
            two: 'O',
            three: 'X',
            four: 'O',
            five: '',
            six: '',
            seven: 'X',
            eight: '',
            nine: ''
        }
        const wrapper = shallow(<Game />);
        const isAWinner = wrapper.instance().isThereAWinner(gameState)
        expect(isAWinner).toBeFalsy();
    });

    it('should not overwrite box if box already taken', () => {
        const gameState = {
            one: 'X',
            two: 'X',
            three: 'X',
            four: 'O',
            five: '',
            six: '',
            seven: 'X',
            eight: '',
            nine: ''
        };

        const wrapper = shallow(<Game />);
        wrapper.setState({currentPlayer: "O"});
        wrapper.setState({gameState: gameState});
        wrapper.instance().boxClicked("two");
        expect(wrapper.state().gameState["two"]).toBe("X");
        expect(wrapper.state().currentPlayer).toBe("O");
    });
});
