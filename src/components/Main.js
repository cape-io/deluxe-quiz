import React, { PropTypes } from 'react'
import map from 'lodash/collection/map'

import Question from './Question'

function Main({ questions, options, submit }) {
  return (
    <div className="main">
      <ul>
        {
          map(questions, (question, index) => (
            <Question key={index} text={question} options={options} />
          ))
        }
      </ul>
    </div>
  )
}

Main.propTypes = {
  questions: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  submit: PropTypes.array.isRequired,
}
Main.defaultProps = {}
export default Main
