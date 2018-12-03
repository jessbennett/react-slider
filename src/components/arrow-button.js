import React from 'react';

const ArrowButton = ({ type, onClick }) => {
  const arrowTypeSrc = (type === 'left') ?
    './assets/left-arrow.svg': 
    './assets/right-arrow.svg'

  // This is just because the arrow svgs arent perfectly aligned in the center
  // of each of the buttons. We transform them depending on which arrow type it is.
  const transformX = (type === 'left') ?
    'translateX(-1px)':
    'translateX(1px)'

  return (
    <button type="button" style={arrowBaseStyles} onClick={ () => onClick(type)}>
      <img src={arrowTypeSrc} style={{ transform: transformX }} />
    </button>
  )
}

const arrowBaseStyles = {
  background: '#DDDDDD',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default ArrowButton;