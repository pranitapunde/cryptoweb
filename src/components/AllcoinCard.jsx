import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const AllcoinCard = ({allCoin}) => {
    return (

        <Grid item lg={3} md={6} sm={12}>

            <Card className='allcard' sx={{ 
            display : "flex" , 
            alignItems : "center" , 
            justifyContent : "center" , 
            flexDirection : "column",
            
            height: {
                xs: 300, 
                sm: 600,
                md: 900,
                lg: 300,
                xl: 300,
            },
            width: {
                xs: 175,
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

                    <Typography gutterBottom variant="h5" component="div">
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
