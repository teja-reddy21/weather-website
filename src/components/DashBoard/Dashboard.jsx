import React from 'react'
import './dashboard.css'
import SunCloudy from "../../assets/sun-cloudy.png"
import Rain from "../../assets/rain.png"
import PartlySunny from "../../assets/partly-sunny.png"
import SunWindy from "../../assets/sun-windy.png"
import Compass from "../../assets/compass.png"
import Drops from "../../assets/drops.png"
import Ultraviolet from "../../assets/ultraviolet.png"
export const Dashboard = () => {
  return (
   <section className='dashboard-section'>
    <div className='home'>
    <div className='feed-1'>
        <div className='feeds'>
            <img src={SunCloudy} alt=''/>
            <div>
                <div>
                    <span>Kadapa, India</span>
                    <span>Partly Cloudy</span>
                </div>
                <div>
                    <span>28<sup>o</sup></span>
                </div>
            </div>

        </div>
       <div className='feed'>
        <div>
          <div>
            <img src={PartlySunny} alt=''/>
            <span>14<sup>o</sup></span>
          </div>
          <div>
            <span>Saturday</span>
            <span>Sunny</span>
          </div>
          </div>
          <div>
          <div>
            <img src={SunWindy} alt=''/>
            <span>16<sup>o</sup></span>
          </div>
          <div>
            <span>Sunday</span>
            <span>Windy</span>
          </div>
          </div>
       </div>
    </div>
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="all-highlights">
        <div>
          <div>
            <img src={Compass} alt=''/>
            <div>
              <span>Feel Like</span>
              <span>Normal</span>
            </div>
          </div>
          <div>
            <span>7<sup>o</sup></span>
          </div>
        </div>
      </div>
    </div>
    </div>
   </section>
  )
}
