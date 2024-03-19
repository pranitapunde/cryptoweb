import React, { useEffect } from 'react'
import MoreDetails from '../components/moreDetails'
import { useDispatch, useSelector } from 'react-redux'
import { MoreDetailCoinData } from '../features/coins/coinSlice';
import { useParams } from 'react-router-dom';


const More = () => {

  const {coin , isLoading , isError, isSuccess} = useSelector(state => state.coins)

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(()=>{
    dispatch(MoreDetailCoinData(params.id));
  },[])
  return (

    <div className='container-more'>
      <div className='MoreCardbox'>
        <MoreDetails coin={coin}/>
      </div>

    </div>
  )
}

export default More
