import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from'axios';

export default function PlayerCard(props) {

    const playerId = props.match.params.id;
    const [player, setPlayer] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/players/card/${playerId}`)
            .then((res) => {
            setPlayer(res.data);
            console.log(res.data);
        });
        }, [playerId]);

    return (
        <div className="container-card">
            {player ? (
                <div className="player-card">
                    <div className="player-card-picture">
                        <img src={player[0].picture_face} alt="Portrait"/>
                    </div>
                    <div>
                        <div className="player-name-flag">
                            <h2>{player[0].name}</h2>
                            <img src={player[0].nationality} alt="Flag"/>
                        </div>
                        <h3>{player[0].post}</h3>
                        <p>Naissance : {player[0].bithday}</p>
                        <p>Date d'arrivée au club : {player[0].arrival}</p>
                        <h3>Saison 2020/2021</h3>
                        <div>
                            <p>Nombre de match joué : {player[0].match} </p>
                            <p>Buts marqués : {player[0].but}</p>
                        </div>
                        <h3>Bio : </h3>
                        <p>{player[0].bio}</p>
                    </div>
                </div>
            ) : <p>Loading</p>}
        </div>
    )
}