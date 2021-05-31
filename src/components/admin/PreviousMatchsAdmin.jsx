import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

export default function PreviousMatchsAdmin () {

    return (
        <div className="card-admin-results">
            <form>
                <h1>Ajout résultat matchs précédents</h1>
                    <div>
                        <table className="admin-table">
                            <thead>
                                <th>Compétition</th>
                                <th>Équipe domicile</th>
                                <th>Logo équipe dom.</th>
                                <th>Score dom.</th>
                                <th>Équipe extérieure</th>
                                <th>Logo équipe ext.</th>
                                <th>Score ext.</th>
                                <th>Date</th>
                            </thead>
                            <tr>
                                <td>
                                    <input type="text"/>
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="file" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <input type="file" />
                                </td>
                                <td>
                                    <input type="date" />
                                </td>
                            </tr>
                        </table>
                    </div>
                <button type="submit" className="admin-button-form">Ajouter</button>
            </form>

        </div>
    )
}