import React, { PropTypes } from 'react'

function Result({ lead, header, points, score, resultBox }) {
  return (
    <div>
      <div className="top">
        <div></div>
      </div>
    </div>
  )
}

Result.propTypes = {
  lead: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  score: PropTypes.string.isRequired,
  resultBox: PropTypes.object.isRequired,
}
Result.defaultProps = {}
export default Result
