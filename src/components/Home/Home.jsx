import React from 'react';
import './Home.css';
import Wins from '../../assets/first-team-hero-2021.jpeg';
import Nike from '../../assets/asset_6.png';
import Accor from '../../assets/asset_7.png';
import Qatar from '../../assets/asset_8.png';
import Ooredoo from '../../assets/asset_9.png';
import QNB from '../../assets/asset_10.png';
import Rwanda from '../../assets/asset_11.png';
import Renault from '../../assets/asset_12.png';
import Deliveroo from '../../assets/asset_13.png';
import QatarAirways from '../../assets/asset_14.png';
import Orange from '../../assets/asset_15.png';
import Bein from '../../assets/asset_16.png';
import Nivea from '../../assets/asset_17.png';
import EASports from '../../assets/asset_18.png';
import Supercell from '../../assets/asset_19.png';


export default function Home() {
    return (
        <div className="container-home">
            <img src={Wins} alt="Logo du club" className="bg-home"/>
            <div className="banner-sponsor">
                <div className="main-sponsor">
                    <img src={Nike} alt="Nike" />
                    <img src={Accor} alt="Accor" />
                </div>
                <div className="secondary-sponsor">
                    <img src={Qatar} alt="Qatar" />
                    <img src={Ooredoo} alt="Ooredoo" />
                    <img src={QNB} alt="QNB" />
                    <img src={Rwanda} alt="Rwanda" />
                    <img src={Renault} alt="Renault" />
                    <img src={Deliveroo} alt="Deliveroo" />
                    <img src={QatarAirways} alt="QatarAirways" />
                    <img src={Orange} alt="Orange" />
                    <img src={Bein} alt="Bein" />
                    <img src={Nivea} alt="Nivea" />
                    <img src={EASports} alt="EASports" />
                    <img src={Supercell} alt="Supercell" />
                </div>
            </div>
        </div>
    )
}