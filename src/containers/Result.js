import { connect } from 'react-redux'
import Result from '../components/Result'
import find from 'lodash/find'

// Result box.

function mapStateToProps(state) {
  const {
    db: { scores, resultBox },
    quiz: { score },
  } = state
  // Find the correct info based on the score vaue.
  const props = find(scores, (info) => info.min <= score)
  return { ...props, resultBox }
}
// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Result)
