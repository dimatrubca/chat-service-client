import React, { useEffect, useState } from "react";

import {
    Grid,
    TextField,
    Paper,
    Container,
  } from "@material-ui/core";
  
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from "./join-chat-styles";


const JoinChat = () => {
    const classes = useStyles()

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              LiveChat
            </Typography>

            <Typography variant="body2">
                <div>
                    <TextField
                    label="username"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    />
                </div>
                <div>
                    <TextField
                    label="room"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    />
                </div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained'>Join Chat</Button>
          </CardActions>
        </React.Fragment>
      );
      

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
       >
            <Grid item xs={3}>
                <Card variant="outlined">{card}</Card>
            </Grid>  
        </Grid>
    )    
};

export {JoinChat}