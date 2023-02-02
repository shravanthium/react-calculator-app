import React from "react";
import PropTypes from "prop-types";

function Display({value}){
  return (
    <span>{value}</span>
  )
}

Display.propTypes = {
  value: PropTypes.string
}
export default Display;