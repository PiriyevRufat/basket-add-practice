import React, { useContext, useEffect } from 'react'
const CardItem = ({item}) => {
  return (
    <div class="card" style={{width: "18rem"}}>
        <img src={item.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <p class="card-text">{item.title}</p>
        <p class="card-text">{item.name}</p>
        <h5 class="card-title">${item.price}</h5>
        <button className='btn btn-primary'>Add to basket</button>
        </div>
    </div>
  )
}

export default CardItem;