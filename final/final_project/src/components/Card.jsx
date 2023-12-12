import React from 'react';
import {useState} from 'react';
import './Card.css';
import Dialog from './Dialog';
import Button from './Button';

const Card = ({name, imageSrc, species, personality, gender}) => {
    // here is to let the whole page only shows one dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleDialog = () => {
    setIsDialogOpen(true);

    }


    const closeDialog = () => {
    setIsDialogOpen(false);
    };


    return (
        <div className="card">
            <h2 className='name'>{isFavorite && '❤️'} {name}</h2>
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
                className = 'lovelink' onClick = {toggleDialog} />
            {isDialogOpen && <Dialog onClose={closeDialog} isFavorite = {isFavorite} setIsFavorite = {setIsFavorite} />}
        </div>
    );
};

export default Card;