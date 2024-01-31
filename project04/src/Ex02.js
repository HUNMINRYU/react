import React from 'react'
import menu from "./menu.json"
import MenuItem from './components/Ex02MenuItem'
import './style/Ex02.css'

const Ex02 = () => {

  console.log('menu: ', menu.list)

  return (
    <div className='container'>
      {menu.list.map(item => <MenuItem key={item.name} name={item.name} price={item.price} content={item.content} imgSrc={item.imgSrc} />)}
    </div>
  )
}

export default Ex02