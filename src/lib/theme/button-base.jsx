import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

const Button = (props) => {
  return <button className={props.className}>{props.children}</button>;
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  className: theme.base
};

export default Button;
