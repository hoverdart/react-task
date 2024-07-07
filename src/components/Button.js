//import React from 'react' used for classes
import PropTypes from 'prop-types'
import React from 'react'


//impt = import proptypes from prop-types, 
//rafc = basic function, rafce is good too
const Button = (props) => {
  return (
    <button className="btn btn-sm btn-dark" style={{color: props.tcolor}} onClick={props.onClick}>{props.btn}</button>
  )
}

Button.defaultProps = {
    btn : 'Click Here!',
    tcolor : 'white'
}

Button.propTypes = {
    btn : PropTypes.string,
    tcolor : PropTypes.string,
    onClick : PropTypes.func
}
export default Button
