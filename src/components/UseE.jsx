import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()
     
    const changeHname = ()=>{
     setName("Home")
    }

    const changeGname = ()=>{
     setName("Gallery") 
    }

    const changeCname = ()=>{
    setName("Contact")
    }
useEffect(()=>{
    changeGname()
},[])

  return (
    <div style={{paddingTop:"80px"}}>
        <Button variant="contained" color='primary' onClick={changeHname}>Home</Button> &nbsp;
        <Button variant="contained" color='secondary' onClick={changeGname}>Gallery</Button> &nbsp;
        <Button variant="contained" color='error' onClick={changeCname}>Contact</Button>
        <Typography>Welcome to {name}</Typography>
    </div>
  )
}

export default UseE