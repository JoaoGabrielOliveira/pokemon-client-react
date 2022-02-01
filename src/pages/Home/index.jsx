import React from 'react';
import './index.css'

import NavBar from '../../components/NavBar';
import HistorySection from "./components/HistorySection";
import PokedexSection from "./components/PokedexSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default props =>
<div className="App" >
    <NavBar style={{margin:"-16px", maxHeight:'150px'}} text />
    
    <main>
        <HistorySection/>
        <PokedexSection/>
        <NewsSection />
        <Footer/>
    </main>
</div>