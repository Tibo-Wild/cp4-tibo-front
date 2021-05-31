import React from'react';
import './AdminContainer.css';
import scoreboard from '../../assets/scoreboard.png';
import calendar from '../../assets/calendar.png';
import soccerPlayer from '../../assets/soccer-player.png';
import soccerTrainer from '../../assets/soccer-trainer.png';
import palmares from '../../assets/palmares.png';
import { Link } from 'react-router-dom';

export default function AdminContainer () {
    return (
        <div className="title-admin-container">
            <h1>Bienvenue sur l'espace administrateur</h1>
            <div className="div-admin-card">
                <div className="admin-card">
                    <img src={soccerTrainer} alt="" />
                    <p>Entraineur</p>
                    <Link to={{ pathname: `/admin/entraineur`} }><button className="admin-button-form">Modifier</button></Link>
                </div>
                <div className="admin-card">
                    <img src={soccerPlayer} alt="" />
                    <p>Joueurs</p>
                    <div className="button-add-delete">
                        <Link to={{ pathname: `/admin/ajout-joueur`} }><button className="admin-button-form">Ajouter</button></Link>
                        <Link to={{ pathname: `/admin/suppression-joueur`} }><button className="admin-button-form">Supprimer</button></Link>
                    </div> 
                </div>
                <div className="admin-card">
                    <img src={scoreboard} alt="" />
                    <p>Derniers matchs</p>
                    <Link to={{ pathname: `/admin/derniers-matchs`} }><button className="admin-button-form">Ajouter</button></Link>
                </div>
                <div className="admin-card">
                    <img src={calendar} alt="" />
                    <p>Matchs à venir</p>
                    <Link to={{ pathname: `/admin/prochains-matchs`} }><button className="admin-button-form">Modifier</button></Link>
                </div>
                <div className="admin-card">
                    <img src={palmares} alt="" />
                    <p>Palmares</p>
                    <Link to={{ pathname: `/admin/palmares`} }><button className="admin-button-form">Modifier</button></Link>
                </div>
            </div>
        </div>
    )
}