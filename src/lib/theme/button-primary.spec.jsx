import React from 'react';
import theme from './theme.css';
import { shallow } from 'enzyme';
import ButtonPrimary from './button-primary.jsx';

describe('#ButtonPrimary defaults', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ButtonPrimary>hi</ButtonPrimary>);
  });

  it('className', () => {
    expect(wrapper.hasClass(theme.primary)).toEqual(true);
  });
});
