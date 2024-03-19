import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { LiaTelegram } from "react-icons/lia";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GiGamepadCross } from "react-icons/gi";
import cryptoimg from "../assets/image/cdc_logo.svg"


const FooterSection = () => {
  return (
    <div className='FooterSection'>

      <div className='SocialmediaIcons'>
        <div className=' gmail-com'>
          <img src={cryptoimg} alt="" />

        </div>

        <div className="socialmediaIcons">

          <div className='si'> <CiFacebook /></div>
          <div className='si'><CiInstagram /></div>
          <div className='si' ><LiaTelegram /></div>
          <div className='si'><FaThreads /></div>
          <div className='si'><FaXTwitter /></div>
          <div className='si'><GiGamepadCross /></div>
        </div>
      </div>


      <div className="listItem">
        <div className="listlast">
          <ul className='ulline'>
            <li>  <h5>Features</h5></li>
            <li className='sml'> busy and all</li>
            <li className='sml'>  crypto Earn</li>
            <li className='sml'> on-chain Staking</li>
            <li className='sml'> crypto.com pay</li>
            <li className='sml'>pay for Business</li>
            <li className='sml'> Margin Trading</li>
            <li className='sml'> Derivatives Trading</li>
            <li className='sml'> Supercharger</li>
            <li className='sml'>Trading Arena</li>
          </ul>

          <ul className='ulline'>
            <li > <h5>Learn</h5></li>
            <li className='sml'> university</li>
            <li className='sml'> Research & Analysis</li>
            <li className='sml'> Glossary</li>
            <li className='sml'> Bitcoin</li>
            <li className='sml'> What is Ethereum</li>
            <li className='sml'> What is Blockchsin?</li>
            <li className='sml'> How to buy Bitcoin</li>
            <li className='sml'> How to buy Ethereum </li>
            <li className='sml'> What is crypto?</li>
          </ul>
          <ul className='ulline'>
            <li> <h5>Prices</h5></li>
            <li className='sml'> crypto Prices </li>
            <li className='sml'> Bitcoin Price</li>
            <li className='sml'> Ethereum Price</li>
            <li className='sml'> Site Widgets</li>
            <li> <h5>Newss</h5></li>
            <li className='sml'> Whats Trending </li>
            <li className='sml'> Market Updates</li>
            <li className='sml'> Product News</li>
            <li className='sml'> Company News</li>
          </ul>
          <ul className='ulline'>
            <li> <h5>Company</h5></li>
            <li className='sml'> About </li>
            <li className='sml'> Partners</li>
            <li className='sml'>Security</li>
            <li className='sml'> Proof of Reserves</li>
            <li className='sml'> climate</li>
            <li className='sml'> Capital</li>
            <li className='sml'> Affillate</li>
            <li className='sml'> Careers</li>

          </ul>

        </div>

      </div>

      <div className='unerlinecryptofooter'> 
      <div className='underlinehr'>
        <hr />
      </div>
      </div>

      <div className='mindFoterSection'>
        <div className='caption'>
          <p className='peragrap'> The purpose of this website is solely to display information regarding the products and services available on the <br /> Crypto.com App. It is not intended to offer access to any of such products and services. You may obtain access to <br /> such products and services on the Crypto.com App.</p>
          <p className='peragrap'> Please note that the availability of the products and services on the Crypto.com App is subject to jurisdictional  <br />limitations. Crypto.com may not offer certain products, features and/or services on the Crypto.com App in certain <br /> jurisdictions due to potential or actual regulatory restrictions.</p>
          

        </div>

      </div>
      <div className='unerlinecryptofooter'> 
      <div className='underlinehr'>
        <hr />
      </div>
      </div>
      

      <div className='lastlineofFooter'>
     
        <div className="leftside">
          <p id='ppp'> Copyright © 2018 - 2024 Crypto.com. All rights reserved.</p>

        </div>
        <div className='rightside'> 
        <p id='ppp'>privacy Notice  |
        Status | Cookie Preferences</p>
    
        </div>

      </div>






    </div>
  )
}

export default FooterSection
