import React from 'react';
import PropTypes from 'prop-types';
import styles from './cool-widget.css';

export default function CoolWidget({ children, className }) {
  return (
    <div className={className}>
      <label className={styles.label}>
        {children}
        <input />
      </label>
    </div>
  );
}

CoolWidget.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CoolWidget.defaultProps = {
  className: styles.container
};
