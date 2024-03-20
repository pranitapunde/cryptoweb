import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard2 = ({ coin }) => {
    const { name, price_btc, symbol, large } = coin.item

    return (

        <Grid item lg={4} md={6} sm={12} xl={4} xs={6}>
            <Card className='coinss' sx={{
                height: {
                    xs: 300, 
                    sm: 600,
                    md: 900,
                    lg: 300,
                    xl: 300,

                }, width: {
                    xs: 175,
                    sm: 600,
                    md: 900,
                    lg: 300,
                    xl: 450,
                }, backgroundColor: "light"
            }} >
                <CardMedia
                    sx={{ height: 150, width: 140, marginTop: 2 }}
                    image={large}
                    title="green iguana"
                />
                <CardContent className='lizard'>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {symbol}
                    </Typography>

                    <Typography>
                        {price_btc}
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="small">
                        <Link to={`/more/${coin.item.id}`}>  Learn More</Link>
                    </Button>
                </CardActions>


            </Card>



        </Grid>










    )
}

export default CoinCard2
