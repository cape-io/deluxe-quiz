import React, { PropTypes } from 'react'

import Icon from '../Icon'

function SubmitButtons({ showReset, icon, text, resetForm, handleSubmit }) {
  const resetText = 'Reset'
  return (
    <div className="form-group">
      <div className="col-sm-offset-7 col-sm-5">
        <button className="btn btn-success" onClick={handleSubmit}>
          { icon && <Icon symbol={ icon || 'check' } hidden /> }
          { ' ' }
          { text || 'Submit' }
        </button>
        {
          showReset && resetForm &&
          <button className="btn btn-warning" onClick={resetForm} style={{ marginLeft: 15 }}>
            { icon && <Icon symbol="remove" hidden /> }
            { ' ' }
            { resetText }
          </button>
        }
      </div>
    </div>
  )
}

SubmitButtons.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  showReset: PropTypes.bool.isRequired,
  resetForm: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
}
SubmitButtons.defaultProps = {
  showReset: false,
}
export default SubmitButtons
