import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from'axios';

export default function TrainerCard(props) {

    const playerId = props.match.params.id;
    const [player, setPlayer] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/trainer/card/${playerId}`)
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
                        <img src={player[0].picture2} alt="Portrait"/>
                    </div>
                    <div className="details-trainer">
                        <div className="player-name-flag">
                            <h2>{player[0].name}</h2>
                            <img src={player[0].nationality} alt="Flag"/>
                            <h3>Adjoint : {player[0].adjoin}</h3>
                        </div>
                        <h3>{player[0].post}</h3>
                        <p>Naissance : {player[0].birthday}</p>
                        <p>Date d'arrivée au club : {player[0].arrival}</p>
                        <p>Clubs entrainés : <br/> {player[0].training_club} </p>
                        <p>Carrière de joueur en club : <br/> {player[0].player_club}</p>
                        <p>Bio : <br /> {player[0].bio}</p>
                    </div>
                </div>
            ) : <p>Loading</p>}
        </div>
    )
}