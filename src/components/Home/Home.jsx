import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import PhotoPalmares from '../../assets/palmares-home.jpeg';
import clubIdentitePassion from '../../assets/club-identite-passion.jpg';


export default function Home() {

    const [palmares, setPalmares] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/palmares")
            .then((res) => {
            setPalmares(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="container-home">
            <img src={Wins} alt="Logo du club" className="bg-home"/>
            <div>
                <p className="home-presentation">
                    P. A. R. I. S. - Cinq lettres dont l’écho résonne tout autour <br />
                    du globe. Historiquement inclassable, culturellement <br />
                    unique, la Ville Lumière rayonne aussi sur la scène <br />
                    sportive. Avec un étendard, teinté de rouge et bleu.
                </p>
                <img src={clubIdentitePassion} alt="Club identitée passion" className="img-home-club" />
                <p className="home-secondary-presentation"> 
                    Depuis 1970, la magie parisienne opère sans discontinuer à l’ouest de la capitale, au Parc des Princes. En quelques décennies, le Paris Saint-Germain est devenu à vitesse grand V une référence dans le panorama sportif français. Au cours de ses 41 premières années d’une existence florissante, le club estampillé « Made in Paris » a glané 18 trophées dont un titre européen en 1996.
                    <br /><br />
                    Devenue une référence, l’institution va alors épouser une courbe exponentielle, en 2011, avec Qatar Sports Investments à la manœuvre. Une nouvelle ère est entamée, elle se conjuguera immuablement avec succès.
                    <br /><br />
                    Les faits sont formels : depuis, Paris a imprimé son statut de ville mondiale sur tous les terrains. Et si l’élégance, le respect aussi, sont gravés dans l’ADN de la mégalopole, ces attributs transpirent désormais de ses ambassadeurs, parés de rouge et bleu. Un particularisme qui s’applique dorénavant au pluriel, dans un triptyque.
                    <br /><br />
                    Football masculin, football féminin et handball : le blason se veut aujourd’hui fédérateur et surtout moteur d’un projet XXL.
                </p>
            </div>
            <div className="home-palmares">
                <h2>Palmares du club</h2>
                <div className="div-palmares">
                    <img src={PhotoPalmares} alt="Coupe de France 2021" className="img-palmares"/>
                    <table className="home-table-palmares">
                        <thead>
                            <th>Compétitions</th>
                            <th>Années des titres</th>
                        </thead>
                        {palmares.map((item, index) =>
                        <tr>
                            <td>
                                {item.competition}
                            </td>
                            <td>
                                {item.years}
                            </td>
                        </tr>
                        )}
                    </table>
                </div>
            </div>
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