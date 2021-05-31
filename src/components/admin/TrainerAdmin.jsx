import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

export default function TrainerAdmin () {

const [trainerData, setTrainerData] = useState([{name:""}]); 

useEffect(() => {
    axios
        .get("http://localhost:8000/trainer")
        .then((res) => {
        setTrainerData(res.data);
      console.log(res.data);
    });
  }, []);

console.log(trainerData)

    return (
            <div className="card-admin-trainer">
                <form>
                <h1>Modification de l'entraineur</h1>
                    <label htmlFor="trainer-name">Nom de l'entraineur : </label>
                    <input 
                        type="text"
                        defaultValue={trainerData[0].name}
                    />

                    <br />

                    <label htmlFor="nationality">Nationality : </label>
                    <img src={trainerData[0].nationality} alt="" className="admin-trainer-nationality" />
                    <input type="file" />
                    <br />

                    <div className="div-admin-picture-trainer">
                        <div className="sub-div-admin-picture-trainer">
                            <label htmlFor="picture">Photo principale : </label>
                            <img src={trainerData[0].picture} alt="" className="picture-admin-form"/>
                            <br />
                            <input type="file" />
                        </div>
                        <div className="sub-div-admin-picture-trainer">
                            <label htmlFor="picture">Photo secondaire : </label>
                            <img src={trainerData[0].picture2} alt="" className="picture2-admin-form"/>
                            <br />
                            <input type="file" />
                        </div>
                    </div>

                    <br />

                    <label htmlFor="trainer-birthday"> Naissance : </label>
                    <input 
                        type="text"
                        defaultValue={trainerData[0].birthday}
                    />

                    <br />
                    
                    <label htmlFor="trainer-arrival">Date d'arrivée au club : </label>
                    <input 
                        type="text"
                        defaultValue={trainerData[0].arrival}
                    />

                    <br />

                    <label htmlFor="trainer-adjoin">Adjoint : </label>
                    <input 
                        type="text"
                        defaultValue={trainerData[0].adjoin}
                    />

                    <br />
                    
                    <label htmlFor="trainer-training-club">Clubs entrainés : </label>
                    <textarea name="trainer-training-club" id="trainer-training-club" cols="30" rows="5" defaultValue={trainerData[0].training_club}></textarea>

                    <br />
                    
                    <label htmlFor="trainer-player-club">Carrière de joueur en club : </label>
                    <textarea name="trainer-player-club" id="trainer-player-club" cols="30" rows="5" defaultValue={trainerData[0].player_club}></textarea>
                    
                    <br />

                    <label htmlFor="trainer-bio">Bio : </label>
                    <textarea name="trainer-bio" id="trainer-bio" cols="30" rows="15" defaultValue={trainerData[0].bio}></textarea>
                    
                    <br />
                    <button type="submit">Modifier</button>
                </form>
                
        </div>
    )
}