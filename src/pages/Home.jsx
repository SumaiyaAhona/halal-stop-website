import React from 'react';

function Home() {
  return (
    <>
      <section
  className="hero"
  style={{
    backgroundImage: "url('/images/burger_fries.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    padding: '0 20px',
    boxSizing: 'border-box',
  }}
>
  <div className="hero-text">
    <h2>The Halal Stop</h2>
    <p>Experience bold flavors, made with 100% halal ingredients - every bite, every time.</p>
    <a href="/menu" className="order-button">Order Now</a>
  </div>
</section>


      <section className="gallery">
        <h2>Gallery</h2>
        <div className="slider">
          <img src="images/Chicken-Shawarma.jpg" alt="Food 1" />
          <img src="images/beef-burgers.jpeg" alt="Food 2" />
          <img src="images/chairs_tables.jpg" alt="Interior 1" />
          <img src="images/ice_cream.jpeg" alt="Food 3" />
          <img src="images/counter.jpg" alt="Interior 2" />
          <img src="images/family_eating.jpg" alt="Interior 3" />
        </div>
      </section>
    </>
  );
}

export default Home;
