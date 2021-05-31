import React, { useState } from 'react';
import axios from 'axios';

export default function PlayersAdminAdd () {
    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    const [birthday, setBirthday] = useState("");
    const [arrival, setArrival] = useState("");
    const [match, setMatch] = useState("");
    const [but, setBut] = useState("");
    const [bio, setBio] = useState("");
    const [uploadNationality, setUploadNationality] = useState(null)

    console.log(name);
    console.log(post);
    console.log(birthday);
    console.log(arrival);
    console.log(match);
    console.log(but);
    console.log(bio);
    console.log(uploadNationality)
    /*
    console.log(uploadNationality[0].name);
    */

    const onSubmit = async () => {
        await axios.post()
    }

    return (
        <div className="card-admin-trainer">
            <form method="POST" onSubmit={onSubmit}>
                <h1>Ajouter un nouveau joueur</h1>
                <label htmlFor="">Nom :</label>
                <input type="text" name="" id="" onChange={(e)=> setName(e.target.value)} required/>
                <br />
                <label htmlFor="">Photo principale</label>
                <input type="file" onChange={(e)=>setUploadNationality(e.target.files)}/>
                <br />
                <label htmlFor="">Photo secondaire</label>
                <input type="file" />
                <br />
                <label htmlFor="">Nationality</label>
                <input type="file" />
                <br />
                <label htmlFor="">Poste :</label>
                <input type="text" name="" id="" onChange={(e)=> setPost(e.target.value)} required/>
                <br />
                <label htmlFor="">Naissance :</label>
                <input type="text" name="" id="" onChange={(e)=> setBirthday(e.target.value)} required/>
                <br />
                <label htmlFor="">Date d'arrivée au club :</label>
                <input type="text" name="" id="" onChange={(e)=> setArrival(e.target.value)} required/>
                <br />
                <label htmlFor="">Nombre de match joué :</label>
                <input type="text" name="" id="" onChange={(e)=> setMatch(e.target.value)} required/>
                <br />
                <label htmlFor="">Buts marqués :</label>
                <input type="text" name="" id="" onChange={(e)=> setBut(e.target.value)} required/>
                <br />
                <label htmlFor="">Bio :</label>
                <textarea name="" id="" cols="30" rows="10" onChange={(e)=> setBio(e.target.value)} required></textarea>
                <br />
                <button type="submit" className="admin-button-form">Ajouter</button>
            </form>
        </div>
    )
}