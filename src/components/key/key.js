import React from "react";
import PropTypes from "prop-types";

function Key({value, onClickHandler}){

  return (
    <button onClick={onClickHandler} value={value}>
      {value}
      </button>
  )
}

Key.propTypes = {
  value: PropTypes.string
}

export default Key;