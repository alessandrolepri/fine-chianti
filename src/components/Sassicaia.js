import React from 'react'
// import { Link } from 'react-router-dom'

import NavBar from './NavBar'


const Sassicaia = () => {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container red">
          <h1 className="title">Sassicaia</h1>
          <h2 className="subtitleis">Location:Bolgheri, Italy </h2>
          <h2 className="web"> <a href="http://www.tenutasanguido.com/"  target="_blank" rel="noreferrer noopener"> Visit Official Website</a></h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image-wine">
                <img src="https://cdn.shopify.com/s/files/1/1511/7584/products/sassicaia.jpg?v=1528716836" alt='Sassicaia' />
              </figure>
            </div>

            <div className="column">
              <h4 className="tasting"><strong>Tasting Notes:</strong></h4>
              <p> Sassicaia has a textural elegance and intensity more akin to Bordeaux than Bolgheri. Well-delineated aromas of graphite and blackberry, cedar, rosemary and baked earth waft confidently from the glass. The palate is highly structured, with an aristocratic reserve and style – not showy but beautifully tailored and powerful. An array of dark fruits, herbs and spices are currently penned in by layers of dusky tannins and a lively vein of juicy acidity that draw the nascent flavours out to a fresh, balanced, gravelly finish. Like the best Médoc-classed growths from 2016, this compelling wine should be forgotten for at least a decade, ideally two, but I look forward to being around when the first bottles are brought back into the light. </p>
              <img className='map'  src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2018/01/Bolgheri-wineries.jpg" />
              <hr />
            </div>
          </div>

        </div>
      </section>
    </div>


  )
}


export default Sassicaia
