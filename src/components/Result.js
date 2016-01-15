import React, { PropTypes } from 'react'
import map from 'lodash/map'
function Result({ lead, header, points, score, resultBox }) {
  const { scoreTxt, submit } = resultBox
  return (
    <div>
      <div className="score-top">
        <div className="score-text">{scoreTxt}</div>
        <div>
          <div className="score-box">{score}</div>
          <div>
            <p><strong>{lead[0]}</strong> {lead[1]}</p>
            <p>{resultBox.lead[0]} <strong>{resultBox.lead[1]}</strong></p>
          </div>
        </div>
      </div>
      <div className="score-bottom">
        <h2>{header}</h2>
        <ul>
          {
            map(points, (point, index) => <li key={index}>{point}</li>)
          }
        </ul>
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
