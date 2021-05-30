import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Match.css';


export default function Previous() {

    const [previousData, setPreviousData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/previous")
            .then((res) => {
            setPreviousData(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="container-previous">
            <h2 className="title-match">Scores des derniers matchs</h2>
            {previousData.map((item, index) =>
            <div className="container-previous-matchs" key={index}>
                <p>{item.competition}</p>
                <p className="date-match">{item.date}</p>
                <img src={item.logo_dom} alt="Logo équipe domicile"/>
                <p>{item.dom}</p>
                <p className="score-match">{item.score_dom}</p>
                <p className="score-separation">-</p>
                <p className="score-match">{item.score_ext}</p>
                <p>{item.ext}</p>
                <img src={item.logo_ext} alt="Logo équipe extérieur"/>
            </div>
             )}
        </div>
    )
}