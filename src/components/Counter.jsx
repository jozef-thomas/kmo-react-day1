import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount] = useState(0)

    const incBtn = ()=>{
    console.log("Inc Clicked")
    setCount(count+1)
    }

    const decBtn = ()=>{
     console.log("Dec Clicked")
     setCount(count-1)
    }

  return (
    <div style={{paddingTop:"80px"}}>
        <Typography>Counter Value : {count} </Typography>
        <Button variant='contained' color='success' onClick={incBtn}>+</Button> &nbsp;
        <Button variant='contained' color='error' onClick={decBtn}>-</Button>
    </div>
  )
}

export default Counter