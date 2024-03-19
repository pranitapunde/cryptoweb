import { useDispatch } from 'react-redux'
import CoinContainer from '../components/CoinContainer'
import FormSection from '../components/FormSection'
import { useEffect } from 'react'
import { getCoins } from '../features/coins/coinSlice'


const Home = () => {

//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getCoins());
//  },[])

  return (
    <>
      <FormSection />
      <CoinContainer />
  
    </>
  )
}

export default Home
