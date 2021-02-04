import React from 'react';
import './Navbar.css';
import logoPSG from '../../assets/logo_PSG.png';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="container-nav">
            <div className="nav-logo">
                <Link><img src={logoPSG} alt="logo"/></Link>
            </div>
            <div className="title-nav">
                <h1>infos PSG 2020/2021</h1>
            </div>
            <div className="nav-menu">
                <Link><p>Effectif</p></Link>
                <Link><p>Derniers Matchs</p></Link>
                <Link><p>Prochains Matchs</p></Link>
                <Link><p>Le stade</p></Link>
                <Link><p>Légendes du club</p></Link>
                <Link><p>Direction</p></Link>
                <Link><p>Login</p></Link>
            </div>
        </div>
    )
}