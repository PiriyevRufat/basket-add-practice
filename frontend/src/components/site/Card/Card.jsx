import React from 'react'
import { useContext } from "react";
import MainContext from '../../../context/context'; 
import CardItem from '../CardItem/CardItem';

const Card = () => {
  const {data}=useContext(MainContext)
  return (
    <div style={{display:"flex",width:"100%" ,padding:"100px 0px",flexWrap:"wrap"}}>
    {
        data.map((item,index)=>(
                <CardItem key={index} item={item}/>
        ))
    }
    </div>
  )
}

export default Card
