import React, { PropTypes } from 'react'

function Header({ logo, title, intro, lead }) {
  return (
    <header>
      <div className="bar">
        <img src={logo.src} className="logo" alt={logo.alt} title={logo.alt} />
        <h1>{title}</h1>
      </div>
      <div className="lead">
        <p className="intro">{intro}</p>
        <p className="lead">{lead}</p>
      </div>
    </header>
  )
}

Header.propTypes = {
  alt: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Header.defaultProps = {}
export default Header
