import React from 'react'
import './hero.css'
// import './nclogo.png'
export default function Hero() {
  return (
    <div className='main-hero'>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg heronc">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Night Canteen</h1>
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">IIT Indore</h1>
        <p className="lead">Plan your party and order your items beforehand. Order with your device in the pocket.</p>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="./nclogo.png" alt="" width="720" />
      </div>
      </div>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 heronc">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
      </div> */}
      <div className='heronc tobejustifiedtocenter'>
        <button className='order-button'>ORDER NOW</button>
      </div>
    </div>
  )
}
