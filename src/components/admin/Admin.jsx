import React from 'react';
import './Admin.css';
import VideoAdmin from '../../assets/admin.mp4'


export default function Admin() {
    return (
        <div className="container-admin">
            <h2>Désolé, j'ai pas eu le temps...</h2>
            <video autoplay="true" controls width="600">
                <source src={VideoAdmin} type="video/mp4"></source>
            </video>
        </div>
    )
}

