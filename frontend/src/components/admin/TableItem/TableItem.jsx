import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const TableItem = ({item}) => {
    const {data,setData}=useContext(MainContext)
    const deleteItem =(_id)=>{
        axios.delete(`http://localhost:8080/api/categories/${_id}`).then(res=>{
            setData([...data.filter(x=>x._id!=res.data._id)])
        })
    }
  return (
    <tr>
    <th scope="row">{item._id}</th>
    <td><img src={item.image} alt="" width="60px" height="60px" /></td>
    <td>{item.title}</td>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td><button className='btn btn-danger' onClick={()=>{
        deleteItem(item.id)
    }}>Delete</button></td>
  </tr>
  )
}

export default TableItem
