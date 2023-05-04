import React from 'react';



export const Button = ({label, handleClick, bgcolor=''}) => {
  const buttonStyle = {
    margin: '10px 0',
    width: "100px",
    height: "30px",
    // backgroundColor: "#3ddf87"  
    backgroundColor: bgcolor  
  };

  
  return(
  <button
    // className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
)};

