import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

export default function PalmaresAdmin () {

    const [palmaresData, setPalmaresData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/palmares")
            .then((res) => {
            setPalmaresData(res.data);
          console.log(res.data);
        });
      }, []);

      return(
          <div className="card-admin-palmares">
              <form>
                  <h1>Modifications Palmares</h1>
                  {palmaresData ?
                  <div>
                      <table className="admin-table">
                          <thead>
                              <th>Compétition</th>
                              <th>Années</th>
                          </thead>
                          {palmaresData.map((item, index) =>
                          <tr>
                              <td>
                                  <input type="text" defaultValue={item.competition}/>
                              </td>
                              <td>
                                  <input type="text" defaultValue={item.years}/>
                              </td>
                          </tr>
                          )}
                      </table>
                  </div>
                  : "" }
                  <button type="submit" className="admin-button-form">Modifier</button>
              </form>
              <form>
                  <h1>Ajout Palmares</h1>
                  <table className="admin-table">
                      <thead>
                          <th>Compétition</th>
                          <th>Année</th>
                      </thead>
                      <tr>
                          <td>
                              <input type="text" />
                          </td>
                          <td>
                              <input type="text" />
                          </td>
                      </tr>
                  </table>
                  <button type="submit" className="admin-button-form">Ajouter</button>
              </form>
          </div>
      )
    }
