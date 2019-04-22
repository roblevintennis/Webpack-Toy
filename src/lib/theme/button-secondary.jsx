import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Button from './button-base.jsx';

const SecondaryButton = (props) => {
  return <Button className={props.className}>{props.children}</Button>;
}

SecondaryButton.defaultProps = {
  className: theme.secondary
};

export default SecondaryButton;
