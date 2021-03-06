import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className="section">

      <div className="container chianti">

        <h1 className="intro">Discover Top 5 Red Fine Wine from Tuscany </h1>

        <div className="wrapper">
          <Link to="/explore"><div className="bottomhome"><button> Explore </button></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
