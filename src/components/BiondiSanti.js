import React from 'react'
// import { Link } from 'react-router-dom'

import NavBar from './NavBar'


const BiondiSanti = () => {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container red">
          <h1 className="title">Biondi Santi</h1>
          <h2 className="subtitleis">Location:Bolgheri, Italy </h2>
          <h2 className="web"> <a href="http://www.biondisanti.com/Eng/home_en.php"  target="_blank" rel="noreferrer noopener"> Visit Official Website</a></h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image-wine">
                <img src="https://cdn11.bigcommerce.com/s-4revryn/images/stencil/2048x2048/products/3851/5612/biondisanti-brunello2011_1__26300.1517184448.jpg?c=2" alt='Ornellaia' />
              </figure>
            </div>

            <div className="column">
              <h4 className="tasting"><strong>Tasting Notes:</strong></h4>
              <p> Biondi Santi's Brunello has an intense ruby ​​colour. The nose is pervaded by complex, intense aromas, characterized by notes of dried rose, tobacco and fine spices. On the palate the taste is harmonious, warm; good structure, with tannins and acidity in perfect balance, persistent, and savoury. The fundamental characteristic of Biondi Santi's Brunello is longevity: it can age from 20 to 40 years. We suggest serving it at a temperature of 18-20 °C, taking care to uncork the bottle at least a few hours before serving, and drain it a little. </p>
              <img className='map'  src="https://ubriaco.files.wordpress.com/2011/02/chianti-map.jpg" />
              <hr />
            </div>
          </div>

        </div>
      </section>
    </div>


  )
}


export default BiondiSanti
