import { Button, IconButton, InputBase, Paper, TextField, Typography } from '@mui/material'
import img from '../assets/image/coin.png'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
// import { SearchCoinData } from '../features/coins/coinSlice';
import { Link } from 'react-router-dom';
import { SearchCoinData } from '../features/coins/coinSlice';

const Home = () => {
  // const {searchCoins } = useSelector(state => state.coins)
  
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit")
    dispatch(SearchCoinData(search));
    setSearch("");
  }



  return (
    <>
      <div className='header'>
        <form className='container' onClick={handleSubmit}>
          <Typography variant='h3' textAlign={"center"} justifyContent={"center"}> <img src={img} alt="" /> </Typography>
          <Paper component="form" onSubmit={handleSubmit}
            sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', backgroundColor: "light" }}>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "black" }}
              placeholder="Search by crypto Name"
              onChange={(e) => setSearch(e.target.value)}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '2px' }} aria-label="search">
              <Link to='/searchContainer'>
                <Button> 
                  <SearchIcon />
                </Button>
              </Link>
            </IconButton>
          </Paper>

        </form>

      </div>

    </>
  )
}

export default Home
