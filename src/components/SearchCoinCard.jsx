import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const SearchCoinCard = ( {sCoin}) => {
    return (
        <Grid item lg={4} md={3} sm={12}>

            <Card className='coinss' 
            sx={{
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
                    // image='https://media.istockphoto.com/id/1270779408/vector/money.jpg?s=1024x1024&w=is&k=20&c=XXpN3gM3bnZzf9LMP4MSmCQOKoHx79ANsxsbHFJrcBI='
                    image={sCoin.large}
                    title="green iguana"
                />
                <CardContent className='lizard'>

                    <Typography gutterBottom variant="h5" component="div">
                    {sCoin.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                    {sCoin.symbol}
                    </Typography>
                    
                </CardContent>

                <CardActions>
                    <Button size="small">
                        learn more
                    </Button>
                </CardActions>


            </Card>

        </Grid>

    )
}

export default SearchCoinCard
