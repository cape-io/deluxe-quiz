import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'
import Submit from './Form/SubmitButtons'
import ReduxFormProps from './Form/ReduxFormProps'

function Quiz({ questions, options, submit, fields, ...rest }) {
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
      <Submit text={submit} />
      <ReduxFormProps {...rest} />
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
