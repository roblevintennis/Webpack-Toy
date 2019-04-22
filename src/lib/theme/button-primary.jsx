import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import Button from './button-base.jsx';

const PrimaryButton = (props) => {
  return <Button className={props.className}>{props.children}</Button>;
}

PrimaryButton.defaultProps = {
  className: theme.primary
};

export default PrimaryButton;
