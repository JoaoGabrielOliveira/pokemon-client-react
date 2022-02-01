import React, { useState } from 'react';
import CarouselNews from './CarouselNews';


export default () => {

  return (<div className="New">
        <div className="TN">
            <strong>News</strong>
              <p style={{fontSize:"20px"}}> Todas as informações irão te direcionar ao site.</p>
        </div>

        <CarouselNews />
    </div>
  );
};