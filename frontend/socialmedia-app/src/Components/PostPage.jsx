import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const PostPage = () => {

  const [data,setdata]=useState([])
  const BaseUrl =process.env.REACT_APP_URL;
  const headers={
    "Authorization":`Bearer ${localStorage.getItem("token")}`,
    "Content-Type":"application/json"
   }
  const getdata=()=>{
    axios.get(`${BaseUrl}/posts`,{headers})
    .then((res)=>{
      console.log(res)
      setdata(res.data.msg)
    }).catch((err)=>{
      console.log(err)
    })
  }
// this is Delete part //
  const handledelte=(id)=>{
    axios.delete(`${BaseUrl}/posts/delete/${id}`,{headers})
    .then((res)=>{
      console.log(res)
      setdata(res.data.msg)
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div>
        {(data.length>0 && data) ? data.map((el)=>{
      return   <div key={el._id}>
            <p>{el.title}</p>
            <p>{el.body}</p>
            <p>{el.device}</p>
            <button onClick={()=>handledelte(el._id)}>Delete</button>
            <button>Update</button>
          </div>

        }):<h1>data is not Fatch</h1>}

    </div>
  )
}
