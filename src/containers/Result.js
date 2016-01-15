import { connect } from 'react-redux'
import Result from '../components/Result'

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
const mapDispatchToProps = {
  onSubmit: handleSubmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
