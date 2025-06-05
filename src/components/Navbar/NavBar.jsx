import React from 'react'
import './navbar.css'
import logo from "../../assets/logo.png"
function NavBar() {
  return (
   <section className='nav-sidebar'>
    <nav>
    <img src={logo} alt=''/>
    <ul>
        <li>
            <ion-icon name="home-outline"></ion-icon>
            <span>Home</span>
        </li>
        <li>
            <ion-icon name="newspaper-outline"></ion-icon>
            <span>Blogs</span>
        </li>
        <li>
            <ion-icon name="locate-outline"></ion-icon>
            <span>Map</span>
        </li>
        <li>
            <ion-icon name="camera-outline"></ion-icon>
                <span>Photos</span>
        </li>
        <li>
            <ion-icon name="videocam-outline"></ion-icon>
            <span>Videos</span>
        </li>
        <li>
            <ion-icon name="call-outline"></ion-icon>
            <span>Phone</span>
        </li>
        <li className="logout-item">
            <ion-icon name="exit-outline"></ion-icon>
            <span>Logout</span>
        </li>
    </ul>
    </nav>
   </section>
   )
}

export default NavBar