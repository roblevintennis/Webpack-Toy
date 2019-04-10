import React from 'react';
import { shallow } from 'enzyme';
import styles from './cool-widget.css';
import CoolWidget from './cool-widget';

describe('#CoolWidget', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CoolWidget>Hello</CoolWidget>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders children', () => {
    expect(wrapper.find('label').contains('Hello')).toBeTruthy();
  });

  it('uses container class if no className', () => {
    expect(wrapper.hasClass(styles.container)).toEqual(true);
  });

  it('uses className if provided', () => {
    wrapper = shallow(<CoolWidget className='yoyo'>Hey</CoolWidget>);
    expect(wrapper.hasClass('yoyo')).toEqual(true);
  });

  it('uses label class', () => {
    expect(wrapper.find('label').hasClass(styles.label)).toEqual(true);
  });
});


