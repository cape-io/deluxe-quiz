import React, { PropTypes } from 'react'
import classNames from 'classnames'

function Question({ text, options, active }) {
  return (
    <li className="question">
      {text}
    </li>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
}
Question.defaultProps = {}

export default Question
