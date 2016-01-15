import React, { PropTypes } from 'react'

function Contact({ email, phone, web }) {
  return (
    <div className="contact">
      <div className="email">{email}</div>
      <phone>{phone}</phone>
      <div className="web">{web}</div>
    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
}
Contact.defaultProps = {}

export default Contact