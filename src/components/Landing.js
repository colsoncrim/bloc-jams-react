import React from 'react';

const Landing = () => (
  <main className="landing">

    <section className="hero-image-wrapper">
        <h1 className="hero-title"></h1>
    </section>

        <img id="headphones" src="/assets/images/adult-back-view-blur-374876.jpg" width="100%" alt="Black album"/>

 <section className="selling-points">
   <div className="point-1">
     <img id="musicalNote" src="/assets/images/icons8-musical-notes-90.png"/>
     <h2 className="point-title">Choose your music</h2>
     <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
  </div>
  <div className="point-2">
    <img id="radioWaves" src="/assets/images/icons8-radio-waves-90.png"/>
    <h2 className="point-title">Unlimited, streaming, ad-free</h2>
    <p className="point-description">No arbitrary limits. No distractions.</p>
  </div>
  <div className="point-3">
    <img id="iphone" src="/assets/images/icons8-iphone-x-filled-100.png"/>
    <h2 className="point-title">Mobile enabled</h2>
    <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
  </div>
 </section>
</main>
);

export default Landing;
