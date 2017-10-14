import React from 'react';
import {shallow, mount} from 'enzyme';
import BoxGrid from '../Components/BoxGrid';
import Box from '../Components/Box';

describe('<BoxGrid/>', () => {
    it('Renders without exploding', () => {
        expect(shallow(<BoxGrid/>));
    });

    it('Renders 9 <Box /> elements', () => {
        const wrapper = shallow(<BoxGrid/>);
        expect(wrapper.find(Box)).toHaveLength(9);
    });

    it('Click on a box causes boxClick to be fired', () => {
        const boxClick = jest.fn();
        const wrapper = mount(<BoxGrid onBoxClick={boxClick}/>);
        wrapper.find('#one .box').simulate('click');
        wrapper.find('#three .box').simulate('click');
        expect(boxClick.mock.calls[0][0]).toBe('one');
        expect(boxClick.mock.calls[1][0]).toBe('three');
    });
});
