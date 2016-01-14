import React, { PropTypes } from 'react'

// Basic suggestion button.
function Footer({ message }) {
  return (
    <h2 className="loading">
      { message }
    </h2>
  )
}

Footer.propTypes = {
  message: PropTypes.string.isRequired,
}
Footer.defaultProps = {
  message: 'Loading...',
}
export default Footer
