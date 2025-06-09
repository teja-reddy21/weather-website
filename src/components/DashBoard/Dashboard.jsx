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
         <div>
          <div>
            <img src={SunCloudy} alt=''/>
            <div>
              <span>Cloudy</span>
              <span>Heavy</span>
            </div>
          </div>
          <div>
            <span>18<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={Rain} alt=''/>
            <div>
              <span>Rain</span>
              <span>Normal</span>
            </div>
          </div>
          <div>
            <span>2<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={Drops} alt=''/>
            <div>
              <span>Humidity</span>
              <span>Heavy</span>
            </div>
          </div>
          <div>
            <span>65<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={Ultraviolet} alt=''/>
            <div>
              <span>Ultraviolet</span>
              <span>heavy</span>
            </div>
          </div>
          <div>
            <span>7<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={PartlySunny} alt=''/>
            <div>
              <span>Cloudy</span>
              <span>Normal</span>
            </div>
          </div>
          <div>
            <span>26<sup>km/h</sup></span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='cities'>
      <h2>Other Cities</h2>
      <div className='all-cities'>
        <div>
          <div>
            <img src={SunCloudy} alt=''/>
            <div>
              <span>Manchester</span>
              <span>Cloudy, High: 11 Low: 18</span>
            </div>
          </div>
          <div>
            <span>7<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={Rain} alt=''/>
            <div>
              <span>Manchester</span>
              <span>Cloudy, High: 11 Low: 18</span>
            </div>
          </div>
          <div>
            <span>19<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={SunCloudy} alt=''/>
            <div>
              <span>Manchester</span>
              <span>Cloudy, High: 11 Low: 18</span>
            </div>
          </div>
          <div>
            <span>30<sup>o</sup></span>
          </div>
        </div>
         <div>
          <div>
            <img src={SunCloudy} alt=''/>
            <div>
              <span>Manchester</span>
              <span>Cloudy, High: 11 Low: 18</span>
            </div>
          </div>
          <div>
            <span>15<sup>o</sup></span>
          </div>
        </div>
        <button>
          <span>See More</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
   </section>
  )
}
