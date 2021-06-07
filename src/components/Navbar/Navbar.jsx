import React from 'react';
import './Navbar.css';
import logoPSG from '../../assets/logo_PSG.png';
import { Link } from 'react-router-dom';
import adminIcon from '../../assets/admin-icon.png'


export default function Navbar() {
    return (
        <div className="container-nav">
            <div className="nav-logo">
                <Link to="/"><img src={logoPSG} alt="logo"/></Link>
            </div>
            <div className="title-nav">
                <Link to="/"><h1>PSG 2020-2021</h1></Link>
            </div>
            <div className="nav-menu">
                <Link to="/effectif"><p>Effectif</p></Link>
                <Link to="/derniers-matchs"><p>Derniers Matchs</p></Link>
                <Link to="/prochains-matchs"><p>Prochains Matchs</p></Link>
                <Link to="/le-stade"><p>Le stade</p></Link>
                <Link to="/nos-legendes"><p>Légendes du club</p></Link>
                <Link to="/login"> <img src={adminIcon} alt="icône accès admin" className="admin-icon"/></Link>
            </div>
        </div>
    )
}