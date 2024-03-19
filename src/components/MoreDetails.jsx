import React from 'react'

const moreDetails = ({coin}) => {
    return (

        <div className='cardM'>
            <div className='imgmore'>
               <img src={coin.image?.large} alt="noimg"/>
            </div>
            <div className='nametitle'>
                <h5>{coin.name}</h5>
                <p> {coin.symbol}</p>
            </div>
            <div className='price'>
                <div className='doller'>
                    <h6>Current price[USD]  ${coin.market_data?.current_price?.usd}</h6>
                </div>
                <div className='rupees'>
                    <h6>Current price[INR]${coin.market_data?.current_price?.inr}</h6>
                </div>

            </div>

            <div className='discription'>
                <p>{coin.description?.en}</p>
            </div>

           

        </div>




    )
}

export default moreDetails
