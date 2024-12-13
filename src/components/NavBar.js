import React from 'react'
import "./main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div >
     <div className="header" >
        <img style={{width: 40}} src="https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1921053424.1724733699&semt=ais_hybrid" alt="" />
        <div className="head-center">
        <FontAwesomeIcon  className='Icons' icon={ faEnvelope} style={{color: "white " , fontSize:25 }} />
        <FontAwesomeIcon className='Icons' icon= {faBell} style={{color: "white" , fontSize:25 }} />
        <FontAwesomeIcon  className='Icons'icon={faTv}  style={{color: "white" , fontSize: 25 }} />
        </div>
        <div className="sreach-bar" style={{display: "flex", columnGap : "10px" , alignContent : "center"}}>
            <input type="search" name="" id="" placeholder='   Search' />
            <img style={{width: 40}} src="https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1921053424.1724733699&semt=ais_hybrid" alt="" />
        </div>
     </div>
    </div>
  )
}

export default NavBar



