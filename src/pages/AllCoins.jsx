import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import AllcoinCard from '../components/AllcoinCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoins } from '../features/coins/coinSlice'
// import { getAllCoins } from '../features/coins/coinSlice'

const AllCoins = () => {

  const { allCoins, isLoading, isSuccess, isError } = useSelector(state => state.coins);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoins());
  }, [])


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
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

        </div>


    )
}

if (allCoins.length === 0){
  
    return (
        <div className="no">
            <h4> No Coins Yet.. </h4>
        </div>
    )


}

  return (
    <div className='allcoins'>

      <div className='allcoinheading'>
        <h2>Allcoins</h2>

      </div>
      

      <Grid container sx={{ marginTop: "10px" }} spacing={2}>
        {
          allCoins.map(allCoin => <AllcoinCard key={allCoin.id} allCoin={allCoin}/>)
        }
      </Grid>


    </div>
  )
}

export default AllCoins
