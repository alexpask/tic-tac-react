import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import Box from '../Components/Box';

describe('<Box/>', () => {
   it('Renders without exploding', () => {
       expect(shallow(<Box/>));
   });

   it('Render blank on default', () => {
       const wrapper = shallow(<Box/>);
       expect(wrapper.contains(<p></p>)).toBeTruthy();
   });

   it('Renders a X when passed in via prop', () => {
       const wrapper = shallow(<Box symbol="X" />);
       expect(wrapper.contains(<p>X</p>)).toBeTruthy();
   });

   it('Clicking on Box causes box Clicked to fire', () => {
       const boxClick = sinon.spy();
       const wrapper = shallow(<Box boxId="1" onBoxClick={boxClick}/>);
       wrapper.find('.box').simulate('click');
       expect(boxClick).toHaveProperty('callCount', 1);
   });
})
