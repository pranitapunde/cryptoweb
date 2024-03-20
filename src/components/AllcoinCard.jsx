import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const AllcoinCard = ({allCoin}) => {
    return (

        <Grid item lg={3} md={6} sm={12} xs={4}>

            <Card className='allcard' sx={{ 
            display : "flex" , 
            alignItems : "center" , 
            justifyContent : "center" , 
            flexDirection : "column",
            
            height: {
                xs: 200, 
                sm: 600,
                md: 900,
                lg: 300,
                xl: 300,
            },
            width: {
                xs: 118,
                sm: 600,
                md: 900,
                lg: 300,
                xl: 450,
            }
            }} >
                <CardMedia
                    sx={{ height: "50%", width: "40%"}}
                    image={allCoin.image} 
                />

                <CardContent className='text' sx={{ width : "100%" , height : "50%"}}>

                    <Typography gutterBottom variant="body1" align=
                    'center' component="div">
                        {allCoin.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {allCoin.symbol}
                    </Typography>

                    <Typography>
                        {allCoin.current_price}
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="small">
                        Learn More
                    </Button>
                </CardActions>


            </Card>



        </Grid>

    )
}

export default AllcoinCard
