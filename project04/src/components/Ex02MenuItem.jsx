import React from 'react'


const Ex02MenuItem = ({name, price, content, imgSrc}) => {
  return (
    <div className='borad-item'>
      <img src={imgSrc} width='200px' className='board-img'/>
      <p className='board-name'>
        <span>{name}</span>{" "}
        <span>{price}</span>
      </p>
      <p className='board-content'>{content}</p>
    </div>
  )
}

export default Ex02MenuItem