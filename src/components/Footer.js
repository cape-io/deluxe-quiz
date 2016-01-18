import React, { PropTypes } from 'react'

import Contact from './Contact'

function Footer({ currentYear, contact, copyright }) {
  const { email, phone, web, name, address } = contact

  const copyText = `${currentYear} ${copyright}`

  return (
    <footer className="footer">
      <div className="container">
        <Contact email={email} phone={phone} web={web} />
        <div className="credits">
          <div className="name">{name}</div>
          <address className="address">{address}</address>
        </div>
        <div className="copyright">&copy; {copyText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  contact: PropTypes.object.isRequired,
  copyright: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
}
Footer.defaultProps = {}

export default Footer
