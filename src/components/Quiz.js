import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'

function Quiz({ questions, options, submit, fields }) {
  return (
    <div className="main">
      <ul className="list-group">
        {
          map(questions, (question) => (
            <Question
              key={question.id}
              text={question.text}
              options={options}
              field={fields[question.id]}
            />
          ))
        }
      </ul>
      <button>{submit}</button>
    </div>
  )
}

Quiz.propTypes = {
  fields: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  submit: PropTypes.string.isRequired,
}
Quiz.defaultProps = {}
export default Quiz
