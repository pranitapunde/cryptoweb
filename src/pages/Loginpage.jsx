import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Loginpage = () => {
    return (
        <div className='Loginpage'>
            <div className="loginbox">
                <div className='login-Heading'>
                   <h5> LOGIN</h5>
                </div>

               <Box className="formSection">
               <TextField id="filled-basic" label="Email" variant="filled" sx={{width:"90%"}}  />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    sx={{width:"90%"}}
                 />
                <Button variant="contained">Login</Button>
                </Box>
                
                
            </div>


        </div>
    )
}

export default Loginpage

