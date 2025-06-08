import React from 'react'
import './header.css'
function Header() {
  return (
   <section className='header-section'>
    <div>
        <ion-icon name="location-outline"></ion-icon>
        <span>Kadapa, india</span>
    </div>
    <div>
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" placeholder="search here"/>
    </div>
    <div>
        <ion-icon name="calendar-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
    </div>
   </section>
  )
}

export default Header