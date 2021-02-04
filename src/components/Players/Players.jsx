import React, { useState, useEffect } from 'react';
import './Players.css';
import axios from'axios';


export default function Players() {
    
    const [trainerData, setTrainerData] = useState([]);
    const [playersData, setPlayersData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/players")
            .then((res) => {
            setPlayersData(res.data);
          console.log(res.data);
        });
      }, []);

      useEffect(() => {
        axios
            .get("http://localhost:8000/trainer")
            .then((res) => {
            setTrainerData(res.data);
          console.log(res.data);
        });
      }, []);

    return(
        <div className="container-players">
            <h2>Effectif du PSG - Saison 2020/2021</h2>
            <hr className="separation-line-title"/>
            <h3 className="title-player">Entraineur</h3>
            <div className="trainer">
                {trainerData.map((item, index) => 
                <div className="player-div" key={index}>
                    <img src={item.picture} className="trainer-picture"  alt="Portrait"/>
                    <div className="name-flag">
                        <p>{item.name}</p>
                        <img src={item.nationality} alt="flag"/>
                    </div>
                    
                    <p>Entraineur</p>
                    <button className="button">Voir la fiche</button>
                </div>)}
            </div>

            <hr className="separation-line"/>
            <h3 className="title-player">Joueurs</h3>
            <div className="players-list">
                {playersData.map((item, index) => 
                <div className="player-div" key={index}>
                    <img src={item.picture_all} className="player-picture" alt="Portrait"/>
                    <div className="name-flag">
                        <p>{item.name}</p>
                        <img src={item.nationality} alt="flag"/>
                    </div>
                    <p>{item.post}</p>
                    <button className="button">Voir la fiche</button>
                </div>)}
            </div>
        </div>
    )
}