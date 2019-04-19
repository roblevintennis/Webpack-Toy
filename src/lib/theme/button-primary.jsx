import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

const PrimaryButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

PrimaryButton.defaultProps = {
  className: theme.primary
};

export default PrimaryButton;
