import React, { PropTypes } from 'react'
import classnames from 'classnames'

function Question({ text, options, active }) {
  return (
    <li className={classnames('question', { active })}>
      {text}
    </li>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
}
Question.defaultProps = {
  active: false,
}

export default Question
