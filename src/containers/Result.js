import { connect } from 'react-redux'
import Result from '../components/Result'
import find from 'lodash/find'

// Result box.

function mapStateToProps(state) {
  const {
    db: { scores, resultBox, options, questions },
    quiz: { score },
  } = state
  // Find the correct info based on the score vaue.
  const props = find(scores, (info) => info.min <= score)
  // Highest score.
  const highScore = options[0].value * questions.length
  const scoreStr = ((score / highScore) * 100).toString() + '%'
  return { ...props, resultBox, score: scoreStr }
}
// const mapDispatchToProps = {}

export default connect(mapStateToProps)(Result)
