import React from 'react';
import './Footer.css';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import Snapchat from '../../assets/snapchat.png';
import TikTok from '../../assets/tiktok.svg';
import Dugout from '../../assets/dugout.png';


export default function Footer() {
    return (
        <div className="container-footer">
           <a href="https://www.facebook.com/PSG" rel="noreferrer noopener" target="_blank"><img src={Facebook} alt="Facebook"/></a>
           <a href="https://www.instagram.com/psg/" rel="noreferrer noopener" target="_blank"><img src={Instagram} alt="Instagram"/></a>
           <a href="https://twitter.com/PSG_inside" rel="noreferrer noopener" target="_blank"><img src={Twitter} alt="Twitter"/></a>
           <a href="https://www.youtube.com/c/PSG" rel="noreferrer noopener" target="_blank"><img src={Youtube} alt="Youtube"/></a>
           <a href="https://www.snapchat.com/add/psg" rel="noreferrer noopener" target="_blank"><img src={Snapchat} alt="Snapchat"/></a>
           <a href="https://www.tiktok.com/@psg?" rel="noreferrer noopener" target="_blank"><img src={TikTok} alt="TikTok"/></a>
           <a href="https://dugout.com/psg" rel="noreferrer noopener" target="_blank"><img src={Dugout} alt="Dugout"/></a>
        </div>
    )
}