import React from 'react'
import './Home.css'

export default function Home() {


  return (
    <div>
      <header>
      <nav className="sticky-nav">
          <a href="#" className="logo">UXplore</a>
          
          <div className="action-buttons">
            <div className='button'>
              <a href="#" className="round-button">Home</a>
              <a href="#" className="round-button">About Us</a>
              <a href="#" className="round-button">Explore</a>
              <a href="#" className="round-button">Contact Us</a>
            </div>
          </div>

          <div className="search-container">
          <a href="#" className="round-button1">Log In/Signup</a>
          </div>
          </nav>
          </header>

          <br></br>

          <section>
          <div className='search-container1'>
            <input type="text" placeholder="Search..." class="search-bar1" />
          </div>
        </section>

        <br></br>
        <br></br>

        <section>
        <div className='mohan'>
          <div className='slide_final'>
          <div className='slide'>
            <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/"/>
            <div id="slider">
              <figure>
                <img src="https://img.freepik.com/premium-vector/chennai-skyline-with-gray-landmarks-blue-sky-reflections_119523-274.jpg?w=1060" alt></img>
                <img src="https://img.freepik.com/premium-vector/chennai-skyline-with-gray-landmarks-blue-sky-reflections_119523-274.jpg?w=1060" alt></img>
                <img src="" alt></img>
                <img src="" alt></img>
                <img src="" alt></img>
              </figure>
            </div>
            </div>
            </div>
          </div>
        </section>
          
        <section>
        <div>
          <div className='about'>
            <h2>ABOUT US</h2>
            <div className='about-des'>
            <div className='about-back'>
              <h3>UXPLORE</h3>
              <p>"Explore the world effortlessly with our travel app—where every destination is a story waiting to be written, 
               <br></br>and every journey becomes a personalized adventure."</p>
              <p>"Embark on a journey of a lifetime with <b>Uxplore</b>, where every destination becomes a chapter in the book of your adventures.<br></br>
               Unleash the wanderer within and let your soul be your compass as you navigate through the kaleidoscope of cultures and the symphony of landscapes.<br></br>
               Let's redefine, explore, one experience at a time.<br></br>
               <br></br>
               <b>Uxplore: Your Passport to Unforgettable Journeys.</b></p>
               <br></br>
            </div>
            </div>
            </div>
          </div>
        </section>


      <section>
      <div class="section">
          <div class="scroll-container">
              <div class="card">
                  <img src="https://img.freepik.com/free-photo/small-house-built-peaceful-green-hill-high-up-mountains_181624-8241.jpg?size=626&ext=jpg&uid=R99705918&ga=GA1.1.1546804459.1701193159&semt=sph" alt="Image 1"/>
                  <div class="card-content">
                      <h2>OOTY</h2>
                      <p>QUEEN OF MOUNTAINS</p>
                  </div>
              </div>
              <div class="card">
                  <img src="https://img.freepik.com/premium-vector/chennai-skyline-with-gray-landmarks-blue-sky-reflections_119523-274.jpg?w=1060" alt="Image 2"/>
                  <div class="card-content">
                      <h2>CHENNAI</h2>
                      <p>CAPITAL OF TAMILNADU</p>
                  </div>
              </div>
              <div class="card">
                  <img src="" alt="Image 3"/>
                  <div class="card-content">
                      <h2>MADURAI</h2>
                      <p></p>
                  </div>
              </div><div class="card">
              <img src="" alt="Image 4"/>
              <div class="card-content">
                  <h2>Name 1</h2>
                  <p>Description 1</p>
              </div>
          </div>
          </div>
      </div>
      
      </section>

      <section>
          <div>
            <div className='contact-us'>
            <div className="contact-section">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us for any inquiries or assistance.</p>
          
            <div className="contact-details">
              <div className="contact-item">
                <img src="https://cdn-icons-png.flaticon.com/128/4377/4377348.png?uid=R99705918&ga=GA1.1.1546804459.1701193159" alt="Phone Icon"/>
                <p>+91 9826354181</p>
              </div>
          
              <div className="contact-item">
                <img src="https://t4.ftcdn.net/jpg/00/96/19/69/240_F_96196911_lCQzGPLokpVr5nHUX5BEaufyvfzhufzV.jpg" alt="Email Icon"/>
                <p>uxplore@gmail.com</p>
              </div>
          
              <div className="contact-item">
                <img src="https://img.freepik.com/premium-vector/pin-symbol-indicates-location-gps-map_68708-398.jpg?w=740" alt="Location Icon" />
                <p>12, Travel Street, <br></br>Coimbatore.</p>
              </div>
            </div>
          </div>
            </div>
          </div>
      </section>
    </div>
  )
}
