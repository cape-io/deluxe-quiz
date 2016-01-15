import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import map from 'lodash/map'
import Quiz from '../components/Quiz'
import { simpleRequired } from '../utils/formValidation'

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
    validate: simpleRequired(fields),
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm()
)(Quiz)
