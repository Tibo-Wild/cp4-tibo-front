import React, { useState, useEffect } from 'react';
import './Legends.css';
import axios from'axios';
import psglegends from '../../assets/legendes-psg.jpg';

export default function Legends() {

    const [legendsData, setLegendsData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/legends")
            .then((res) => {
            setLegendsData(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="container-legends">
            <img src={psglegends} alt="Les légendes du PSG" className="bg-legend"/>
            <h2>Ils ont construit l'histoire du club</h2>
            <div>
                <div className="legends">
                    {legendsData.map((item, index) => 
                    <div className="legend-div" key={index}>
                        <img src={item.picture} alt="Portrait du joueur" className="legend-picture"/>
                        <div className="legend-name-flag">
                            <h3>{item.name}</h3>
                            <img src={item.flag} alt="Flag"/>
                        </div>
                        <p>{item.post}</p>
                        <p>{item.years}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}