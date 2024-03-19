import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import More from './pages/More'
import AllCoins from './pages/AllCoins'
import SearchContainer from './pages/SearchContainer'
import Loginpage from './pages/Loginpage'
import AboutPage from './pages/AboutPage'



const App = () => {
  return (
    <>
    <Router>

    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/more/:id' element={<More/>}/>
      <Route path='/allcoins'element={<AllCoins/>}/>
      <Route path='/searchContainer'element={<SearchContainer/>}/>
      <Route path='/Loginpage'element={<Loginpage/>}/>
      <Route path='/Aboutpage'element={<AboutPage/>}/>

      
    </Routes>

    </Router>

    </>

  )
}

export default App


