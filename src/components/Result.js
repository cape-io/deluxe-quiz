import React, { PropTypes } from 'react'

function Header({ lead, header, points }) {
  return (
    <div>

    </div>
  )
}

Header.propTypes = {
  intro: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Header.defaultProps = {}
export default Header
