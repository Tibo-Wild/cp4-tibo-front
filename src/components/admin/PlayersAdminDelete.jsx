import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

export default function PlayersAdminDelete () {

    const [playersData, setPlayersData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/players")
            .then((res) => {
            setPlayersData(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="card-admin-player">
        <h1>Suppression de joueur</h1>
        <div className="card-admin-player">
        {playersData.map((item, index) => 
            <div className="card-player">
                <img src={item.picture_all} alt="" className="admin-picture-player"/>
                <p>{item.name}</p>
                <button className="admin-button-form">Supprimer</button>
            </div>
        )}
        </div>
        </div>
    )
}