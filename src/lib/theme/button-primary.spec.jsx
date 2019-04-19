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
    console.log(wrapper.html());
    expect(wrapper.hasClass(theme.primary)).toEqual(true);
  });
  it('contains children', () => {
    expect(wrapper.contains('hi')).toBe(true);
  });
});

describe('#ButtonPrimary props', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ButtonPrimary className="foo">bar</ButtonPrimary>);
  });

  it('className', () => {
    console.log(wrapper.html());
    expect(wrapper.hasClass('foo')).toEqual(true);
  });
  it('contains children', () => {
    expect(wrapper.contains('bar')).toBe(true);
  });
});
