import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var fname = 'Joseph'
    var [fname,setFname] = useState("Joseph")
    const changeName = ()=>{
      console.log("Clicked") 
       setFname("Class")
    }
   return (
    
    <div style={{paddingTop:"80px"}}>
       <Typography variant="h4">Welcome {fname}</Typography>
       <Button variant = "contained" onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics