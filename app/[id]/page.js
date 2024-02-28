'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({params}) => {
  const {id} = params;
const [user, setusers] = useState("");

  const getUserinfo = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    setusers(data.name);
    console.log(data.name);
    
  }

  useEffect(() =>{
    getUserinfo()
  },[])

  return (
    <div> {user}</div>
  )
}

export default page