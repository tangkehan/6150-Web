import React from 'react';
import {useState} from 'react';
import './card_style.css';
import Dialog from './dialog';
import Button from './Button';

const Card = ({key, name, imageSrc, species, personality, gender, toggleDialog }) => {


    return (
        <div className="card">
            <h2 className='name'>{name}</h2>
            <div className = 'img_container'>
                <img src={imageSrc} alt={`${name} image`} />
            </div>
            <table className="animal-table">
                <tbody>
                    <tr className="header-row">
                        <td>Species</td>
                        <td>Personality</td>
                        <td>Gender</td>
                    </tr>
                    <tr className="info-row">
                        <td>{species}</td>
                        <td>{personality}</td>
                        <td>{gender}</td>
                    </tr>
                </tbody>
            </table>
            <Button type = 'button'  visual="link" text = {`View ${name} Amiibo`} 
                className = 'buylink' onClick = {toggleDialog} />
        </div>
    );
};

export default Card;