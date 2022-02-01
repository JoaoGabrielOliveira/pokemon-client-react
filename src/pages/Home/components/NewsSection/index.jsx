import React, { useState } from 'react';
import CarouselNews from './CarouselNews';


export default () => {

  return (
  <div id="newsSection">
    <header className="title">
      <h2 style={{fontSize:"100%"}}><strong>News</strong></h2>
      <p  style={{fontSize:"50%", letterSpacing:'1px'}}> Todas as informações irão te direcionar ao site.</p>
    </header>

    <CarouselNews />
  </div>
  );
};