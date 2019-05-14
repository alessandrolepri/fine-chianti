import React from 'react'
// import { Link } from 'react-router-dom'

import NavBar from './NavBar'


const FattoriaDelCerro = () => {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container red">
          <h1 className="title">Fattoria Del Cerro</h1>
          <h2 className="subtitleis">Location: Montepulciano, Italy </h2>
          <h2 className="web"> <a href="http://www.tenutedelcerro.it/fattoria-del-cerro"  target="_blank" rel="noreferrer noopener"> Visit Official Website</a></h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image-wine">
                <img src="https://s.tannico.it/media/catalog/product/cache/1/thumbnail/0dc2d03fe217f8c83829496872af24a0/8/0/8007555000259_01_1.jpg" alt='Fattoria del Cerro' />
              </figure>
            </div>

            <div className="column">
              <h4 className="tasting"><strong>Tasting Notes:</strong></h4>
              <p> The ample aroma profile is characterized by hints of wild black cherry, violets and mild spices. Its flavor is full and persistent soft but clearly present tannins. The relatively high acidity complements the strong overall structure of this wine. Best served in large glasses at 18°C. Excellent with roasted or grilled red meat, game and aged cheeses. </p>
              <img className='map'  src="https://ubriaco.files.wordpress.com/2011/02/chianti-map.jpg" />
              <hr />
            </div>
          </div>

        </div>
      </section>
    </div>


  )
}


export default FattoriaDelCerro
