import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, type, name, disabled, onClick, children}) => (
  <button
    type={type || 'button'}
    disabled={disabled}
    name={name}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}