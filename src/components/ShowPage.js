import React from 'react'
// import { Link } from 'react-router-dom'

import NavBar from './NavBar'


const ShowPage = () => {
  return (
    <div>
    <NavBar />
    <section className="section">
      <div className="container red">
        <h1 className="title">Tignanello</h1>
        <h2 className="subtitleis">Location: Florence, Italy </h2>
        <h2 className="web"> <a href="https://www.antinori.it/it/"  target="_blank" rel="noreferrer noopener"> Visit Official Website</a></h2>
        <hr />

        <div className="columns">
          <div className="column">
            <figure className="image-wine">
              <img src="https://www.garyswine.com/images/sites/garyswine/labels/marchesi-antinori-antinori-tignanello_1.jpg" alt='Tignanello' />
            </figure>
          </div>

          <div className="column">
            <h4 className="tasting"><strong>Tasting Notes:</strong></h4>
            <p> Tignanello was the first Sangiovese to be aged in barriques, the first contemporary red wine blended with untraditional varieties (specifically Cabernet) and one of the first red wines in the Chianti Classico region that didn’t use white grapes. Tignanello is a milestone. It’s produced with a selection of Sangiovese, Cabernet Sauvignon and Cabernet Franc. </p>
            <img className='map'  src="https://ubriaco.files.wordpress.com/2011/02/chianti-map.jpg" />
            <hr />
          </div>
        </div>

      </div>
    </section>
    </div>


  )
}


export default ShowPage
