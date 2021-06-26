import React from 'react';
import './Stadium.css';
import psgstadium from '../../assets/stade-psg.jpg';
import leparc from '../../assets/parc-des-princes.jpeg';


export default function Stadium() {
    return (
        <div className="container-stadium">
            <img src={psgstadium} alt="Parc des princes" className="bg-stadium"/>
            <h1>Le Parc des Princes</h1>
                <div className="presentation-stadium">
                    <p>
                    Le Paris Saint-Germain est indissociable de son stade mythique, le Parc des Princes, là où s’écrit l’histoire des Rouge & Bleu.
                    Fort de plus 35 000 abonnés chaque saison, le Parc des Princes est un stade résolument dédié au football. La marque Paris Saint-Germain et son logo sont désormais inscrits dans l’écrin du stade où les Rouge et Bleu ont disputé plus de 1 000 matches officiels depuis le premier d’entre eux, le 10 novembre 1973, face au Red Star. L’été suivant, après son accession en Première Division, le jeune PSG, créé quatre ans plus tôt, deviendra le club résident de ce site historique du sport parisien, inauguré en 1897 sous la forme d’un vélodrome. Bien plus tard, en 1972, l’enceinte prendra ses contours actuels, imaginés par l’architecte Roger Taillibert.
                    </p>
                    <img src={leparc} alt="Le stade" />
                    <p>
                    Le Club dispose aujourd'hui de l’outil adéquat pour l’accompagner dans son ambition sportive. Profondément rénové, le Parc des Princes n’a jamais été aussi accueillant ; il est devenu un stade du 21ème siècle : moderne, fonctionnel, convivial et 100% connecté. Une enceinte à la hauteur du prestige de la Ville lumière où les fans, en famille ou entre amis, viennent vivre une expérience totale, festive. Désormais dédié au football, le Parc des Princes fait rayonner Paris à travers le monde.  
                    </p>
                </div>
                <h2>Plan d'accès</h2>
                <div className="div-access">
                    <div>
                        <h3>SE RENDRE AU PARC</h3>
                        <p>
                        Adresse : 
                        <br />
                        24 Rue de Commandant Guilbaud
                        <br />
                        75016 Paris
                        <br /><br />
                        Accès en métro :
                        <br />
                        Ligne 9 Porte de Saint-Cloud
                        <br />
                        Ligne 10 Porte d'Auteuil
                        <br /><br />
                        Accès en bus :
                        <br />
                        Lignes 22, 62 et 72, arrêt Porte de Saint-Cloud
                        <br />
                        Lignes 32 et 52, arrêt Porte d'Auteuil
                        <br /><br />
                        Accès en voiture : 
                        <br />
                        par le périphérique, sortie D910 / Boulogne.
                        </p>
                    </div>
                    <iframe title="Parc des Princes" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10503.51831964161!2d2.2530487!3d48.8414356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd2450406cef2c5c!2sLe%20Parc%20des%20Princes!5e0!3m2!1sfr!2sfr!4v1622396157365!5m2!1sfr!2sfr" width="800" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
        </div>
    )
}