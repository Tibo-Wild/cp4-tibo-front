import React from 'react';
import './Home.css';
import Accueil from '../../assets/accueil.jpg';
import Wins from '../../assets/psg-wins.jpg';


export default function Home() {
    return (
        <div className="container-home">
            <img src={Wins} alt="Logo du club" className="bg-home"/>
        </div>
    )
}