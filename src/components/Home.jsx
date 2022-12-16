import React from 'react'
import './Home.css'
const Home = () => {
  const image = "https://images.prismic.io/mystique/2169f182-86e2-41ad-a527-8a79b322c6ce_IMG_2.jpg?auto=compress%2Cformat&w=1200&h=450&q=75&crop=faces&fm=webp&rect=0,0,1600,999"
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <div className='cat-sidebar'>
            <h5>Related category</h5>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Syrup</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
          </div>
          <div className='cat-sidebar'>
            <h5>Related category</h5>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Syrup</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
          </div>
          <div className='cat-sidebar'>
          <h5>Related category</h5>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Tablets</p>
          </div>
          <div className='cat-sidebar'>
            <h5>Related category</h5>
            <p>Paracetamol Tablets</p>
            <p>Paracetamol Syrup</p>

          </div>
          <div className='cat-sidebar'>
            <h5>Related category</h5>
            <p>Paracetamol Tablets</p>

          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <hr />
                  <a to="/" >Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home