import React from 'react';
import { shallow } from 'enzyme';
import styles from './cool-widget.css';
import CoolWidget from './cool-widget';

it('spread object works', () => {
  let wrapper;
  const props = {
    subjectType: 'workspace',
    isEditing: false,
    closeEdit: () => {},
    startEdit: () => {},
    handleDelete: () => {},
    handleSave: () => {},
    handleCheckboxToggle: () => {},
    label: 'my label',
    className: 'klass',
  };
  wrapper = shallow(<CoolWidget {...props} />);
  expect(wrapper.find('label').contains('my label')).toBeTruthy();
})


describe('#CoolWidget', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CoolWidget label="Hello" />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders label text', () => {
    expect(wrapper.find('label').contains('Hello')).toBeTruthy();
  });

  it('uses container class if no className', () => {
    expect(wrapper.hasClass(styles.container)).toEqual(true);
  });

  it('uses className if provided', () => {
    wrapper = shallow(<CoolWidget className='yoyo' label="Hey" />);
    expect(wrapper.hasClass('yoyo')).toEqual(true);
  });

  it('uses label class', () => {
    expect(wrapper.find('label').hasClass(styles.label)).toEqual(true);
  });
});


