import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

export default function NextMatchsAdmin () {

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
        <div className="card-admin-results">
            <form>
                <h1>Modifications match à venir</h1>
                {nextData ?  
                    <div>
                        <table className="admin-table">
                            <thead>
                                <th>Compétition</th>
                                <th>Équipe domicile</th>
                                <th>Logo équipe dom.</th>
                                <th>Score dom.</th>
                                <th>Équipe extérieure</th>
                                <th>Logo équipe ext.</th>
                                <th>Score ext.</th>
                                <th>Date</th>
                            </thead>
                            {nextData.map((item, index) =>
                            <tr>
                                <td>
                                    <input type="text" defaultValue={item.competition}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={item.dom}/>
                                </td>
                                <td>
                                    <input type="file"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={item.score_dom}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={item.ext}/>
                                </td>
                                <td>
                                    <input type="file"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={item.score_ext}/>
                                </td>
                                <td>
                                    <input type="date" defaultValue={item.date}/>
                                </td>
                            </tr>
                            )}
                        </table>
                    </div>
                : "" }
                <button type="submit" className="admin-button-form">Modifier</button>
            </form>

        </div>
    )
}