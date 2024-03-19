
import React, { useEffect } from 'react'
import CoinCard2 from './CoinCard2'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../features/coins/coinSlice'

const CoinContainer = () => {
// const dispatch = useDispatch()

 const { TrendingCoin, isLoading, isSuccess, isError } = useSelector((state) => state.coins);
//  dispatch(getCoins())
 


const dispatch = useDispatch()
useEffect(() => {
  dispatch(getCoins());
},[])


    if(isError){
        return(
            <div className="no">
            <h4 id='wrong'> something went Wrong... </h4>
        </div>
        )
    }

    if (isLoading) {
        return (
            <div className='spinner'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    // if (coins.length === 0) {
    //     return (
    //         <div className="no">
    //             <h4> No Coins Yet.. </h4>
    //         </div>
    //     )
    // }


    if(!TrendingCoin){
        return (
                    <div className="no">
                        <h4> !coin Not Found</h4>
                    </div>
                )
    }

    return (
        <div className='cardcontainer' >
            <div className='headline'>
                <h2> TOP TRENDING COINS</h2>

                <div className='line'> <hr />
                </div>

            </div>

            <Grid container sx={{ marginTop: "10px", padding: "10px", }} spacing={2}>
                {
                    TrendingCoin.map(coin => <CoinCard2 key={coin.id} coin={coin} />)
                }
            </Grid>




        </div>
    )
}

export default CoinContainer
