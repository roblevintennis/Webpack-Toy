import React from 'react';
import PropTypes from 'prop-types';
import styles from './cool-widget.css';

export default function CoolWidget({ label, className }) {
  return (
    <div className={className}>
      <label className={styles.label}>
        {label}
        <input />
      </label>
    </div>
  );
}

CoolWidget.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CoolWidget.defaultProps = {
  className: styles.container
};
