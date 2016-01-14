import React, { PropTypes } from 'react'

function Footer({ currentYear, contact, copyright }) {
  const { email, phone, web, name, address } = contact

  const copyText = `${currentYear} ${copyright}`

  return (
    <footer className="loading">
      <div className="contact">
        <div className="email">{email}</div>
        <phone>{phone}</phone>
        <div className="web">{web}</div>
      </div>
      <div className="credits">
        <div className="name">{name}</div>
        <address className="address">{address}</address>
      </div>
      <p className="copyright">&copy; {copyText}</p>
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
