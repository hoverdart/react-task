import React from 'react'
import Button from './Button'

const credit = (props) => {

  return (
    <div>
      <Button btn="Check Console for The Office Stuff" onClick={props.fetchCreditCard}></Button>
    </div>
  )
}

export default credit
