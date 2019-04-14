import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Counter from './counter';
import { useState, useEffect } from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';

xdescribe('#react-testing-library sanity test', () => {
  afterEach(cleanup);

  function MyCounter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
      document.body.style.background = count == 0 ? 'red' : 'green';
    }, [count]);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  // https://github.com/kentcdodds/react-testing-library/issues/215
  // Unlike componentDidMount and componentDidUpdate, the function
  // passed to useEffect fires after layout and paint, during a deferred
  // event. This makes it suitable for the many common side effects, like
  // setting up subscriptions and event handlers, because most types of
  // work shouldn’t block the browser from updating the screen.
  xit("useEffect ain't called", () => {
    let button;
    const el = document.createElement("div");
    document.body.appendChild(el);

    ReactDOM.render(<MyCounter />, el);
    button = document.getElementsByTagName('button')[0];
    expect(document.body.style.background).toEqual('red');
    button.click();
    expect(document.body.style.background).toEqual('green');
  });

  it('fireEvent triggers useEffect calls', () => {
    const {
      container: {firstChild: buttonNode},
    } = render(<MyCounter />)

    expect(document.body.style.background).toEqual('red');

    // According to: https://github.com/kentcdodds/react-testing-library/blob/1d00c79408a77a88c620d214da4465369c1a51ad/src/index.js#L99
    // react-testing-library's version of fireEvent will call
    // dom-testing-library's version of fireEvent wrapped inside
    // an "act" call so that after all event callbacks have been
    // been called, the resulting useEffect callbacks will also
    // be called.
    fireEvent.click(buttonNode)
    expect(document.body.style.background).toEqual('green');
    expect(buttonNode.textContent).toEqual('1');
  });
});

describe('#Counter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('sets button to Click Me', () => {
    expect(wrapper.find('button').text()).toEqual('Click Me');
    expect(wrapper.find('p').text()).toEqual('You clicked 0 times');
  });

  it('increments count', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('You clicked 1 times');
  });

  it('sets background color', () => {
    mount(<Counter />);
    expect(document.body.style.background).toEqual('lightgreen');
  });
});

// See https://testing-library.com/docs/react-testing-library/api
describe('#Counter with react-testing-library', () => {

  afterEach(cleanup);

  it('background starts as lightgreen', () => {
    render(<Counter />)
    expect(document.body.style.background).toEqual('lightgreen');
  });

  it('sets background color to hotpink on 5th click', () => {
    const { getByTestId } = render(<Counter />)
    Array(4).fill().forEach(() => {
      fireEvent.click(getByTestId('btn'))
      expect(document.body.style.background).toEqual('lightgreen');
    });

    // 5th click
    fireEvent.click(getByTestId('btn'))
    expect(getByTestId('count').textContent).toEqual('You clicked 5 times');
    expect(document.body.style.background).toEqual('hotpink');
  });

  it('sets background color to hotpink on 10th click', () => {
    const { getByTestId } = render(<Counter />)
    Array(10).fill().forEach(() => {
      fireEvent.click(getByTestId('btn'))
    });

    expect(getByTestId('count').textContent).toEqual('You clicked 10 times');
    expect(document.body.style.background).toEqual('hotpink');
  });
});

