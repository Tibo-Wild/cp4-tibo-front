import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Match.css';


export default function Next() {

    const [nextData, setNextData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/next")
            .then((res) => {
            setNextData(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="container-next">
            <h2 className="title-match">Prochains matchs</h2>
            {nextData.map((item, index) =>
            <div className="container-next-matchs" key={index}>
                <p>{item.competition}</p>
                <p className="date-match">{item.date}</p>
                <img src={item.logo_dom} alt="Logo équipe domicile"/>
                <p>{item.dom}</p>
                <p>{item.score_dom}</p>
                <p className="score-separation">-</p>
                <p>{item.score_ext}</p>
                <p>{item.ext}</p>
                <img src={item.logo_ext} alt="Logo équipe extérieur"/>
            </div>
             )}
        </div>
    )
}