import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="container-footer">
           <Link><img src="" alt="Facebook"/></Link>
           <Link><img src="" alt="Instagram"/></Link>
           <Link><img src="" alt="Twitter"/></Link>
           <Link><img src="" alt="Youtube"/></Link>
           <Link><img src="" alt="Snapchat"/></Link>
           <Link><img src="" alt="TikTok"/></Link>
           <Link><img src="" alt="Dugout"/></Link>
        </div>
    )
}