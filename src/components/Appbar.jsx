import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
               <Typography>First App</Typography> &nbsp; &nbsp;
               <Button variant="contained" color='error'>Log In</Button> &nbsp;
               <Button variant="contained" color='success'>Sign Up</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Appbar