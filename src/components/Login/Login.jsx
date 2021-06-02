import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../UserContext';


export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loginStatus, setLoginStatus] = useState();
    const {user, setUser} = useContext(UserContext);

    const onSubmit = () => {
        axios.post(`http://localhost:8000/admins/login`, {
            username: username,
            password: password,
          })
          .then((res) => res.data).then((data) =>{
            if(data.message) {
              setLoginStatus(data.message);
              console.log(data.message);
            } else {
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", data.user.name);
              setLoginStatus("Bienvenue "+ data.user.name);
              setUser(localStorage.getItem("user"));
              console.log(data)
              }
            }
            );
      }

    const history = useHistory();
    
    const handleHistory = () => {
        history.push("/admin");
    }

console.log(username)

    return (
        <div className="container-login">
            <div className="container-form">
                <form className="login-form">
                    <label htmlFor="identifiant">Identifiant : </label>
                    <input type="text" id="identifiant" onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Link to="/admin"><button className="button-form" onClick={onSubmit}>Connexion</button></Link>
                    <p>{loginStatus}</p>
                    {user != null ? handleHistory() : null }
                </form>
            </div>
        </div>
    )
}