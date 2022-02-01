import React from 'react';
import './index.css'

import NavBar from '../../components/NavBar';
import Pokedex from'./components/lateral';

export default props =>
<div className="App" >
    
   <div >
   
    <h1>   <NavBar style={{margin:"-16px", maxHeight:'150px'}} text /></h1> 
    <div>
        <Pokedex/>
    </div> 

    </div>   
 
 
</div>