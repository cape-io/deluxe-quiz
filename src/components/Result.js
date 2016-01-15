import React, { PropTypes } from 'react'

function Result({ lead, header, points }) {
  return (
    <div>

    </div>
  )
}

Result.propTypes = {
  intro: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Result.defaultProps = {}
export default Result
