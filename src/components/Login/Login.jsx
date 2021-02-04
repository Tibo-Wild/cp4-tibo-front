import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className="container-login">
            <div className="container-form">
                <form className="login-form">
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input type="email" id="email" value="admin"/>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" value="admin"/>
                    <Link to="/admin"><button className="button-form">Connexion</button></Link>
                </form>
            </div>
        </div>
    )
}