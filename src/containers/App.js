import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../redux/actions'

import Header from '../components/Header'
import Quiz from './Quiz'
import Footer from '../components/Footer'
import Result from './Result'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(err) {
    this.props.resetErrorMessage()
    err.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#" onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, db, showResult } = this.props
    const { intro, lead, logo, title } = db
    const header = {
      intro,
      logo,
      title,
      lead,
    }

    const { author, contact, copyright, currentYear, learnMore } = db
    const footer = {
      author,
      currentYear,
      contact,
      copyright,
      learnMore,
    }
    return (
      <div>
        <div className="container fixfooter">
          { this.renderErrorMessage() }
          <Header {...header} />
          <Quiz />
          { showResult && <Result /> }
          { children }
          <div className="push"></div>
        </div>
        <Footer {...footer} />
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node,
  db: PropTypes.object.isRequired,
  showResult: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    db: state.db,
    showResult: state.quiz.showResult,
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
})(App)
