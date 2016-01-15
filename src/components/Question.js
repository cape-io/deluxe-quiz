import React, { PropTypes } from 'react'
import classnames from 'classnames'

import InputRadios from './Form/InputRadios'

function Question({ field, text, options, active }) {
  return (
    <li className={classnames('question', 'list-group-item', { active })}>
      <label htmlFor={field.name} className="col-sm-9">
        { text }
      </label>
      <InputRadios field={field} options={options} />
    </li>
  )
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
}
Question.defaultProps = {
  active: false,
}

export default Question
