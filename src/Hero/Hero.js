import React from 'react'
import './Hero.css'

export default function hero() {
  return (
    <div className="px-4 py-5 my-5 welcome-hero text-center">
      <div className="hero-content">
        <p className="text-body-emphasis hero-first">
         HARRY POTTER
        </p>
        <p className="hero-second">
          Welcome to the world of MAGIC
        </p>
      </div>
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4">
          <a href="#movies">See Movies</a></button>
      </div>
    </div>
  </div>
  )
}
