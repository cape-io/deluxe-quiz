import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Question from './Question'
import Submit from './Form/SubmitButtons'
import ReduxFormProps from './Form/ReduxFormProps'

function Quiz({ questions, options, submit, fields, handleSubmit, ...rest }) {
  return (
    <div className="main">
      <ol className="list-group">
        {
          map(questions, (question, index) => (
            <Question
              key={question.id}
              text={question.text}
              options={options}
              field={fields[question.id]}
              index={index + 1}
            />
          ))
        }
      </ol>
      <Submit text={submit} handleSubmit={handleSubmit} />
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
