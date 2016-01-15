import React, { PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import map from 'lodash/map'
import Quiz from '../components/Quiz'

// import { updateMe, load as loadFormValues, formInfo } from '../../redux/modules/mixer'

// Redux connections.

function mapStateToProps(state) {
  const { db: { questions, options, submit } } = state
  const fields = map(questions, 'id')
  return {
    fields,
    form: 'quiz',
    options,
    questions,
    submit,
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm()
)(Quiz)
