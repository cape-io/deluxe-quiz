import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../redux/actions'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

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
    const { children, db } = this.props
    const { intro, lead, logo, title } = db
    const header = {
      intro,
      logo,
      title,
      lead,
    }
    const { questions, options, submit } = db
    const main = {
      questions,
      options,
      submit,
    }
    const { contact, copyright, currentYear } = db
    const footer = {
      currentYear,
      contact,
      copyright,
    }
    return (
      <div className="container">
        { this.renderErrorMessage() }
        <Header {...header} />
        <Main {...main} />
        <Footer {...footer} />
        { children }
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
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    db: state.db,
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
})(App)
