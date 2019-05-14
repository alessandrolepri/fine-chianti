import React from 'react'
// import { Link } from 'react-router-dom'

import NavBar from './NavBar'


const Ornellaia = () => {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container red">
          <h1 className="title">Ornellaia</h1>
          <h2 className="subtitleis">Location:Bolgheri, Italy </h2>
          <h2 className="web"> <a href="http://www.ornellaia.com/en/"  target="_blank" rel="noreferrer noopener"> Visit Official Website</a></h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image-wine">
                <img src="https://www.winespectrum.com/wp-content/uploads/2019/03/tenuta-dell-ornellaia-ornellaia-2009-red-1.jpg" alt='Ornellaia' />
              </figure>
            </div>

            <div className="column">
              <h4 className="tasting"><strong>Tasting Notes:</strong></h4>
              <p> The 2014 Ornellaia looks to be one of the most successful wines to come from this difficult vintage, and is a testament to the pedigree of this iconic estate. This outstanding blend of 34% Cabernet Sauvignon, 32% Merlot, 14% Cabernet Franc and 20% Petit Verdot offers seductive aromatics of black cherries and cassis woven together with spices, espresso, graphite floral and hints of loam all coming together in the glass. On the palate this displays remarkable depth with concentrated ripe fruits and beautifully polished tannins. It continues to impress with its outstanding balance and structure before ending with a long, multidimensional finish. Overall, the 2014 is a simply remarkable achievement from winemaker Axel Heinz, who has ultimately crafted an age-worthy and utterly compelling wine given the less than ideal growing season. </p>
              <img className='map'  src="https://ubriaco.files.wordpress.com/2011/02/chianti-map.jpg" />
              <hr />
            </div>
          </div>

        </div>
      </section>
    </div>


  )
}


export default Ornellaia
