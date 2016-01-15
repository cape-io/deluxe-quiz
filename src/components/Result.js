import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Contact from './Contact'

function Result({ contact, lead, header, points, score, resultBox }) {
  const { scoreTxt, submit } = resultBox
  return (
    <div id="results-overlay">
      <div id="result-box">
        <div className="score-top">
          <div className="score-text">{scoreTxt}</div>
          <div>
            <div className="score-box">{score}</div>
            <div className="score-words">
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
          <div className="action">
            <div className="action-box">
              <label>{submit.label}</label>
              <button>{submit.button}</button>
            </div>
            <Contact {...contact} />
          </div>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  contact: PropTypes.object.isRequired,
  lead: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  score: PropTypes.string.isRequired,
  resultBox: PropTypes.object.isRequired,
}
Result.defaultProps = {}
export default Result
