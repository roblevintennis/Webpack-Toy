import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button-base.jsx';

describe('#Button renders', () => {
  it('correctly', () => {
    const tree = renderer
      .create(<Button>Yo Gabba Gabba</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
