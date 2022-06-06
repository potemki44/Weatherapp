import React from 'react'
const Button = ({setIsCelcius, isCelcius}) => {




  return (
    <button  onClick={() => setIsCelcius(!isCelcius)} className="butt">switch  me</button>
  )
}

export default Button