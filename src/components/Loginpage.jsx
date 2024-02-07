
import { TextField, Typography } from '@mui/material'
import React from 'react'

const Loginpage = () => {
  return (
    <div>
        <h1>Login Page</h1>
     <input type="text" placeholder='Username' /> <br /><br />
     <input type="password" placeholder='Password' /> <br /><br />
     <button>Log In</button>
     <br /><br /><br /><br /><br />
     <Typography variant='h4'>Login Page</Typography> <br />
     <TextField variant='outlined' label='Username'/>
     
    </div>
  )
}

export default Loginpage