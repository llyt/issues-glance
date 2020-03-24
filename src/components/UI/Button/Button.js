import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, type, name, disabled, onClick, children}) => (
  <button
    title={title}
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
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}