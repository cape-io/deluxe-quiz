import React, { PropTypes } from 'react'

// Basic suggestion button.
function Main({ message }) {
  return (
    <h2 className="loading">
      { message }
    </h2>
  )
}

Main.propTypes = {
  message: PropTypes.string.isRequired,
}
Main.defaultProps = {
  message: 'Loading...',
}
export default Main
