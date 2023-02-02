import React from 'react';
import PropTypes from 'prop-types';
import './key.css';

function Key({ value, onClickHandler }) {
  return (
    <span>
      <button onClick={onClickHandler} value={value}>
        {value}
      </button>
    </span>
  );
}

Key.propTypes = {
  value: PropTypes.string,
};

export default Key;
