import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchCoinCard from '../components/SearchCoinCard'
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from 'react-redux';
import { SearchCoinData } from '../features/coins/coinSlice';

const Search = () => {
  const { searchCoin, isLoading, isSuccess, isError } = useSelector(
    (state) => state.coins
  );

  // const dispatch = useDispatch();

  // useEffect(()=> {

  //   dispatch(SearchCoinData())

  // },[])

  if (isError) {
    return <Typography color="error">Something Went Wrong !!</Typography>;
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "30rem",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
        className="searchCoinBg"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!searchCoin) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "30rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }


  return (
    <div className='allcoins'>

      <div className='allcoinheading'>
        <h2> SEARCHICONS </h2>
      </div>


      <Grid container sx={{ marginTop: "10px", paddingLeft: "55px" }} spacing={2}>

        {
          searchCoin.map((sCoin) => <SearchCoinCard key={sCoin.id} sCoin={sCoin} />)
        }
      </Grid>


    </div>
  )
}

export default Search
