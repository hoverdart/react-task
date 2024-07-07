import PropTypes from 'prop-types' //Setting the prop to be a string, boolean, int, float, etc.
import Button from'./Button'
import React from 'react'


 const Header = (props) => {
  return (
    <div>
    <header style={headerStyle}>
      <h1>Task Tracker of {props.title}</h1> 
      <Button btn={props.otherTitle} tcolor="white" onClick={props.onShow}></Button>
      <Button btn={props.btnTitle} tcolor="white" onClick={props.onAdd}/> 
    </header>
    <small className='text-dark text-muted'>This is UI-Based, and created entirely with React!</small>  
    </div>
  )
}

Header.defaultProps = { //If no "prop" is specified, use "awesomeness."
    title : 'Awesomeness',
}

Header.propTypes = {
    title: PropTypes.string  //With this, if the "title" shown isn't a string, it'll still render but itll display an error. 
    //If you add a ".isRequired" after the ".string" it will default to the defaultProps, and if that isn't specified, it won't render and you will get an error. 

}
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
}

export default  Header
 