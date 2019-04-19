import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

const SecondaryButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
}

SecondaryButton.propTypes = {
  className: PropTypes.String
};

SecondaryButton.defaultProps = {
  className: theme.secondary
};

export default SecondaryButton;
