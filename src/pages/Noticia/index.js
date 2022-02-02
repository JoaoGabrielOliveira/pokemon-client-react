import React from 'react';

import NavBar from '../../components/NavBar';
import Layout from './Layout';
import Dina from '../Home/components/Footer'

import './index.css';

export default () => (
    <>
        <NavBar image='https://cdn.bulbagarden.net/upload/thumb/1/1e/Detective_Pikachu_artwork_3.png/153px-Detective_Pikachu_artwork_3.png' text="Notícia"/>
        <Layout />
        <Dina/>

    </>
)