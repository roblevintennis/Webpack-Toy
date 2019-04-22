import React from 'react';
import theme from './theme.css';
import { shallow } from 'enzyme';
import ButtonSecondary from './button-secondary.jsx';

describe('#ButtonSecondary defaults', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ButtonSecondary>hi</ButtonSecondary>);
  });

  it('className', () => {
    expect(wrapper.hasClass(theme.secondary)).toEqual(true);
  });
});
