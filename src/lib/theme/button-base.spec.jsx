import React from 'react';
import theme from './theme.css';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './button-base.jsx';

describe('#Button defaults', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button>hi</Button>);
  });

  it('className', () => {
    expect(wrapper.hasClass(theme.base)).toEqual(true);
  });
  it('contains children', () => {
    expect(wrapper.contains('hi')).toBe(true);
  });
});

describe('#Button props', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button className="foo">bar</Button>);
  });

  it('className', () => {
    expect(wrapper.hasClass('foo')).toEqual(true);
  });
  it('contains children', () => {
    expect(wrapper.contains('bar')).toBe(true);
  });
});
