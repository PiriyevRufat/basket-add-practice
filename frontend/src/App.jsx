import { useEffect, useState } from 'react'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/Routes'
import axios from 'axios'

function App() {
  const router=createBrowserRouter(ROUTES)
  const[data,setData]=useState([])
  const [error,setError] = useState("")
  const [loading,setLoading] = useState("")
  const contextData={
    data,setData
  }
 useEffect(()=>{
  axios.get("http://localhost:8080/api/categories").then(res=>{
    console.log(res);
  })
 })
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App