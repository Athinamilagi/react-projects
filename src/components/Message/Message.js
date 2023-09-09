import { Card, CardContent, Typography } from '@mui/material'
import React, { forwardRef }  from 'react'
import './Message.css'

const Message = forwardRef(({message,username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`msg ${isUser && 'msg__user'}`}>
            <Card className={isUser ?'msg__userCard' : 'msg__guestCard'}>
                <CardContent>
                    <Typography variant='h5'component='h2' >
                    { !isUser && `${message.username || " Unknown "}:`}  {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message